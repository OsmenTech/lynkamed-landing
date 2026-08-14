# AGENTS.md — LynkaMed Landing

## Producto

Marketing site lynkamed.mx (React + Vite + Tailwind). SEO y conversión importan.

Dominio del producto (clínicas, consultorios, pasaporte, apps): ver `lynkamed-api/docs/PRODUCTO.md` en el monorepo local.

## Principios

- Una composición clara en el hero; marca primero; sin cards innecesarias en hero.
- No inventar links a redes que no existan (p. ej. LinkedIn company si no está creado).
- Lint debe pasar (`npm run lint`) antes de merge.
- No versionar `public/lynkamed.mp4`.
- Deploy = push a `main`.

## Git

- `feature/*` → `develop` → `main`. Ver CONTRIBUTING.md.
