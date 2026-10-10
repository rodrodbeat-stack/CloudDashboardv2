const OWNER = 'rodrodbeat-stack';
const REPO = 'CloudDashboard';
const $ = (id) => document.getElementById(id);
const statusMap = {
  success: { label: 'SUCCESS', className: 'success' },
  failure: { label: 'FAILED', className: 'failure' },
  cancelled: { label: 'CANCELLED', className: 'failure' },
  in_progress: { label: 'RUNNING', className: 'active' },
  queued: { label: 'QUEUED', className: 'active' },
  waiting: { label: 'WAITING', className: 'pending' },
  unknown: { label: 'UNKNOWN', className: 'pending' }
};
function setClock() { $('clock').textContent = new Date().toLocaleTimeString('es-CL', {hour12:false}); }
function stageStatus(stage, status, label) {
  const el = document.querySelector(`[data-stage="${stage}"]`);
  if (!el) return;
  const pill = el.querySelector('.pill');
  const s = statusMap[status] || statusMap.unknown;
  el.classList.remove('success','failure','active');
  pill.className = `pill ${s.className}`;
  pill.textContent = label || s.label;
  if (s.className === 'success') el.classList.add('success');
  if (s.className === 'failure') el.classList.add('failure');
  if (s.className === 'active') el.classList.add('active');
}
function resetStages() { ['dev','cert','qa','prod'].forEach(k => stageStatus(k,'waiting')); }
function inferStages(run) {
  resetStages();
  const status = run.status === 'completed' ? (run.conclusion || 'unknown') : (run.status || 'unknown');
  if (status === 'success') ['dev','cert','qa','prod'].forEach(k => stageStatus(k,'success'));
  else if (status === 'failure' || status === 'cancelled') {
    ['dev','cert','qa'].forEach(k => stageStatus(k,'success'));
    stageStatus('prod', status);
  } else {
    stageStatus('dev','success');
    stageStatus('cert','active','PIPELINE RUNNING');
  }
}
function prettyDate(date) { return new Date(date).toLocaleString('es-CL', {dateStyle:'short',timeStyle:'short'}); }
async function refreshStatus() {
  const button = $('refreshBtn'); button.disabled = true; button.textContent = '↻ Consulting...';
  $('apiMessage').textContent = 'Consultando GitHub Actions…';
  try {
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/actions/runs?per_page=8`, {headers:{Accept:'application/vnd.github+json'}});
    if (!response.ok) throw new Error(response.status === 403 ? 'GitHub API limit reached; intenta nuevamente en un minuto.' : `GitHub API respondió ${response.status}.`);
    const data = await response.json(); const runs = data.workflow_runs || [];
    if (!runs.length) { $('apiMessage').textContent = 'No hay ejecuciones disponibles. Sube el workflow y ejecuta un push a main.'; $('runsList').innerHTML = '<p class="empty">No se encontraron ejecuciones.</p>'; resetStages(); $('overallStatus').textContent = 'NO RUNS'; return; }
    const latest = runs[0]; const conclusion = latest.status === 'completed' ? (latest.conclusion || 'unknown') : latest.status;
    const state = statusMap[conclusion] || statusMap.unknown;
    $('overallStatus').textContent = state.label; $('overallStatus').style.color = conclusion === 'success' ? 'var(--green)' : conclusion === 'failure' ? 'var(--red)' : 'var(--yellow)';
    $('lastRun').textContent = `Actualizado ${prettyDate(new Date().toISOString())}`;
    $('runNumber').textContent = `#${latest.run_number}`; $('runConclusion').textContent = `${latest.event} · ${latest.status}`;
    $('deployState').textContent = conclusion === 'success' ? 'PUBLISHED' : conclusion === 'failure' ? 'FAILED' : 'RUNNING';
    $('branch').textContent = latest.head_branch || 'main'; $('workflowName').textContent = latest.name || 'SKYNET CI/CD';
    inferStages(latest);
    $('runsList').innerHTML = runs.map(run => {
      const c = run.status === 'completed' ? (run.conclusion || 'unknown') : run.status;
      const s = statusMap[c] || statusMap.unknown;
      return `<a class="run" href="${run.html_url}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit"><div><div class="run-title">${escapeHtml(run.name || 'GitHub Actions')} · #${run.run_number}</div><div class="run-meta">${escapeHtml(run.head_branch || '')} · ${prettyDate(run.created_at)}</div></div><span class="run-state ${s.className}">${s.label}</span></a>`;
    }).join('');
    $('apiMessage').textContent = `Mostrando ${runs.length} ejecuciones públicas del repositorio ${OWNER}/${REPO}.`;
  } catch (error) {
    $('apiMessage').textContent = `${error.message} La vista de estado queda sin actualizar.`;
  } finally { button.disabled = false; button.textContent = '↻ Refresh status'; }
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
$('refreshBtn').addEventListener('click', refreshStatus);
$('year').textContent = new Date().getFullYear(); setClock(); setInterval(setClock,1000);
refreshStatus(); setInterval(refreshStatus,60000);
