# seb-web

This website should have a white background and support light/dark mode.
Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4+, Sanity, and shadcn/ui.

## Features

- Welcome page with navigation (About, Comics)
- Comics page: overview of all series (cover, title, description)
- About page
- Light/Dark mode toggle

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4+
- Sanity (CMS)
- shadcn/ui (UI components)
- pnpm (package manager)
- Node Krypton

## Getting Started

1. **Install dependencies**  
   ```sh
   pnpm install
   ```

2. **Run development server**  
   ```sh
   pnpm run dev
   ```

3. **Sanity Studio**  
   ```sh
   pnpm sanity start
   ```

## Setup Steps

1. Create Next.js app with TypeScript and App Router (App Router is stable in v16):
   ```sh
   npx create-next-app@latest seb-web --ts --tailwind --app --src-dir --use-pnpm --eslint --ract-compiler 
   ```
   - The default structure uses the `/app` directory for routing and layouts.

2. Install dependencies:
   ```sh
   pnpm add react@19 next@16 tailwindcss@^4 postcss autoprefixer @sanity/client @sanity/image-url @sanity/types shadcn/ui
   pnpm dlx tailwindcss init -p
   ```

3. Initialize shadcn/ui:
   ```sh
   pnpm dlx shadcn-ui@latest init
   ```

4. Configure Tailwind for dark mode:
   - Set `darkMode: 'class'` in `tailwind.config.js`.

5. Set up Sanity:
   ```sh
   pnpm dlx sanity@latest init --project seb-web
   ```

6. Add basic pages in `/app`:
   - `/app/page.tsx` (Welcome, Server Component)
   - `/app/about/page.tsx` (About, Server Component)
   - `/app/comics/page.tsx` (Comics, Server Component)

7. Add navigation and theme toggle in `/app/layout.tsx`:
   - Use shadcn/ui for UI components.
   - Implement theme toggle as a Client Component (`'use client'`).

8. Use Server Components by default. Mark interactive components with `'use client'` at the top.

9. Use `next/image` for images and `next/link` for navigation.

## Example Data Structure

Series
---
image: example.webp
title: Crazy Sticmans
description: ...

Comic
---
title: What is TNT?
series: Crazy Sticmans
authors: ['Sebastian Salvesen']
illustrators: ['Sebastian Salvesen']


## License

MIT
