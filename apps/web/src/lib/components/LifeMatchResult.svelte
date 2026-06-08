<script lang="ts">
  import type { LifeListing } from '$lib/types';

  export let life: LifeListing;
  export let fit: number;
  export let selected = false;
</script>

<div class={`rounded-lg border p-5 transition ${selected ? 'border-ember bg-white shadow-soft' : 'border-line bg-white/60'}`}>
  <div class="flex items-start justify-between gap-4">
    <div>
      <p class="text-sm font-semibold text-ember">{fit}% Life Fit</p>
      <h3 class="mt-1 text-xl font-semibold text-ink">{life.title}</h3>
      <p class="mt-2 text-sm text-muted">{life.host} - {life.location}</p>
    </div>
    <span class="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-ink">{life.duration}</span>
  </div>
  <p class="mt-4 text-sm leading-6 text-muted">{life.why}</p>
</div>
