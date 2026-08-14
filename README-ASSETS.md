# 🎨 Visual Assets & Design System Guide (2026 Edition)

This directory contains the bespoke visual design system for **Nitin Shah's** GitHub Profile.

---

## 📐 Design Philosophy

- **Editorial Precision**: Clean, minimalist dark palette inspired by Apple/Linear.
- **Intelligent Thread Metaphor**: A subtle orange stroke (`#FF6A1F`) representing the continuous loop of `BUILD → LEARN → EXPERIMENT → SHIP`.
- **Zero Generic Clutter**: No badge walls, no noisy rainbow gradients, no distracting gaming visuals.

---

## 🎨 Color Palette Tokens

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#0A0A0A` | Base surface for SVGs and dark-mode containers |
| **Elevated Surface** | `#141414` / `#181818` | Cards, panels, and project mockups |
| **Borders & Grids** | `#242424` | Structural lines, container outlines |
| **Primary Text** | `#F5F5F0` | Main titles, key headings, active labels |
| **Secondary Text** | `#A1A1A1` | Subtitles, body descriptions |
| **Muted Text** | `#666666` | Metadata tags, coordinates, timestamps |
| **Intelligent Accent** | `#FF6A1F` | Animated path, status indicators, active focus |

---

## 📁 Asset Directory Structure

```text
assets/
├── hero.svg                 # Signature animated hero with intelligent orange thread
├── 3d-core.svg              # Minimal isometric developer core (CODE / AI / SHIP)
├── workflow.svg             # "How I Build" engineering execution pipeline
├── roadmap.svg              # Career trajectory & active technical horizon
├── footer.svg               # Continuous loop footer stroke
│
└── projects/
    ├── project-01.svg       # AambaaLabs E-Commerce Infrastructure
    ├── project-02.svg       # AI Resume Intelligence Platform
    ├── project-03.svg       # Enterprise Cloud Workflow Hub
    └── project-04.svg       # RECKON 7.0 Hackathon Sprint Platform
```

---

## 🛠️ Verification & Auditing

Run the included verification scripts:

```bash
# Verify all asset files exist
node scripts/generate-assets.js

# Audit file size and performance budgets
node scripts/optimize-assets.js
```
