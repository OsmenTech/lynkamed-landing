# LynkaMed Landing

Sitio de marketing — [lynkamed.mx](https://lynkamed.mx).

**Org:** [OsmenTech/lynkamed-landing](https://github.com/OsmenTech/lynkamed-landing)

## Stack

React 19 + Vite 8 + Tailwind 4 · Deploy: Actions → SCP Hostinger (`public_html`)

## Ramas

| Rama | Uso |
|------|-----|
| `main` | Producción + deploy |
| `develop` | Integración |
| `feature/*` | PRs hacia `develop` |

Ver [CONTRIBUTING.md](CONTRIBUTING.md).

## Setup

```bash
npm ci
npm run dev
npm run lint && npm run build
```

## CI/CD

- **CI** — lint + build  
- **Deploy Landing** — push a `main` → SCP  

Secrets: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_PORT` (`65002`), `DEPLOY_PATH` (`.../lynkamed.mx/public_html`).

`public/lynkamed.mp4` no va en git (>100 MB); déjalo una vez en el server (`rm: false` en deploy).

## Agentes

[AGENTS.md](AGENTS.md) · `.cursor/rules/` · `.github/copilot-instructions.md`
