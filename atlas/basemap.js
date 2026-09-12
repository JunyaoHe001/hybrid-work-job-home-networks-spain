/* Basemap display only; research layers and data are unchanged. */
window.installAtlasBasemap = function (map) {
  'use strict';
  const key = 'atlas-basemap-visible:' + location.pathname;
  let visible = true;
  try { visible = localStorage.getItem(key) !== 'false'; } catch (_) {}
  const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    maxNativeZoom: 19, maxZoom: 19, opacity: 0.7,
    updateWhenIdle: true, keepBuffer: 1
  });
  const section = document.createElement('section');
  section.className = 'control-section';
  section.setAttribute('aria-label', 'Basemap display');
  const label = document.createElement('label');
  label.style.cssText = 'display:flex;align-items:center;gap:9px;cursor:pointer;margin:0';
  const input = document.createElement('input');
  input.id = 'atlas-basemap-toggle'; input.type = 'checkbox';
  input.setAttribute('role', 'switch'); input.checked = visible;
  const text = document.createElement('span'); text.textContent = 'Show basemap';
  label.append(input, text);
  const note = document.createElement('p');
  note.style.cssText = 'font-size:11px;color:#667085;line-height:1.5;margin:6px 0 0';
  note.textContent = 'OpenStreetMap. Research layers stay visible when the basemap is hidden.';
  section.append(label, note);
  const host = document.querySelector('.sidebar-inner');
  const header = host.querySelector(':scope > header');
  if (header) header.after(section); else host.prepend(section);
  const apply = () => {
    if (input.checked && !map.hasLayer(layer)) layer.addTo(map);
    if (!input.checked && map.hasLayer(layer)) map.removeLayer(layer);
  };
  input.addEventListener('change', () => {
    try { localStorage.setItem(key, String(input.checked)); } catch (_) {}
    apply();
  });
  let warning = null;
  layer.on('tileerror', () => {
    if (warning || !input.checked) return;
    warning = document.createElement('p'); warning.setAttribute('role','status');
    warning.style.cssText = 'font-size:11px;line-height:1.5;color:#8a4b10';
    warning.textContent = 'Some background tiles could not load. Research layers remain available.';
    section.appendChild(warning);
  });
  layer.on('tileload', () => { if (warning) { warning.remove(); warning = null; } });
  apply();
  window.__ATLAS_BASEMAP__ = {map, layer, input};
  return layer;
};
