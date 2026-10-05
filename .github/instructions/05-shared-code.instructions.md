---
name: Shared Code
description: 'Use when changing the shared Axios client, hooks, utilities, constants, or context.'
applyTo:
  - src/api.ts
  - src/hooks/**
  - src/utils/**
  - src/constants/**
  - src/context/**
---

# Shared Code

- Use the configured Axios instance in `src/api.ts` for network requests. Do not add a parallel HTTP client or move requests to ad hoc `fetch` calls.
- Keep pure helper functions in `src/utils`, reusable values in `src/constants`, and follow existing hook/context conventions.
- Before adding a shared abstraction, check whether a nearby implementation already covers the use case; keep abstractions small and focused.
