<script lang="ts">
  import type { LifeListing } from '$lib/types';

  export let life: LifeListing;
</script>

<aside class="rounded-lg border border-line bg-white/70 p-6 shadow-soft">
  <div class={`h-24 rounded-lg bg-gradient-to-br ${life.visualTone}`}></div>
  <div class="mt-5">
    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Life Host</p>
    <h2 class="mt-2 text-2xl font-semibold text-ink">{life.host}</h2>
    <p class="mt-1 text-sm text-ember">{life.hostTitle}</p>
    <p class="mt-4 leading-7 text-muted">{life.hostBio}</p>
  </div>
</aside>
