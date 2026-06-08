<script lang="ts">
  export let title: string;
  export let rules: string[];
</script>

<section class="rounded-lg border border-line bg-white/70 p-6 shadow-soft">
  <h2 class="text-2xl font-semibold text-ink">{title}</h2>
  <ul class="mt-5 grid gap-3 text-muted sm:grid-cols-2">
    {#each rules as rule}
      <li class="rounded-lg bg-paper px-4 py-3 text-sm leading-6">{rule}</li>
    {/each}
  </ul>
</section>
