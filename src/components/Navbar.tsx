"use client"
import * as React from "react"
import Link from "next/link"
import {NavigationMenu} from "@/components/ui/navigation-menu"
import Image from "next/image";
import {Switch} from "./ui/switch";

export function Navbar() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        try {
            const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
            const prefersDark = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
            const initialDark = stored ? stored === 'dark' : prefersDark;
            setIsDark(initialDark);
            document.documentElement.classList[initialDark ? 'add' : 'remove']('dark');
        } catch {
        }
    }, []);

    return (
        <div className="w-full  bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex px-8 items-center justify-between gap-3 flex-nowrap">
                <Link href="/" className="flex items-center gap-3 min-w-0">
                    <Image src="/seb-web-logo-transparent.png" alt="SebWeb Logo" width={96} height={96}
                           className="rounded-sm flex-shrink-0"/>
                </Link>
                <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                    <NavigationMenu
                        items={[
                            {href: "/series", label: "Series"},
                            {href: "/comics", label: "Comics"},
                            {href: "/about", label: "About"},
                        ]}
                        className="flex"
                    />
                </div>
                <div className="flex items-center gap-2 px-8">
                    <Switch
                        checked={isDark}
                        onCheckedChange={(next: boolean) => {
                            setIsDark(next);
                            document.documentElement.classList[next ? 'add' : 'remove']('dark');
                            try {
                                localStorage.setItem('theme', next ? 'dark' : 'light');
                            } catch {
                            }
                        }}
                        size={'lg'}
                        className="bg-zinc-300 dark:bg-zinc-700"
                    />

                    <div className="text-sm text-zinc-600 dark:text-zinc-400 min-w-12 text-center">
                         {isDark ? 'Dark' : 'Light'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
