<script lang="ts">
  import RuleList from '$lib/components/RuleList.svelte';

  const rules = [
    '18+ only',
    'Default time: 08:00-20:00',
    'Verified host time: 06:00-22:00',
    'Maximum 8 hours',
    'No overnight',
    'No private homes, bedrooms, hotels, or isolated places',
    'Public or semi-public locations only',
    'No remote 1:1 sessions in forests, cabins, farms, mountains, or abandoned places',
    'Every session must have a public exit point nearby',
    'Full itinerary must be shared before booking',
    'Location changes require in-app approval',
    'No private car-only experiences',
    'No romantic, sexual, or emotionally manipulative services',
    'No confidential workplaces',
    'AI safety score and boundary contract required before booking',
    'In-session check-ins required'
  ];
</script>

<section class="section-shell py-12">
  <div class="max-w-4xl">
    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Safety</p>
    <h1 class="mt-3 text-5xl font-semibold leading-tight text-ink">Borrow a Life is public by default.</h1>
    <p class="mt-5 text-xl leading-9 text-muted">
      Borrow a Life is not about entering someone's private life. It is about experiencing the public rhythm of their reality.
    </p>
  </div>

  <div class="mt-10">
    <RuleList title="Borrow a Life V1 Rules" {rules} />
  </div>
</section>
