# 🎨 Asset Management & Configuration Guide

This guide explains how to customize and maintain the 2026 Developer Experience System.

---

## 🛠️ Central Configuration (`config/profile.json`)

All key personal data, project highlights, skill levels, and learning roadmaps are managed from a single source of truth:

```json
{
  "identity": {
    "name": "Nitin Shah",
    "title": "AI / FULL-STACK DEVELOPER",
    "positioning": "Building intelligent products, modern web systems, and AI-powered experiences."
  },
  "currentFocus": [ ... ],
  "technicalLayers": { ... },
  "projects": [ ... ]
}
```

---

## 📁 Asset Directory (`assets/`)

| Asset File | Purpose & Motion Specs |
| :--- | :--- |
| `github-hero.svg` | Master 3:1 Hero Banner with the Intelligent Orange Thread and 3D industrial metallic nodes |
| `status-bar.svg` | Real-time developer status with pulsing telemetry beacon and animated border scan |
| `focus.svg` | Horizontal 5-module system highlighting current engineering priorities |
| `skill-progress.svg` | Horizontal self-drawing lines mapping non-linear engineering maturity |
| `engineering-system.svg` | Architectural software dependency constellation connecting core stack |
| `2026-path.svg` | 2026 Engineering Horizon with traveling pulse stream |
| `build-process.svg` | 8-Stage Stage-Gate Engineering Lifecycle Pipeline |
| `contributions.svg` | Dark neutral GitHub contribution calendar with traveling orange signal |
| `3d-contribution.svg` | Isometric 3D block topography in charcoal & orange |
| `timeline.svg` | 2026 Development Log & quarterly milestones |
| `footer-thread.svg` | Closing narrative arrow pointing to final contact links |
| `projects/project-01.svg` | AambaaLabs E-Commerce Infrastructure (Live sparkline telemetry) |
| `projects/project-02.svg` | AI Resume Intelligence Platform (Scanning laser beam & ATS vector score) |
| `projects/project-03.svg` | Enterprise Cloud Workflow Hub (Relational schema & RBAC dispatcher) |
| `projects/project-04.svg` | RECKON 7.0 Hackathon Sprint Engine (Websocket synchronization hub) |

---

## ⚙️ Running Automated Maintenance

- **Validate All Assets:**
  ```bash
  node scripts/generate-assets.js
  ```
- **Audit File Sizes & Payload Budget:**
  ```bash
  node scripts/optimize-assets.js
  ```

---

## 🤖 GitHub Actions Workflow (`.github/workflows/update-profile.yml`)

The automated cron pipeline runs on schedule to refresh repository statistics and keep telemetry synced without manual intervention.
