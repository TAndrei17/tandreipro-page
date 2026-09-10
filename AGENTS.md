# Agent Instructions

## Scope

These instructions apply only to the `page-atrunkin` repository.

## Project Stack and Package Management

- This is a React + TypeScript + Vite project using Redux Toolkit, React Router, i18next, Formik, and Axios.
- Use Yarn only. The project uses Yarn 4.12.0.
- Do not run `npm install` or commit `package-lock.json`.
- Add or remove dependencies with `yarn add`, `yarn add -D`, or `yarn remove`.
- Before committing, run the relevant checks from `package.json`, usually `yarn lint` and `yarn build`.

## Git

- Run `git commit` and `git push` only with explicit user permission.
- Do not revert existing user changes.
- Group files for the same task in one commit and separate unrelated changes.
- Use `<type>: <imperative description>` for commit messages.
- Allowed commit types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, and `revert`.
- Do not create branches or commit changes unless explicitly requested.

## Security and Environment

- Never hardcode API keys, secrets, or connection strings.
- Store local secrets in `.env` and keep `.env` out of version control.
- Add every new environment variable to `.env.example` with a short English comment describing its purpose.
- Access environment variables through a small configuration module when the value is used in more than one place.

## TypeScript and Code Style

- Use `const` and `let`; do not use `var`.
- Use English camelCase names for variables and functions.
- Use PascalCase for React components, and keep the filename aligned with the component name.
- Prefer names that describe the purpose precisely; avoid ambiguous abbreviations and generic names.
- Prefer arrow functions unless a regular function is required by the API or language feature.
- Avoid introducing `any`; prefer precise types and existing project types.
- Keep comments short, in English, and limited to non-obvious code. Do not add comments that merely narrate the code.
- Preserve the existing formatting and import style. Use the Prettier and ESLint configuration already present in the repository.

## React and Components

- Before creating a component, hook, utility, or Redux module, search the existing `src` tree for a reusable implementation.
- Keep component-specific styles in the established CSS files. Do not introduce CSS-in-JS or Tailwind without an explicit request.
- Preserve the existing responsive behavior when changing UI code.
- Every form input must have an associated visible label or an appropriate `aria-label`.
- Every meaningful image must have descriptive `alt` text; decorative images must use `alt=""`.

## Localization

- Store all user-facing text in the existing i18next resources under `src/localization`.
- Keep language resources in the existing files and structure; do not create a parallel `src/i18n` directory.
- Do not hardcode headings, labels, buttons, navigation items, validation messages, or other text rendered to users in JSX.
- Use `useTranslation()` and the existing resource namespaces and key-prefix patterns.
- When adding a language, keep the resource structure consistent with the existing files in `src/localization` and register it through the existing localization setup.

## Shared Code

- Keep pure utilities in `src/utils` and reusable constants in `src/constants`.
- Match the conventions of neighboring components, hooks, store modules, and services before introducing new abstractions.
- Do not introduce a new state-management library or a parallel API client without discussing it first.

## Documentation

- Keep `README.md` accurate when setup, scripts, or project behavior changes.
- Write repository documentation in English unless a specific request requires another language.

## Deployment

- The production build is generated with `yarn build` into `dist`.
- Preserve the existing SPA fallback configuration in `public/_redirects` when changing client-side routing.
