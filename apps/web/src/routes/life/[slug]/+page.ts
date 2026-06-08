import { error } from '@sveltejs/kit';
import { getLife } from '$lib/data/lives';

export function load({ params }) {
  const life = getLife(params.slug);

  if (!life) {
    error(404, 'Life window not found');
  }

  return { life };
}
