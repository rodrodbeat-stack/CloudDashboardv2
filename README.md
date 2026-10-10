# SKYNET CloudDashboard — CI/CD

Dashboard estático estilo cyberpunk para visualizar ejecuciones públicas de GitHub Actions y las etapas DEV → CERT → QA → PROD.

## Incluye

- Diseño responsive con tema oscuro, cian, azul y acentos neón.
- Consulta pública a GitHub Actions API cada 60 segundos y botón de actualización manual.
- Historial de las últimas ocho ejecuciones.
- Workflow `.github/workflows/deploy.yml` para validar archivos, pasar por CERT y QA y publicar en GitHub Pages sin aprobaciones manuales.

## Instalar en `rodrodbeat-stack/CloudDashboard`

1. Descarga y descomprime este ZIP.
2. Copia el contenido de la carpeta dentro de la raíz del repositorio local existente. No reemplaces archivos propios que quieras conservar; revisa primero los cambios.
3. Confirma que la rama sea `main` y que `index.html` esté en la raíz.
4. En GitHub abre **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Sube los cambios:

```bash
git add index.html assets .github/workflows/deploy.yml README.md
git commit -m "feat: add SKYNET CI/CD dashboard and Pages workflow"
git push origin main
```

6. Abre la pestaña **Actions** del repositorio y revisa DEV, CERT, QA y PROD.

## Importante

- CERT y QA son etapas iniciales con checks de ejemplo; agrega pruebas reales antes de considerar el flujo apto para producción.
- El dashboard obtiene datos de la API pública de GitHub; no contiene tokens ni secretos. El historial puede fallar temporalmente por límites de la API.
- El despliegue solo ocurre en `push` a `main`, no en pull requests.
- GitHub Pages debe estar habilitado con fuente **GitHub Actions**.
- El workflow publica la carpeta raíz completa; evita subir archivos privados, secretos o artefactos innecesarios.
