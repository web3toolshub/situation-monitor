# Situation Monitor Agent Guide

This repository contains the Situation Monitor application, built with **SvelteKit 2.0** (using Svelte 5 runes), **TypeScript**, **Tailwind CSS**, and **Vitest**.

## 1. Build & Test Commands

Use these commands to verify your changes. Always run lint and type checks before requesting review.

- **Start Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Type Check**: `npm run check` (Essential: run this after any TS changes)
- **Lint & Format Check**: `npm run lint`
- **Auto-format**: `npm run format` (Prettier)
- **Run Unit Tests**: `npm run test:unit`
- **Run Single Test**: `npx vitest src/lib/path/to/test.test.ts`
- **Run E2E Tests**: `npm run test:e2e`

## 2. Code Style & Conventions

### Formatting

- **Indentation**: Tabs (configure your editor to use tabs).
- **Quotes**: Single quotes `'`.
- **Trailing Comma**: None.
- **Print Width**: 100 characters.
- **Tools**: Rely on `npm run format` to enforce these rules.

### TypeScript

- **Strict Mode**: Enabled. No implicit `any`.
- **Types vs Interfaces**: Use `interface` for object shapes (models) and `type` for unions/aliases.
- **Naming**:
  - Interfaces/Types: `PascalCase` (e.g., `NewsItem`, `ServiceConfig`)
  - Variables/Functions: `camelCase` (e.g., `fetchData`, `isValid`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRIES`)
- **Explicit Returns**: Prefer explicit return types for public functions and API methods.

### Svelte 5 (Runes)

This project uses Svelte 5. **Do not use Svelte 4 syntax** (no `export let prop`, no `$: derived`).

- **Props**: Use `let { prop1, prop2 }: Props = $props();`
- **State**: Use `let count = $state(0);`
- **Derived**: Use `let double = $derived(count * 2);`
- **Effects**: Use `$effect(() => { ... });`
- **Snippets**: Use `{@render children()}` instead of `<slot />` where appropriate.

### File Structure & Naming

- **Components**: `PascalCase.svelte` (e.g., `MarketsPanel.svelte`) inside `src/lib/components/`.
- **Modules/Services**: `kebab-case.ts` (e.g., `circuit-breaker.ts`, `news-api.ts`).
- **Stores**: `kebab-case.ts` inside `src/lib/stores/`.
- **Path Aliases**: Use strictly:
  - `$lib` -> `src/lib`
  - `$components` -> `src/lib/components`
  - `$stores` -> `src/lib/stores`
  - `$services` -> `src/lib/services`
  - `$config` -> `src/lib/config`
  - `$types` -> `src/lib/types`

### State Management

- Use **Svelte Stores** (`writable`, `derived`) for global state.
- Create custom store factories (e.g., `function createNewsStore() { ... }`) and export a singleton instance.
- Keep business logic inside the store or service, not in UI components.

### Error Handling

- Use custom error classes from `$services/errors.ts` (e.g., `ServiceError`, `NetworkError`).
- Service methods should throw typed errors; UI components should catch and display them (or use store error states).
- Use the `Result` pattern or explicitly return `null` for "not found" rather than throwing if it's an expected condition.

### Testing

- **Unit Tests**: Co-located with source files (e.g., `foo.ts` -> `foo.test.ts`).
- **Mocking**: Use `vi.mock()` for external dependencies.
- **Testing Library**: Use `@testing-library/svelte` for component tests.

## 3. Architecture Highlights

- **Service Layer**: All data fetching goes through `ServiceClient` (`$services/client.ts`). Do not use `fetch` directly in components.
- **Resilience**: The service layer includes Caching (`CacheManager`), Circuit Breakers, and Request Deduplication automatically.
- **Analysis Engine**: Logic for correlation and narrative tracking resides in `src/lib/analysis/`.
- **Configuration**: Avoid hardcoding values. Use `src/lib/config/` for constants, regex patterns, and feed definitions.
