# CYBERUNDER — CloudDashboardv2

Dashboard de infraestructura con estética cyberpunk y una vista visual de pipeline CI/CD.

## Archivos

- `index.html`: portada de infraestructura; el acceso **DEV / CI/CD Command** abre `cicd.html`.
- `cicd.html`: pipeline visual Git/Source → Build → QA/Test → Cert/Security → Prod/Release.
- `assets/styles.css`: tema, responsive layout, efectos y animaciones.
- `assets/app.js`: reloj y navegación móvil.
- `assets/pipeline.js`: simulación de ejecución, flujo, logs, artefacto y métricas.

## Publicar en GitHub Pages

1. Descarga y descomprime el ZIP.
2. Copia el contenido de la carpeta `CloudDashboardv2` a la raíz de tu repositorio GitHub `CloudDashboardv2`.
3. Haz commit y push a la rama publicada por GitHub Pages (normalmente `main`).
4. En GitHub, abre **Settings → Pages** y confirma que la publicación apunta a la rama y carpeta correctas.
5. Abre la página publicada y selecciona **DEV** o **ABRIR CI/CD DASHBOARD**.

## Importante

El pipeline incluido es una **demo visual local**. Anima las etapas y genera logs simulados en el navegador; no ejecuta compilaciones reales ni despliega a producción. Para CI/CD real, conecta el repositorio con GitHub Actions y configura los jobs, secretos, entornos y destinos de despliegue correspondientes. El diseño no incluye aprobaciones manuales en el flujo simulado.
