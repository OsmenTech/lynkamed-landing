# Contributing — LynkaMed (OsmenTech)

## Ramas

```
feature/corto-descriptivo  →  develop  →  main
```

1. Desde `develop`:
   ```bash
   git fetch origin && git checkout develop && git pull
   git checkout -b feature/mi-cambio
   ```
2. PR → `develop`, luego release `develop` → `main` (deploy landing).

### Reglas

- No `.env` ni secretos SSH en el repo.
- No commits de markdown suelto fuera de `README` / `AGENTS` / `CONTRIBUTING` / `docs/`.
- Video demo (`lynkamed.mp4`) no se versiona.
