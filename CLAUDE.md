# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
SplitDine Landing - A Next.js landing page for a bill-splitting application. Built with Next.js 15.4.4 (Pages Router), TypeScript, and Tailwind CSS.

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture Overview
This is a Next.js application using the Pages Router pattern with the following structure:

- **Pages Router**: All routes are defined in `src/pages/`
- **API Routes**: Backend endpoints in `src/pages/api/`
- **Styling**: Tailwind CSS with custom purple theme colors (#7E4FFF primary)
- **TypeScript**: Configured with path alias `@/*` mapping to `src/*`

## Key Technical Details
- **React 19.1.0**: Using latest React with Next.js 15.4.4
- **Tailwind Config**: Custom colors and Inter font defined in `tailwind.config.js`
- **TypeScript**: Strict mode enabled, target ES2017
- **Path Aliases**: Use `@/` to import from `src/` directory

## Current Implementation
The landing page (`src/pages/index.tsx`) features:
- Hero section with app mockup
- Download buttons for app stores
- Responsive layout using Tailwind classes
- Purple accent color scheme

## Important Notes
- No testing framework currently configured
- Using default Next.js ESLint configuration
- PostCSS configured for Tailwind CSS processing
- Static assets (app store badges, mockup) in `public/` directory