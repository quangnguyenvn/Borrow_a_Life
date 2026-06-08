<script lang="ts">
  import type { ItineraryItem } from '$lib/types';

  export let items: ItineraryItem[];
</script>

<div class="space-y-4">
  {#each items as item}
    <div class="grid grid-cols-[72px_1fr] gap-4">
      <div class="text-sm font-semibold text-ember">{item.time}</div>
      <div class="relative border-l border-line pb-5 pl-5">
        <span class="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-ink"></span>
        <h3 class="font-semibold text-ink">{item.title}</h3>
        <p class="mt-1 text-sm capitalize text-muted">{item.location_type.replace('_', ' ')}</p>
        {#if item.note}
          <p class="mt-2 text-sm text-muted">{item.note}</p>
        {/if}
      </div>
    </div>
  {/each}
</div>
