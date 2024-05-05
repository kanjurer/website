import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';

export const GET: APIRoute = async function GET() {
  try {
    const src = readFileSync('./src/assets/pdfs/Kanav_Bhardwaj_Resume.pdf');
    const buffer = Buffer.from(src);

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    });
  } catch (error) {
    throw new Error(`Something went wrong in pdf-resource.pdf route!: ${error}`);
  }
};
