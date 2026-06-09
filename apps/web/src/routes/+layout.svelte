<script lang="ts">
  import '../app.css';
</script>

<div class="min-h-screen text-ink">
  <header class="sticky top-0 z-40 border-b border-line/70 bg-paper/[0.82] backdrop-blur-xl">
    <nav class="section-shell flex h-16 items-center justify-between">
      <a href="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight">
        <img class="h-9 w-9 rounded-lg shadow-sm" src="/brand-mark.svg" alt="Borrow a Life" />
        <span>Borrow a Life</span>
      </a>
      <div class="hidden items-center gap-6 text-sm font-medium text-muted sm:flex">
        <a class="transition hover:text-ink" href="/">Home</a>
        <a class="transition hover:text-ink" href="/explore">Explore</a>
        <a class="transition hover:text-ink" href="/borrow">Borrow Flow</a>
        <a class="transition hover:text-ink" href="/safety">Safety</a>
      </div>
      <a class="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember" href="/explore">
        Find a life
      </a>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer class="section-shell py-12 text-sm text-muted">
    <div class="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-semibold text-ink">Borrow a Life is an MVP concept being shaped into a real startup.</p>
        <p class="mt-1">Built for ordinary.help: ordinary lives that help people see their own differently.</p>
      </div>
      <div class="flex flex-col gap-1 md:items-end">
        <a class="font-semibold text-ember transition hover:text-ink" href="mailto:quangnguyen@octech.com.vn">quangnguyen@octech.com.vn</a>
        <a class="font-semibold text-ember transition hover:text-ink" href="https://www.linkedin.com/in/quang-nguyen-10422718b/" target="_blank" rel="noreferrer">
          LinkedIn: Quang Nguyen
        </a>
      </div>
    </div>
  </footer>
</div>
