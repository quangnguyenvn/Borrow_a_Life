<script lang="ts">
  export let title = 'Request this life window';
  export let href = '';
</script>

<div class="sticky top-24 rounded-lg border border-line bg-white/80 p-6 shadow-soft">
  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Public, bounded, respectful</p>
  <h2 class="mt-3 text-2xl font-semibold text-ink">{title}</h2>
  <p class="mt-3 text-sm leading-6 text-muted">
    This is not a tour. This is a public window into the rhythm of a real person's life.
  </p>
  <a class="focus-ring mt-6 block rounded-full bg-ink px-5 py-4 text-center font-semibold text-white transition hover:bg-ember" href={href}>
    Request this life window
  </a>
</div>
