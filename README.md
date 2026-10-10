# SKYNET CloudDashboardv2 — CI/CD telemetry

Dashboard estático con estilo cyberpunk, stream animado y panel de eventos. Consulta ejecuciones públicas de GitHub Actions del repositorio `rodrodbeat-stack/CloudDashboardv2`.

## Pipeline
DEV build/validación → smoke tests → DEVSECOPS (patrones comunes de secretos) → CERT → QA → PROD GitHub Pages. Sin aprobaciones manuales; los jobs dependientes se detienen si falla uno previo.

## Datos
El estado e historial de ejecuciones provienen de la API pública de GitHub. La animación, eventos/min, throughput, latencia y workers son simulación visual, no métricas reales de infraestructura. CERT/QA y el gate de seguridad son checks iniciales, no sustituyen pruebas E2E ni escaneo profesional.

## Publicar
1. Copia estos archivos a la raíz de `CloudDashboardv2`.
2. En GitHub, ve a Settings → Pages y elige GitHub Actions.
3. Haz push a `main` y revisa Actions.

Sitio: https://rodrodbeat-stack.github.io/CloudDashboardv2/
Repositorio: https://github.com/rodrodbeat-stack/CloudDashboardv2
