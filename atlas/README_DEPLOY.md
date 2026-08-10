# Spain hybrid-work job–home network atlas

This folder is a static website generated from the map-ready outputs of:

`02_Hybrid_Work_Job_Home_Networks_Systematic_Mapping_v4_2_20260724.ipynb`

Its entry point is `index.html`.

## Local preview

Do not rely on opening `index.html` directly with `file://`, because the browser loads separate JSON assets.

Start a local server:

```bash
python -m http.server 8000
```

Then open:

`http://127.0.0.1:8000/index.html`

The generating notebook also contains a final preview cell that starts the server automatically with the same Python executable as the Jupyter kernel.

## Deployment

Upload the complete folder, preserving:

- `data/`
- `vendor/`
- `build/`
- `index.html`

The package is suitable for GitHub Pages or any static host.

## Interpretation

The six recurrence bands are the workplace-attendance layers used in the source analysis. The browser shows one layer at a time. District attributes are complete exports from Notebook 02. Network curves are a display layer: the build retains the strongest 50,000 non-self candidates per recurrence band, and the browser shows the strongest subset under the current edge limit. Candidate and displayed flow-mass coverage are reported in the interface.

Leaflet 1.9.4 is vendored locally under `vendor/leaflet/`, so the public interface does not require a runtime JavaScript CDN.

Generated: 2026-08-10T22:33:59.796330+00:00
