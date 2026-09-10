[![Maintainability](https://qlty.sh/gh/TAndrei17/projects/tandreipro-page/maintainability.svg)](https://qlty.sh/gh/TAndrei17/projects/tandreipro-page)

# Personal Website – Frontend Developer – Andrei Trunkin

Personal website and resume of frontend developer Andrei Trunkin. Built with React, TypeScript, Vite, Redux Toolkit, and i18next. It includes public portfolio pages, a contact form, and an authenticated dashboard for managing questions and tags.  
🌐 [tandrei.pro](https://tandrei.pro)

## Requirements

- Node.js 20 or later
- Corepack enabled: `corepack enable`
- Yarn 4.12.0, managed by the project

## Installation

```bash
yarn install
```

## Scripts

| Command         | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `yarn dev`      | Start the Vite development server.                            |
| `yarn build`    | Type-check the project and create a production build.         |
| `yarn preview`  | Preview the production build locally. Run `yarn build` first. |
| `yarn lint`     | Check the codebase with ESLint.                               |
| `yarn lint:fix` | Fix ESLint issues that can be corrected automatically.        |

## Dependency Management

```bash
# Review available dependency updates interactively
yarn up -i

# Update all dependencies within the version ranges in package.json
yarn up

# Update dependencies to their latest available versions and update package.json
yarn up -R

# Check published package advisories
yarn npm audit
```

After updating dependencies, run the checks before committing:

```bash
yarn lint
yarn build
```
