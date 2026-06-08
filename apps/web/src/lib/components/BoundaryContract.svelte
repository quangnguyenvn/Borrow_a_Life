<script lang="ts">
  import type { BoundaryContractResponse } from '$lib/types';

  export let contract: BoundaryContractResponse;
</script>

<section class="rounded-lg border border-line bg-white/75 p-6 shadow-soft">
  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-ember">Boundary Contract</p>
  <h2 class="mt-2 text-2xl font-semibold text-ink">{contract.title}</h2>

  <div class="mt-6 grid gap-5 md:grid-cols-3">
    <div>
      <h3 class="font-semibold text-ink">Allowed</h3>
      <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
        {#each contract.allowed as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-ink">Not allowed</h3>
      <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
        {#each contract.not_allowed as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-ink">Required</h3>
      <ul class="mt-3 space-y-2 text-sm leading-6 text-muted">
        {#each contract.required as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>
