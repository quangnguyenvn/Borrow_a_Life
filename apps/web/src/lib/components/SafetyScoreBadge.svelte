<script lang="ts">
  export let score: number;
  export let level: string | undefined = undefined;
</script>

<div class="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1 text-sm font-semibold text-ink">
  <span class="h-2 w-2 rounded-full {score >= 90 ? 'bg-moss' : score >= 80 ? 'bg-amber-500' : 'bg-ember'}"></span>
  <span>{score}</span>
  <span class="text-muted">{level ?? 'Safety'}</span>
</div>
