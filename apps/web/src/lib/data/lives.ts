import type { LifeListing } from '$lib/types';

export const lives: LifeListing[] = [
  {
    slug: 'berlin-software-engineer',
    title: 'Borrow a Morning as a Berlin Software Engineer',
    host: 'Alex',
    hostTitle: 'Software engineer in Kreuzberg',
    location: 'Berlin, Kreuzberg public route',
    duration: '4 hours',
    durationHours: 4,
    price: '$86',
    safetyScore: 94,
    tags: ['career future', 'Berlin', 'office rhythm'],
    considering: ['moving to Europe', 'software engineering', 'office life in Berlin'],
    category: 'Career Futures',
    visualTone: 'from-skydeep via-moss to-ember',
    imageUrl: 'https://unsplash.com/photos/FCHlYvR5gJI/download?force=true',
    imageAlt: 'Software engineer coding on a laptop',
    videoUrl: '/videos/berlin-software-engineer.mp4',
    why: 'This window is for people who need to feel the shape of a software engineer workday before they turn that idea into a relocation plan, bootcamp deposit, or career leap.',
    hostBio:
      'Alex spends his weekdays between focused engineering blocks, public cafe thinking time, transit transitions, and practical conversations about the cost of choosing a technical life in Berlin.',
    whoFor: [
      'Students considering software engineering',
      'People weighing a move to Europe',
      'Career changers who want a grounded view of office life'
    ],
    experience: [
      'A public coffee briefing about the decision you are exploring',
      'A walk through the commute rhythm around Kreuzberg',
      'A non-confidential work planning window in a public space',
      'A closing conversation about tradeoffs, pressure, and pride'
    ],
    notDo: [
      'Enter private offices or confidential workplaces',
      'Review private code, company data, or internal documents',
      'Use private cars or isolated routes'
    ],
    itinerary: [
      { time: '09:00', title: 'Coffee briefing and decision map', location_type: 'public' },
      { time: '10:00', title: 'Kreuzberg commute rhythm walk', location_type: 'public' },
      { time: '11:00', title: 'Public focus block and Q&A', location_type: 'semi_public' },
      { time: '13:00', title: 'Reflection lunch in a public food court', location_type: 'public' }
    ]
  },
  {
    slug: 'farm-morning',
    title: 'A Morning with a Vegetable Farmer',
    host: 'Lukas',
    hostTitle: 'Small farm grower outside the city',
    location: 'Public farm road + produce stand',
    duration: '3 hours',
    durationHours: 3,
    price: '$56',
    safetyScore: 92,
    tags: ['farm life', 'rural rhythm', 'food systems'],
    considering: ['slower town life', 'farming work', 'work close to nature'],
    category: 'Place Rhythms',
    visualTone: 'from-moss via-emerald-700 to-amber-500',
    imageUrl: 'https://unsplash.com/photos/qpBY6FHaW5w/download?force=true',
    imageAlt: 'Farmers working in a field with a tractor',
    videoUrl: '/videos/vegetable-farmer.mp4',
    why: 'A public morning window into soil, weather, repetition, and the quiet pride behind growing food.',
    hostBio:
      'Lukas grows vegetables outside the city and shares the public-facing rhythm of farm work: weather checks, produce sorting, buyer conversations, and long-term patience.',
    whoFor: ['People craving a quieter rhythm', 'City workers curious about farm life', 'Anyone exploring work closer to nature'],
    experience: ['Public farm road arrival', 'Field-edge observation', 'Produce stand rhythm', 'Conversation about weather, income, and patience'],
    notDo: ['Operate farm machinery', 'Enter private barns', 'Walk into isolated fields alone', 'Handle tools without permission'],
    itinerary: [
      { time: '07:30', title: 'Public farm road arrival and safety briefing', location_type: 'public' },
      { time: '08:15', title: 'Field-edge observation', location_type: 'public' },
      { time: '09:30', title: 'Produce stand reflection', location_type: 'semi_public' }
    ]
  },
  {
    slug: 'line-cook',
    title: 'A Dinner Prep Window with a Line Cook',
    host: 'Elena',
    hostTitle: 'Line cook in an open kitchen restaurant',
    location: 'Lisbon open kitchen restaurant',
    duration: '4 hours',
    durationHours: 4,
    price: '$88',
    safetyScore: 90,
    tags: ['kitchen rhythm', 'hospitality', 'craft work'],
    considering: ['culinary work', 'restaurant life', 'creative service work'],
    category: 'Second Paths',
    visualTone: 'from-moss via-rose-900 to-amber-500',
    imageUrl: 'https://unsplash.com/photos/Dx2ze80gMrA/download?force=true',
    imageAlt: 'Woman working in a restaurant kitchen',
    videoUrl: '/videos/line-cook.mp4',
    why: 'A grounded look at the heat, timing, pressure, and pride behind professional kitchen work.',
    hostBio:
      'Elena moved from corporate marketing into restaurant work and now shares an honest public window into prep, service rhythm, repetition, and creative discipline.',
    whoFor: ['Aspiring cooks', 'Hospitality career explorers', 'People leaving desk work for craft work'],
    experience: ['Pre-service briefing from the dining counter', 'Open kitchen prep observation', 'Service rhythm conversation', 'Post-rush reflection'],
    notDo: ['Enter closed kitchen zones', 'Handle knives or hot equipment', 'Interrupt service', 'Access staff-only storage'],
    itinerary: [
      { time: '16:00', title: 'Dining counter briefing', location_type: 'semi_public' },
      { time: '17:00', title: 'Open kitchen prep observation', location_type: 'semi_public' },
      { time: '19:00', title: 'Public dinner reflection', location_type: 'public' }
    ]
  },
  {
    slug: 'street-vendor-morning',
    title: 'A Morning with a Street Vendor',
    host: 'Aylin',
    hostTitle: 'Market street vendor',
    location: 'Istanbul public market street',
    duration: '3 hours',
    durationHours: 3,
    price: '$52',
    safetyScore: 95,
    tags: ['street economy', 'market rhythm', 'small business'],
    considering: ['street economy', 'small business', 'early public work'],
    category: 'Place Rhythms',
    visualTone: 'from-slate-700 via-emerald-700 to-amber-500',
    imageUrl: 'https://unsplash.com/photos/CNdLhjVuV38/download?force=true',
    imageAlt: 'Street vendor serving food at a market stall',
    videoUrl: '/videos/street-vendor.mp4',
    why: 'A public morning window into the discipline, customer rhythm, and small margins behind street-level work.',
    hostBio:
      'Aylin runs a small public market stall and knows the difference between romanticizing a small business and living inside its daily constraints.',
    whoFor: ['Future small business owners', 'People curious about street economies', 'Anyone studying city routines'],
    experience: ['Public market arrival', 'Opening rhythm observation', 'Customer flow conversation', 'End-of-window reflection'],
    notDo: ['Handle hot equipment', 'Interrupt customers', 'Enter storage-only spaces', 'Photograph people without consent'],
    itinerary: [
      { time: '07:30', title: 'Public market arrival and safety briefing', location_type: 'public' },
      { time: '08:00', title: 'Opening rhythm observation', location_type: 'public' },
      { time: '09:30', title: 'Customer flow and reflection', location_type: 'public' }
    ]
  },
  {
    slug: 'founder-reality-check',
    title: 'A Work Window with a Startup Founder',
    host: 'Sophie',
    hostTitle: 'Early-stage startup founder',
    location: 'London coworking space',
    duration: '3 hours',
    durationHours: 3,
    price: '$76',
    safetyScore: 93,
    tags: ['startup founder', 'pressure', 'decision making'],
    considering: ['becoming a founder', 'startup life', 'building a company'],
    category: 'Career Futures',
    visualTone: 'from-zinc-900 via-skydeep to-ember',
    imageUrl: 'https://unsplash.com/photos/XyZfsXLB_ss/download?force=true',
    imageAlt: 'Woman working on a laptop at an office desk',
    why: 'A direct public window into ambition, uncertainty, prioritization, and the calendar math behind startup founder life.',
    hostBio:
      'Sophie is building an early-stage company and shares a public, non-confidential slice of the emotional and operational reality.',
    whoFor: ['Would-be founders', 'Operators thinking about startups', 'People drawn to founder mythology'],
    experience: ['Public founder standup reflection', 'Prioritization exercise', 'Fundraising pressure conversation', 'Reality check close'],
    notDo: ['Access confidential strategy', 'Join investor calls', 'Enter private offices'],
    itinerary: [
      { time: '14:00', title: 'Coworking cafe briefing', location_type: 'semi_public' },
      { time: '15:00', title: 'Priority mapping in public lounge', location_type: 'semi_public' },
      { time: '16:30', title: 'Reality check conversation', location_type: 'public' }
    ]
  },
  {
    slug: 'starting-over-waiting-room',
    title: 'The Waiting Room: A Morning with Someone Starting Over',
    host: 'Maya',
    hostTitle: 'Between jobs and rebuilding a routine',
    location: 'Dublin public library + job center + cafe',
    duration: '2.5 hours',
    durationHours: 2.5,
    price: '$36',
    safetyScore: 97,
    tags: ['starting over', 'quiet pressure', 'identity reset'],
    considering: ['uncertainty', 'job loss', 'rebuilding confidence'],
    category: 'Second Paths',
    visualTone: 'from-moss via-teal-700 to-skydeep',
    imageUrl: 'https://unsplash.com/photos/B4YEKRdjCQc/download?force=true',
    imageAlt: 'Person working on a laptop in a public library',
    why: 'A humane public window into the waiting, paperwork, small routines, and quiet courage of beginning again.',
    hostBio:
      'Maya is rebuilding after a job loss and offers a calm, honest view of what it means to keep dignity while life feels temporarily unresolved.',
    whoFor: ['People afraid of starting over', 'Anyone facing career uncertainty', 'People who want to understand quiet pressure without judgment'],
    experience: ['Public library routine', 'Job board and application rhythm', 'Cafe conversation about identity and hope', 'Next-step reflection'],
    notDo: ['Provide therapy', 'Promise outcomes', 'Review private documents', 'Ask invasive financial questions'],
    itinerary: [
      { time: '09:30', title: 'Library check-in and routine map', location_type: 'public' },
      { time: '10:15', title: 'Public job board and application rhythm', location_type: 'public' },
      { time: '11:15', title: 'Cafe reflection on starting over', location_type: 'public' }
    ]
  }
];

export function getLife(slug: string) {
  return lives.find((life) => life.slug === slug);
}

export const filters = {
  understand: ['A career', 'A city', 'A lifestyle', 'A business', 'A transition'],
  duration: ['90 min', '3 hours', '4-6 hours', '8 hours'],
  safety: ['Public only', 'Verified host', 'Group available'],
  mode: ['Observe', 'Conversation', 'Participate-lite']
};
