# CYBERUNDER // CloudDashboardv2

Dashboard cyberpunk responsive para GitHub Pages. Cada tarjeta de `SYSTEM MODULES — INFRASTRUCTURE OVERVIEW` abre un flujo operativo distinto:

- **Cloud Fabric**: inventario → clasificación → landing zone → guardrails → FinOps → cumplimiento.
- **Zero Trust Grid**: identidad → riesgo → inspección → política → contención → auditoría.
- **CI/CD Command**: Git → Build → QA → Cert/Security → Prod/Release (dashboard separado `cicd.html`).
- **Telemetry Nexus**: ingestión → normalización → correlación → detección → triage → reporte SLO.
- **Network Mesh**: topología → rutas → trazado → filtros → DNS → conectividad.
- **IaC Foundry**: source → calidad → plan → políticas → provisionamiento → drift.

## Publicar
1. Descomprime el ZIP.
2. Sube el contenido de la carpeta `CloudDashboardv2` a la raíz del repositorio GitHub Pages.
3. Mantén la estructura `assets/` y los archivos HTML en la raíz.
4. Abre `index.html` y entra en cada tarjeta para probar su flujo.

## Importante
Los flujos, logs y métricas son demostraciones visuales en el navegador; no ejecutan acciones reales en AWS, Azure, GCP, Terraform ni sistemas de seguridad.
