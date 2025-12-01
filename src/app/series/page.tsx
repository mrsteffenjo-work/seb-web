import {client} from "@/sanity/client";
import {SanityDocument} from "next-sanity";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "serie"
]|order(publishedAt desc){_id, name, description, cover, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function Comics() {
    const series = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-zinc-50 px-8 py-16">
            <h1 className="text-4xl font-bold mb-4">Comics</h1>
            <p className="max-w-xl text-lg text-center mb-8">
                Explore all comic series below. (Sanity integration coming soon)
            </p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {series.map(({ _id, name, description, cover }: any) => (
                    <div key={_id} className="rounded-lg border p-4 bg-zinc-50 dark:bg-zinc-900">
                        <Link href={`/series/${_id}`}>
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
                        </Link>
                        <h2 className="text-xl font-semibold mt-2">{name}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
