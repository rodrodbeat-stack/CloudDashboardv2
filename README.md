# CYBERUNDER — CloudDashboardv2

Centro de mando de infraestructura con estética cyberpunk. Todos los módulos de **SYSTEM MODULES / INFRASTRUCTURE OVERVIEW** son interactivos y abren un dashboard operativo con flujo visual, telemetría y diagnóstico simulado.

## Módulos
- **Cloud Fabric:** landing zones, gobernanza multicloud, inventario y FinOps.
- **Zero Trust Grid:** IAM/RBAC, WAF, políticas y postura de seguridad.
- **CI/CD Command:** Git → Build → QA → Cert/Security → Prod/Release.
- **Telemetry Nexus:** métricas, logs, trazas y gestión de incidentes.
- **Network Mesh:** VPC/VNet, rutas, VPN, peering, DNS y perímetro.
- **IaC Foundry:** Terraform, plan/validate/apply y detección de drift.

## Publicar en GitHub Pages
1. Descomprime el ZIP.
2. Copia el contenido de `CloudDashboardv2/` a la raíz del repositorio.
3. Haz commit y push a la rama publicada por GitHub Pages.
4. Abre la web; en **INFRASTRUCTURE OVERVIEW**, pincha cualquier tarjeta para abrir su dashboard.

## Importante
Los módulos y los flujos son demos visuales de front-end. No están conectados a recursos AWS/Azure/GCP ni ejecutan cambios reales. El pipeline CI/CD requiere integración posterior con GitHub Actions y los entornos correspondientes. No hay aprobaciones manuales dentro del flujo simulado.
