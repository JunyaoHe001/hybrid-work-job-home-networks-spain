# Hybrid Work and Job–Home Networks in Spain

This repository contains the reproducible analysis notebooks for a study of
hybrid-work intensity and job–home network organization across Spanish
mobility districts.

## Notebooks

Run the notebooks in numerical order:

1. `00_MITMA_Recurrence_Layer_Network_Preparation_v2_0_public.ipynb`
   downloads and prepares the monthly mobility inputs and constructs the six
   workplace-recurrence network layers.
2. `01_Hybrid_Work_Job_Home_Networks_Formal_Analysis_v4_4_public.ipynb`
   performs the national network comparison, district analysis, partial
   correlations, and contextual interaction models.
3. `02_Hybrid_Work_Job_Home_Networks_Systematic_Mapping_v4_2_public.ipynb`
   produces the main and supplementary maps and collects analysis outputs.

All saved cell outputs and execution counts have been removed from the public
copies.

## Project root

The notebooks use one shared project root. Set it before starting Jupyter:

```bash
export HYBRID_WORK_PROJECT_ROOT="/path/to/hybrid-work-network-project"
```

In Windows PowerShell:

```powershell
$env:HYBRID_WORK_PROJECT_ROOT="C:\path\to\hybrid-work-network-project"
```

If the variable is not set, the current working directory is used. The
workflow creates intermediate and output directories under the project root.
The main relative structure is:

```text
hybrid-work-network-project/
├── 00_catalog/
├── 00_temp/
├── 01_intermediate/
├── 02_monthly_network_layers/
├── 03_reference/
├── 04_qc/
├── 05_analysis/
├── 07_collected_outputs/
└── basemaps/
```

Generated data and outputs are excluded by `.gitignore`.

## Environment

Python 3.11 is recommended. Install the Python dependencies with:

```bash
python -m pip install -r requirements.txt
```

The notebooks also contain optional `%pip` setup cells. Geospatial packages
may require platform-specific GDAL/PROJ libraries. A conda-forge environment
is often the simplest option when binary geospatial dependencies are not
already available. Exact figure typography also requires Times New Roman;
otherwise Matplotlib will substitute an available serif font.

## Data

The workflow uses open mobility products published by the Spanish Ministry of
Transport and Sustainable Mobility and the Global Human Settlement Layer.
The code records the source URLs and processing steps. Large source data,
intermediate files, base maps, and generated results are not included in this
repository.

Before running the formal analysis, place the required Spanish mobility
district boundary and centroid files in `basemaps/` and `03_reference/` as
documented in the notebook configuration cells.

## Reproducibility notes

- The manuscript analysis period is January 2022 through December 2024.
- Notebook 01 expects the Stage-0 output folder structure created by Notebook
  00.
- Notebook 02 expects the formal-analysis run tag produced by Notebook 01.
- Local absolute paths are not stored in the distributed notebook files.
- The full workflow requires substantial download time, disk space, and
  memory. Notebook 00 includes checkpoint and resume controls for interrupted
  runs.

## License and citation

A software license and formal citation metadata should be added before the
repository is made public.
