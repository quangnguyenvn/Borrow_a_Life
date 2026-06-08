import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = 'D:\\git\\Borow_A_Life\\demo';
const outDir = join(cwd, 'output');
const userDataDir = join(cwd, '.chrome-record-profile');
const port = 9223;

mkdirSync(outDir, { recursive: true });
try {
  rmSync(userDataDir, { recursive: true, force: true });
} catch {}

const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    '--disable-gpu',
    '--autoplay-policy=no-user-gesture-required',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,900',
    'about:blank'
  ],
  { stdio: ['ignore', 'ignore', 'pipe'] }
);

let stderr = '';
chrome.stderr.on('data', (chunk) => {
  stderr += chunk.toString();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getWebSocketUrl() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((r) => r.json());
      const page = targets.find((target) => target.type === 'page' && target.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      await sleep(250);
    }
  }
  throw new Error(`Chrome DevTools did not start. ${stderr}`);
}

function cdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
      return;
    }

    if (message.method && listeners.has(message.method)) {
      listeners.get(message.method)(message.params);
    }
  };

  return new Promise((resolve, reject) => {
    ws.onerror = reject;
    ws.onopen = () => {
      resolve({
        send(method, params = {}) {
          id += 1;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
        },
        on(method, cb) {
          listeners.set(method, cb);
        },
        close() {
          ws.close();
        }
      });
    };
  });
}

const wsUrl = await getWebSocketUrl();
const cdp = await cdpClient(wsUrl);

await cdp.send('Page.enable');
await cdp.send('Runtime.enable');
await cdp.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: outDir
});

const fileUrl = `file:///${resolve(cwd, 'record-demo.html').replaceAll('\\', '/')}`;
await cdp.send('Page.navigate', { url: fileUrl });

let result = null;
for (let i = 0; i < 220; i += 1) {
  const evalResult = await cdp.send('Runtime.evaluate', {
    expression: 'window.__recordingDone || window.__recordingError || null',
    returnByValue: true
  });
  const value = evalResult.result?.value;
  if (value) {
    if (typeof value === 'string') throw new Error(value);
    result = value;
    break;
  }
  await sleep(1000);
}

if (!result) throw new Error('Recording timed out');

await sleep(3000);
cdp.close();
chrome.kill();

console.log(JSON.stringify({ outDir, result }, null, 2));
