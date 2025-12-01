import { client } from '@/sanity/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {urlFor} from "@/sanity/lib/image";

interface ComicPageProps {
  params: Promise<{ id?: string }>;
}

const COMIC_QUERY = `*[_type == "comic" && _id == $id][0]{
  _id,
  name,
  "pages": pages[].asset,
}`;

export default async function Comic ({ params }: ComicPageProps) {
  // Await params if it's a promise
  const resolvedParams = await params;
  console.log('Params:', resolvedParams);
  const id = resolvedParams?.id;
  if (!id) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-red-500 text-xl">Error: Comic id is missing from params.</div>
        <pre>{JSON.stringify(resolvedParams, null, 2)}</pre>
      </main>
    );
  }
  const comic = await client.fetch(COMIC_QUERY, { id });
  if (!comic) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-zinc-50 px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{comic.name}</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {comic.pages?.length > 0 ? (
          comic.pages.map((page: any, idx: number) => (
            <div key={idx} className="rounded-lg border p-2 bg-zinc-50 dark:bg-zinc-900">
              <Image
                src={urlFor(page).width(600).url()}
                alt={`Page ${idx + 1}`}
                width={600}
                height={800}
                className="object-contain rounded"
              />
              <div className="text-center mt-2 text-sm text-zinc-500">Page {idx + 1}</div>
            </div>
          ))
        ) : (
          <div className="text-lg text-zinc-400">No pages found for this comic.</div>
        )}
      </div>
    </main>
  );
}
