import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NavItem {
  href: string
  label: string
}

export interface NavigationMenuProps {
  items: NavItem[]
  className?: string
}

export function NavigationMenu({ items, className }: NavigationMenuProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-zinc-700 dark:text-zinc-200 hover:text-yellow-500 transition text-sm font-medium"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavigationMenu

