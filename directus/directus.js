import { createDirectus, staticToken, rest } from '@directus/sdk';

const client = createDirectus(import.meta.env.VITE_DIRECTUS_URL)
	.with(staticToken(import.meta.env.VITE_DIRECTUS_ACCESS_TOKEN))
	.with(rest());

export default client;
