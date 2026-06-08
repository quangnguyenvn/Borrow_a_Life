<script lang="ts">
  import LifeMatchResult from '$lib/components/LifeMatchResult.svelte';
  import { lives } from '$lib/data/lives';

  let decision = "I'm thinking about moving to Berlin and becoming a software engineer.";
  let step = 1;
  let selectedSlug = 'berlin-software-engineer';

  const matches = [
    { life: lives[0], fit: 94 },
    { life: lives[4], fit: 83 },
    { life: lives[2], fit: 72 }
  ];
</script>

<section class="section-shell py-12">
  <div class="max-w-3xl">
    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Borrow Flow</p>
    <h1 class="mt-3 text-5xl font-semibold leading-tight text-ink">What life decision are you exploring?</h1>
    <p class="mt-4 text-lg leading-8 text-muted">
      Borrow a Life matches possible futures by decision, not destination.
    </p>
  </div>

  <div class="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
    <div class="rounded-lg border border-line bg-white/70 p-6 shadow-soft">
      <div class="flex gap-2 text-sm font-semibold">
        <span class={`rounded-full px-3 py-1 ${step >= 1 ? 'bg-ink text-white' : 'bg-paper text-muted'}`}>1</span>
        <span class={`rounded-full px-3 py-1 ${step >= 2 ? 'bg-ink text-white' : 'bg-paper text-muted'}`}>2</span>
        <span class={`rounded-full px-3 py-1 ${step >= 3 ? 'bg-ink text-white' : 'bg-paper text-muted'}`}>3</span>
      </div>

      <label class="mt-8 block text-sm font-semibold uppercase tracking-[0.18em] text-muted" for="decision">
        Your decision
      </label>
      <textarea
        id="decision"
        bind:value={decision}
        rows="7"
        class="focus-ring mt-3 w-full resize-none rounded-lg border border-line bg-paper p-4 leading-7 text-ink"
        placeholder="I'm thinking about moving to Berlin and becoming a software engineer."
      ></textarea>

      <button
        class="focus-ring mt-5 w-full rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-ember"
        on:click={() => (step = Math.max(step, 2))}
      >
        Find life matches
      </button>
    </div>

    <div class="space-y-4">
      {#if step === 1}
        <div class="rounded-lg border border-line bg-white/[0.55] p-8">
          <p class="text-xl leading-8 text-muted">
            Try a possible future before committing to it. Your answer becomes the lens for every match.
          </p>
        </div>
      {:else}
        {#each matches as match}
          <button class="block w-full text-left" on:click={() => { selectedSlug = match.life.slug; step = 3; }}>
            <LifeMatchResult life={match.life} fit={match.fit} selected={selectedSlug === match.life.slug} />
          </button>
        {/each}
      {/if}

      {#if step >= 3}
        <div class="rounded-lg border border-line bg-ink p-6 text-white shadow-soft">
          <p class="text-sm uppercase tracking-[0.18em] text-white/60">Selected public rhythm</p>
          <h2 class="mt-2 text-2xl font-semibold">{matches.find((match) => match.life.slug === selectedSlug)?.life.title}</h2>
          <a class="focus-ring mt-5 inline-block rounded-full bg-ember px-6 py-4 font-semibold text-white" href={`/book/${selectedSlug}`}>
            Continue to booking and safety
          </a>
        </div>
      {/if}
    </div>
  </div>
</section>
