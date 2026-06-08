<script lang="ts">
  import CategoryPill from '$lib/components/CategoryPill.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import VideoWindowCard from '$lib/components/VideoWindowCard.svelte';
  import { lives } from '$lib/data/lives';

  const videoWindows = lives
    .filter((life) => life.videoUrl)
    .map((life) => ({
      title: life.title.replace('Borrow a Morning as a ', '').replace('A Dinner Prep Window with a ', ''),
      label: life.category,
      videoUrl: life.videoUrl ?? '',
      poster: life.imageUrl
    }));
</script>

<HeroSection />

<section class="section-shell py-12">
  <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Life windows in motion</p>
      <h2 class="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-ink">Four public rhythms, seen from inside.</h2>
    </div>
    <p class="max-w-md leading-7 text-muted">
      Short demo windows make the idea feel concrete before someone chooses a life to borrow.
    </p>
  </div>

  <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
    {#each videoWindows as video}
      <VideoWindowCard {...video} />
    {/each}
  </div>
</section>

<section class="section-shell py-16">
  <div class="max-w-3xl">
    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">No life is ordinary from the inside.</p>
    <h2 class="mt-4 text-4xl font-semibold leading-tight text-ink">Borrow a public window into someone else's reality.</h2>
    <p class="mt-5 text-lg leading-8 text-muted">
      Borrow a Life starts with the decision you are exploring, then matches you with the rhythms, constraints, pride,
      and tradeoffs behind a real public life.
    </p>
  </div>

  <div class="mt-10 grid gap-5 md:grid-cols-3">
    {#each ['Career Futures', 'Place Rhythms', 'Second Paths'] as category}
      <article class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
        <CategoryPill label={category} active={category === 'Career Futures'} />
        <h3 class="mt-8 text-2xl font-semibold text-ink">{category}</h3>
        <p class="mt-4 leading-7 text-muted">
          {category === 'Career Futures'
            ? 'Try the felt reality of a profession before reshaping your future around it.'
            : category === 'Place Rhythms'
              ? 'Feel how life changes across cities, quiet towns, markets, neighborhoods, and slower public routines.'
              : 'Meet people who have already crossed the bridge you are considering.'}
        </p>
      </article>
    {/each}
  </div>
</section>

<section class="border-y border-line bg-gradient-to-br from-[#fff7ed] via-[#f7f3ed] to-[#e7f0e8] py-16 text-ink">
  <div class="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Safety Engine</p>
      <h2 class="mt-4 text-4xl font-semibold leading-tight">Safe, public, bounded by design.</h2>
      <p class="mt-5 leading-8 text-muted">
        The AI Safety Engine reviews every request before booking, explains the risk in plain language, and turns the session into a clear boundary contract.
      </p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      {#each [
        {
          title: 'Public rhythm only',
          body: 'Sessions stay in cafes, markets, coworking spaces, libraries, streets, and other visible public or semi-public places.'
        },
        {
          title: 'AI safety score',
          body: 'Every request gets a simple risk level with reasons, warnings, and rule violations before anyone can book.'
        },
        {
          title: 'Boundary contract first',
          body: 'Both sides see what is allowed, what is not allowed, and when the session should immediately end.'
        },
        {
          title: 'Private spaces are excluded',
          body: 'No overnight stays, private homes, isolated routes, private car-only plans, or confidential workplaces.'
        }
      ] as item}
        <div class="rounded-lg border border-line bg-white/[0.78] p-5 shadow-soft">
          <p class="text-lg font-semibold text-ink">{item.title}</p>
          <p class="mt-3 text-sm leading-6 text-muted">{item.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
