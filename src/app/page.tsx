import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <h1 className="text-5xl font-bold mb-4 text-center sm:text-left">Welcome to seb-web</h1>
       <Image src={'/seb-web-logo.png'} alt={'Seb-web Logo'} width={640} height={640} className="mb-8"/>
       <p className="text-lg text-center sm:text-left mb-8">
         Your go-to platform for exploring and reading comics online. Dive into a world of captivating stories and stunning artwork.
       </p>
       <div className="flex space-x-4">
         <Link href="/comics" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
           Explore Comics
         </Link>
         <Link href="/series" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
           Browse Series
         </Link>
       </div>
      </main>
    </div>
  );
}
