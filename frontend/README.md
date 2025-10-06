# Algorave Share Frontend

Frontend application for Algorave Share, built with Next.js 15, TypeScript, and Effect.

## Features

- ✨ Built with [Next.js 15](https://nextjs.org) and App Router
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com/)
- 📦 TypeScript for type safety
- 🔧 Effect for composable, type-safe API calls
- 🎵 Designed for sharing Strudel and TidalCycles creations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── share/
│   │   └── page.tsx       # Share code page
│   └── browse/
│       └── page.tsx       # Browse shares page
├── lib/
│   └── services/
│       └── api.ts         # Effect-based API service
├── public/                # Static assets
└── package.json
```

## Pages

### Home (`/`)
Landing page with project overview and navigation to other pages.

### Share (`/share`)
Form for sharing Strudel or TidalCycles code with optional audio upload.

### Browse (`/browse`)
Gallery view of shared creations from the community.

## Effect Services

The frontend uses Effect for type-safe API communication:

```typescript
import { Effect } from "effect";
import { ApiService, provideApiService } from "@/lib/services/api";

// Example usage
const getSharesEffect = Effect.gen(function* () {
  const service = yield* ApiService;
  const shares = yield* service.getShares();
  return shares;
});

// Run with live service
const shares = await Effect.runPromise(
  provideApiService(getSharesEffect)
);
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Tailwind Configuration

Tailwind is configured in `tailwind.config.ts` with the following features:
- Gradient backgrounds
- Custom color palette for algorave theme
- Responsive utilities

## Development

### Code Style

- Use TypeScript for all components
- Use React Server Components by default
- Mark client components with `"use client"`
- Use Effect for API calls and side effects
- Follow Tailwind utility-first approach

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Use the App Router conventions

Example:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

## Styling

This project uses Tailwind CSS with a custom theme optimized for the algorave aesthetic:

- Dark backgrounds with vibrant gradients
- Purple and pink accent colors
- Glassmorphism effects with backdrop blur
- Responsive design

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js application and can be deployed to:
- AWS Amplify
- Netlify
- Docker
- Traditional Node.js hosting

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Effect Documentation](https://effect.website/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

