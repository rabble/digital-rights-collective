# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Code Style Guidelines
- **TypeScript**: Use TypeScript for all new components and files
- **Formatting**: Follow existing indentation (2 spaces) and line breaks
- **Imports**: Group imports by external libraries first, then internal components
- **Components**: Use functional components with named exports
- **Naming**: PascalCase for components, camelCase for functions/variables
- **File Structure**: Place new components in appropriate subdirectories under `/src/components`
- **UI Components**: Leverage the shadcn UI components in `/src/components/ui`
- **CSS**: Use Tailwind utility classes for styling
- **Error Handling**: Use try/catch blocks for async operations
- **Types**: Prefer explicit typing over `any` when possible