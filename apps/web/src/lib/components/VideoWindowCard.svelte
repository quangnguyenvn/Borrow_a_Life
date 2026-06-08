<script lang="ts">
  export let title: string;
  export let label: string;
  export let videoUrl: string;
  export let poster: string;
</script>

<article class="overflow-hidden rounded-lg border border-line bg-white/75 shadow-soft">
  <div class="relative aspect-video bg-ink">
    <video
      class="h-full w-full object-cover"
      src={videoUrl}
      poster={poster}
      autoplay
      muted
      loop
      playsinline
      aria-label={title}
    ></video>
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-white">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{label}</p>
      <h3 class="mt-1 text-lg font-semibold">{title}</h3>
    </div>
  </div>
</article>
