import {client} from "@/sanity/client";
import {SanityDocument} from "next-sanity";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "comic"
]|order(publishedAt desc){_id, name, description, cover, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function Comics() {
    const series = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-black text-black dark:text-zinc-50 px-8 py-16 w-full">
      <h1 className="text-4xl font-bold mb-4 w-full max-w-5xl">Comics</h1>
      <p className="max-w-xl text-lg text-center mb-10">
        Explore all comic series below. (Sanity integration coming soon)
      </p>
      {/* One item per row */}
      <div className="flex flex-col w-full max-w-5xl gap-6">
        {series.map(({ _id, name, description, cover }: any) => (
          <Link
            key={_id}
            href={`/comics/${_id}`}
            className="group flex flex-col sm:flex-row gap-4 rounded-lg border p-4 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {/* Cover image left */}
            {cover ? (
              <div className="w-[150px] h-[211px] sm:w-[180px] sm:h-[254px] flex-shrink-0 relative overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-800">
                <Image className={"w-[150px] h-[211px] sm:w-[180px] sm:h-[254px] flex-shrink-0 relative overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-800"}
                  src={urlFor(cover).url()}
                  alt={name}
                  fill
                />
              </div>
            ) : (
              <div className="w-[150px] h-[211px] sm:w-[180px] sm:h-[254px] flex-shrink-0 rounded-md flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-400">
                No cover
              </div>
            )}
            {/* Text content */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <h2 className="text-xl font-semibold mb-2 truncate">{name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
