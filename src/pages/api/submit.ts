import type { APIRoute } from 'astro';
import { appendSubmission } from '../../utils/data';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const required = ['name', 'creator', 'url'];
    if (!required.every((field) => body?.[field])) {
      return new Response(JSON.stringify({ error: 'חסרים שדות חובה' }), { status: 400 });
    }

    const record = await appendSubmission({
      slug: body.slug,
      name: body.name,
      url: body.url,
      creator: body.creator,
      description: body.description || '',
      tags: body.tags || [],
      thumbnail: body.thumbnail || 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80'
    });

    return new Response(JSON.stringify({ ok: true, site: record }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'server-error' }), { status: 500 });
  }
};
