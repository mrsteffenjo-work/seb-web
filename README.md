# seb-web

This website should have a white background and support light/dark mode.
Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4+, Sanity, and shadcn/ui.

## Features

- Welcome page with navigation (About, Comics)
- Comics page: overview of all series (cover, title, description)
- About page
- Light/Dark mode toggle

## Tech Stack

- Next.js 16
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
   pnpm dev
   ```

3. **Sanity Studio**  
   ```sh
   pnpm sanity start
   ```

## Setup Steps

1. Create Next.js app with TypeScript:
   ```sh
   pnpm create next-app . --ts
   ```

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

6. Add basic pages:
   - `/pages/index.tsx` (Welcome)
   - `/pages/about.tsx`
   - `/pages/comics.tsx`

7. Add navigation and theme toggle.

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
