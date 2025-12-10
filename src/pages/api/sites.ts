import type { APIRoute } from 'astro';
import { readSites } from '../../utils/data';

export const GET: APIRoute = async () => {
  const sites = await readSites();
  return new Response(JSON.stringify({ sites }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
