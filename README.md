# LynkaMed Landing

Sitio de marketing de [LynkaMed](https://lynkamed.mx) — React + Vite + Tailwind.

## Stack

- React 19 + React Router
- Vite 8 + Tailwind CSS 4
- Deploy: GitHub Actions → Hostinger (SCP)

## Desarrollo

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run build
npm run preview
```

## CI/CD

| Workflow | Cuándo | Qué hace |
|----------|--------|----------|
| **CI** | push/PR a `main` | `npm ci` → lint → build |
| **Deploy Landing** | push a `main` o manual | lint + build + SCP de `dist/` |

### Secrets (repo → Settings → Actions)

| Secret | Ejemplo |
|--------|---------|
| `SSH_HOST` | IP o hostname Hostinger |
| `SSH_USER` | `u758088648` |
| `SSH_PRIVATE_KEY` | clave privada PEM |
| `SSH_PORT` | `22` (opcional) |
| `DEPLOY_PATH` | `/home/u…/domains/lynkamed.mx/public_html` |

### Video demo

`public/lynkamed.mp4` supera el límite de GitHub (~149 MB). No se versiona.

1. Súbelo **una vez** al `DEPLOY_PATH` del servidor como `lynkamed.mp4`
2. El deploy usa `rm: false`, así que no se elimina en deploys siguientes

## Estructura

```
src/          páginas y componentes de la landing
public/       assets estáticos (logo, imágenes, favicon)
sales/        material comercial (onepagers, flyers) — no va al build web
.github/      CI + deploy
```

## Org

`OsmenTech/lynkamed-landing`
