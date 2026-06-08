<script lang="ts">
  import BookingPanel from '$lib/components/BookingPanel.svelte';
  import HostProfileCard from '$lib/components/HostProfileCard.svelte';
  import ItineraryTimeline from '$lib/components/ItineraryTimeline.svelte';
  import SafetyScoreBadge from '$lib/components/SafetyScoreBadge.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const life = data.life;
</script>

<section class="section-shell py-12">
  <div class="relative overflow-hidden rounded-lg bg-ink p-8 text-white shadow-soft lg:p-12">
    <img class="absolute inset-0 h-full w-full object-cover" src={life.imageUrl} alt={life.imageAlt} />
    <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20"></div>
    <div class="relative max-w-4xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Not a tour. Not a class. A life rhythm.</p>
      <h1 class="mt-5 text-5xl font-semibold leading-tight lg:text-6xl">{life.title}</h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-white/[0.78]">
        This is not a tour. This is a public window into the rhythm of a real person's life.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <SafetyScoreBadge score={life.safetyScore} />
        <span class="rounded-full bg-white/[0.16] px-4 py-2 text-sm font-semibold">{life.duration}</span>
        <span class="rounded-full bg-white/[0.16] px-4 py-2 text-sm font-semibold">{life.price}</span>
      </div>
    </div>
  </div>

  <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
    <div class="space-y-8">
      <section class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
        <h2 class="text-3xl font-semibold text-ink">Why this life matters</h2>
        <p class="mt-4 text-lg leading-8 text-muted">{life.why}</p>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <div class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
          <h2 class="text-2xl font-semibold text-ink">Who this is for</h2>
          <ul class="mt-4 space-y-3 text-muted">
            {#each life.whoFor as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
        <div class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
          <h2 class="text-2xl font-semibold text-ink">What you will experience</h2>
          <ul class="mt-4 space-y-3 text-muted">
            {#each life.experience as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      </section>

      <section class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
        <h2 class="text-2xl font-semibold text-ink">The rhythm</h2>
        <div class="mt-6">
          <ItineraryTimeline items={life.itinerary} />
        </div>
      </section>

      <section class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
        <h2 class="text-2xl font-semibold text-ink">What you will not do</h2>
        <ul class="mt-4 space-y-3 text-muted">
          {#each life.notDo as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="rounded-lg border border-line bg-white/70 p-7 shadow-soft">
        <h2 class="text-2xl font-semibold text-ink">Boundary contract preview</h2>
        <p class="mt-4 leading-8 text-muted">
          Stay in the approved public itinerary, ask respectful career and lifestyle questions, do not request private access,
          and end the session immediately if either side feels unsafe.
        </p>
      </section>
    </div>

    <div class="space-y-6">
      <HostProfileCard {life} />
      <BookingPanel href={`/book/${life.slug}`} />
    </div>
  </div>
</section>
