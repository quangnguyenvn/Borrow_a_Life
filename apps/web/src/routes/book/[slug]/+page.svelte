<script lang="ts">
  import { env } from '$env/dynamic/public';
  import BoundaryContract from '$lib/components/BoundaryContract.svelte';
  import SafetyScoreBadge from '$lib/components/SafetyScoreBadge.svelte';
  import type {
    BoundaryContractResponse,
    LocationType,
    SafetyAnalyzeRequest,
    SafetyAnalyzeResponse,
    SessionMode
  } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  const life = data.life;
  const engineUrl = env.PUBLIC_SAFETY_ENGINE_URL || 'http://localhost:8081';

  let date = '2026-06-08';
  let startTime = '09:00';
  let durationHours = 5;
  let sessionMode: SessionMode = 'observe';
  let locationType: LocationType = 'public';
  let hostVerified = true;
  let privateVehicleOnly = false;
  let publicExitMinutes = 5;
  let loading = false;
  let safety: SafetyAnalyzeResponse | null = null;
  let contract: BoundaryContractResponse | null = null;
  let errorMessage = '';
  let accepted = false;
  let requested = false;

  $: endTime = addHours(startTime, durationHours);

  function addHours(time: string, hours: number) {
    const [hour, minute] = time.split(':').map(Number);
    const total = hour * 60 + minute + Math.round(hours * 60);
    const nextHour = Math.floor(total / 60) % 24;
    const nextMinute = total % 60;
    return `${String(nextHour).padStart(2, '0')}:${String(nextMinute).padStart(2, '0')}`;
  }

  function buildPayload(): SafetyAnalyzeRequest {
    return {
      start_time: startTime,
      end_time: endTime,
      duration_hours: Number(durationHours),
      host_verified: hostVerified,
      session_mode: sessionMode,
      location_type: locationType,
      private_vehicle_only: privateVehicleOnly,
      public_exit_minutes: Number(publicExitMinutes),
      itinerary: life.itinerary
    };
  }

  async function analyzeSafety() {
    loading = true;
    errorMessage = '';
    safety = null;
    contract = null;
    accepted = false;
    requested = false;

    try {
      const payload = buildPayload();
      const analyzeResponse = await fetch(`${engineUrl}/safety/analyze`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!analyzeResponse.ok) {
        throw new Error('Safety analyze request failed');
      }

      safety = await analyzeResponse.json();

      const contractResponse = await fetch(`${engineUrl}/safety/boundary-contract`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!contractResponse.ok) {
        throw new Error('Boundary contract request failed');
      }

      contract = await contractResponse.json();
    } catch (error) {
      errorMessage = 'Safety Engine is offline. Please start the safety service on port 8081.';
    } finally {
      loading = false;
    }
  }

  function loadRejectedDemo() {
    durationHours = 10;
    locationType = 'remote_nature';
    privateVehicleOnly = true;
    hostVerified = false;
    publicExitMinutes = 25;
    sessionMode = 'participate_lite';
    safety = null;
    contract = null;
    accepted = false;
    requested = false;
    errorMessage = '';
  }
</script>

<section class="section-shell py-12">
  {#if requested}
    <div class="mx-auto max-w-3xl rounded-lg border border-line bg-white/80 p-10 text-center shadow-soft">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Request sent</p>
      <h1 class="mt-4 text-5xl font-semibold text-ink">This life window is safe, public, and bounded.</h1>
      <p class="mt-5 text-lg leading-8 text-muted">
        The host will receive your decision context, approved itinerary, safety score, and boundary contract.
      </p>
      <a class="focus-ring mt-8 inline-block rounded-full bg-ink px-6 py-4 font-semibold text-white" href="/explore">
        Explore more lives
      </a>
    </div>
  {:else}
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Booking and Safety</p>
        <h1 class="mt-3 text-5xl font-semibold leading-tight text-ink">{life.title}</h1>
        <p class="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Before booking, the AI Safety Engine checks whether this public window is allowed.
        </p>
      </div>
      <button class="focus-ring rounded-full border border-line bg-white/70 px-5 py-3 font-semibold text-ink" on:click={loadRejectedDemo}>
        Load rejected demo
      </button>
    </div>

    <div class="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <form class="rounded-lg border border-line bg-white/75 p-6 shadow-soft" on:submit|preventDefault={analyzeSafety}>
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="text-sm font-semibold text-muted">Date</span>
            <input class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" type="date" bind:value={date} />
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">Start time</span>
            <input class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" type="time" bind:value={startTime} />
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">Duration</span>
            <input class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" type="number" min="1" step="0.5" bind:value={durationHours} />
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">End time</span>
            <input class="mt-2 w-full rounded-lg border border-line bg-stone-100 px-4 py-3 text-muted" value={endTime} readonly />
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">Session mode</span>
            <select class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" bind:value={sessionMode}>
              <option value="observe">Observe</option>
              <option value="conversation">Conversation</option>
              <option value="participate_lite">Participate-lite</option>
            </select>
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">Location type</span>
            <select class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" bind:value={locationType}>
              <option value="public">Public</option>
              <option value="semi_public">Semi-public</option>
              <option value="private_home">Private home</option>
              <option value="remote_nature">Remote nature</option>
              <option value="nightlife">Nightlife</option>
              <option value="confidential_workplace">Confidential workplace</option>
            </select>
          </label>
          <label class="block">
            <span class="text-sm font-semibold text-muted">Public exit within minutes</span>
            <input class="focus-ring mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3" type="number" min="0" bind:value={publicExitMinutes} />
          </label>
        </div>

        <div class="mt-6 grid gap-3">
          <label class="flex items-center gap-3 rounded-lg bg-paper px-4 py-3 text-sm font-semibold text-ink">
            <input type="checkbox" bind:checked={hostVerified} />
            Host verified
          </label>
          <label class="flex items-center gap-3 rounded-lg bg-paper px-4 py-3 text-sm font-semibold text-ink">
            <input type="checkbox" bind:checked={privateVehicleOnly} />
            Private vehicle only
          </label>
        </div>

        <button class="focus-ring mt-6 w-full rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-ember" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Safety'}
        </button>
      </form>

      <div class="space-y-6">
        {#if errorMessage}
          <div class="rounded-lg border border-ember/30 bg-white/80 p-6 text-ember shadow-soft">
            {errorMessage}
          </div>
        {/if}

        {#if safety}
          <section class="rounded-lg border border-line bg-white/80 p-6 shadow-soft">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Safety result</p>
                <h2 class="mt-2 text-3xl font-semibold text-ink">{safety.allowed ? 'Allowed' : 'Rejected'}</h2>
              </div>
              <SafetyScoreBadge score={safety.score} level={`${safety.level} risk`} />
            </div>

            <div class="mt-6 grid gap-4 md:grid-cols-3">
              <div>
                <h3 class="font-semibold text-ink">Reasons</h3>
                <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {#each safety.reasons as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-ink">Warnings</h3>
                <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {#each safety.warnings.length ? safety.warnings : ['No warnings'] as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-ink">Rule violations</h3>
                <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {#each safety.violations.length ? safety.violations : ['No violations'] as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </section>
        {/if}

        {#if contract}
          <BoundaryContract {contract} />
          <label class="flex items-center gap-3 rounded-lg border border-line bg-white/75 p-5 font-semibold text-ink shadow-soft">
            <input type="checkbox" bind:checked={accepted} />
            I understand this is a public, bounded experience.
          </label>
        {/if}

        {#if safety?.allowed && accepted}
          <button class="focus-ring w-full rounded-full bg-ember px-6 py-4 font-semibold text-white shadow-soft" on:click={() => (requested = true)}>
            Request this life window
          </button>
        {/if}
      </div>
    </div>
  {/if}
</section>
