<script lang="ts">
  export let label: string;
  export let active = false;
</script>

<span
  class={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
    active ? 'border-ember bg-ember text-white' : 'border-line bg-white/[0.55] text-ink'
  }`}
>
  {label}
</span>
