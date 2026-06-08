<script lang="ts">
  import SafetyScoreBadge from './SafetyScoreBadge.svelte';
  import type { LifeListing } from '$lib/types';

  export let life: LifeListing;
</script>

<a
  href={`/life/${life.slug}`}
  class="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white/70 shadow-soft transition hover:-translate-y-1 hover:bg-white"
>
  <div class="relative min-h-44 overflow-hidden bg-ink p-5 text-white">
    <img class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" src={life.imageUrl} alt={life.imageAlt} loading="lazy" />
    <div class="absolute inset-0 bg-gradient-to-t from-ink/[0.72] via-ink/20 to-ink/[0.42]"></div>
    <div class="relative flex items-start justify-between gap-3">
      <span class="rounded-full bg-white/[0.18] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
        {life.category}
      </span>
      <SafetyScoreBadge score={life.safetyScore} />
    </div>
  </div>
  <div class="flex flex-1 flex-col gap-5 p-6">
    <div>
      <h2 class="text-2xl font-semibold leading-tight text-ink">{life.title}</h2>
      <p class="mt-2 text-sm text-muted">{life.host} - {life.location}</p>
    </div>

    <div class="flex flex-wrap gap-2">
      {#each life.tags as tag}
        <span class="rounded-full bg-paper px-3 py-1 text-xs font-medium text-muted">{tag}</span>
      {/each}
    </div>

    <div class="mt-auto border-t border-line pt-5">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-muted">For people considering</p>
      <p class="mt-2 text-sm leading-6 text-ink">{life.considering.join(', ')}</p>
      <div class="mt-5 flex items-center justify-between text-sm font-semibold">
        <span>{life.duration} - {life.price}</span>
        <span class="text-ember group-hover:translate-x-1 transition">View rhythm</span>
      </div>
    </div>
  </div>
</a>
