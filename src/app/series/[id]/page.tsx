import { client } from '@/sanity/client';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface SeriesPageProps {
  params: Promise<{ id: string }>;
}

const COMICS_IN_SERIES_QUERY = `*[_type == "comic" && partOf._ref == $seriesId]{_id, name,cover, description}`;

export default async function Series({ params }: SeriesPageProps) {
    const resolvedParams = await params;
    const seriesId = resolvedParams.id;
  if (!seriesId) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-red-500 text-xl">Error: Series id is missing from params.</div>
        <pre>{JSON.stringify(resolvedParams, null, 2)}</pre>
      </main>
    );
  }
  const comics = await client.fetch(COMICS_IN_SERIES_QUERY, { seriesId });
  if (!comics || comics.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-zinc-400">No comics found for this series.</div>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-zinc-50 px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Comics in Series</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {comics.map(({ _id, name, description, cover }: any) => (
          <div key={_id} className="rounded-lg border p-4 bg-zinc-50 dark:bg-zinc-900">
            <Link href={`/comics/${_id}`}
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {cover ? (
                <Image
                  src={urlFor(cover).width(400).height(200).url()}
                  alt={name}
                  width={400}
                  height={200}
                  className="h-32 w-full object-cover bg-zinc-200 dark:bg-zinc-800 mb-2 rounded"
                />
              ) : (
                <div className="h-32 w-full bg-zinc-200 dark:bg-zinc-800 mb-2 rounded flex items-center justify-center text-zinc-400">
                  No cover
                </div>
              )}
              <span>{name}</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
