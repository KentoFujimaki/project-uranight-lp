# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev`
- **Build production**: `npm run build`
- **Start production**: `npm run start`
- **Linting**: `npm run lint`

Note: This project uses npm with --legacy-peer-deps flag due to dependency compatibility requirements.

## Architecture Overview

This is a **Next.js 15 landing page** for Uranight, a LINE mini-app for fortune telling using AI and traditional divination.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom Uranight brand colors
- **Animations**: Framer Motion for micro-interactions
- **Typography**: Julius Sans One (English), Noto Sans JP (Japanese)
- **Icons**: Lucide React + custom LINE icon component

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui component library
- `components/icons.tsx` - Custom icon components (includes LINE icon)
- `lib/utils.ts` - Utility functions (cn helper for className merging)
- `public/` - Static assets including Uranight app mockups

### Brand Colors (Tailwind Config)
- `uranight-dark-blue`: #1F224B (primary background)
- `uranight-purple`: #6B4F9B (accent color)
- `uranight-pink-beige`: #F7C8B0 (highlight color)
- `line-green`: #00C300 (LINE brand color for CTA buttons)

### Key Design Patterns
- Single-page landing with animated sections using Framer Motion
- Mobile-first responsive design
- Gradient backgrounds with animated star field effect
- shadcn/ui components for consistency
- Custom MotionSection wrapper for scroll-triggered animations

### Important Notes
- This is a **landing page only** - the actual Uranight app is a separate LINE mini-app
- Uses Japanese content with mystical/fortune-telling theme
- Build config ignores ESLint and TypeScript errors (configured for quick deployment)
- Images are unoptimized for static export compatibility