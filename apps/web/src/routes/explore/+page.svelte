<script lang="ts">
  import CategoryPill from '$lib/components/CategoryPill.svelte';
  import LifeCard from '$lib/components/LifeCard.svelte';
  import { filters, lives } from '$lib/data/lives';
</script>

<section class="section-shell py-12">
  <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Explore</p>
      <h1 class="mt-3 text-5xl font-semibold leading-tight text-ink">Find a life to borrow.</h1>
      <p class="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Not activities. Not tours. Public life rhythms for people standing near a real decision.
      </p>
    </div>
    <a class="focus-ring rounded-full bg-ink px-6 py-4 text-center font-semibold text-white transition hover:bg-ember" href="/borrow">
      Match by decision
    </a>
  </div>

  <div class="mt-10 grid gap-5 rounded-lg border border-line bg-white/[0.55] p-5 lg:grid-cols-4">
    <div>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">I want to understand</p>
      <div class="flex flex-wrap gap-2">
        {#each filters.understand as filter}
          <CategoryPill label={filter} active={filter === 'A career'} />
        {/each}
      </div>
    </div>
    <div>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Duration</p>
      <div class="flex flex-wrap gap-2">
        {#each filters.duration as filter}
          <CategoryPill label={filter} />
        {/each}
      </div>
    </div>
    <div>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Safety level</p>
      <div class="flex flex-wrap gap-2">
        {#each filters.safety as filter}
          <CategoryPill label={filter} active={filter === 'Public only'} />
        {/each}
      </div>
    </div>
    <div>
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Mode</p>
      <div class="flex flex-wrap gap-2">
        {#each filters.mode as filter}
          <CategoryPill label={filter} />
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {#each lives as life}
      <LifeCard {life} />
    {/each}
  </div>
</section>
