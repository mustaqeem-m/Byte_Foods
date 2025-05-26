# React ⚛️

# parcel 🚀

-Build Dev tools
-Local Server
-HMR- Hot module Replacement
-File watching Algorithm
-Caching - faster Builds
-Image optimization
-Minification
-Bundling
-Compressing
-Consistent Hashing
-code Splitting
-Diognostics -> Give error clean manner
-Error Handling
-HTTPs
-Tree Shaking - remove Unused code

## 🧱 Component Architecture

This project is structured around a modular React architecture with a clean UI separation and component-driven design.

### 📍 Layout Overview

App
├── Header
│ ├── Logo
│ ├── Navigation Links (Home, About, Cart)
├── Body
│ ├── Search Bar
│ ├── Restaurant Container
│ │ └── Restaurant Card (dynamic, reusable)
├── Footer
│ ├── Copyright
│ ├── Quick Links
│ ├── Social Media Follow Icons
│ └── Contact Info

---

### 🔧 Key Notes

- 🔁 **Reusable Components**: Cards and Containers built with props to support scalability
- 🎯 **Semantic HTML + JSX**: Clean markup ensures accessibility and SEO readiness
- 🧠 **BEM Naming Convention** (recommended): For better styling control in large codebases

```bash
📦 Import/Export Strategy
──────────────────────────────

✅  Default Exports      → Used for components
                         → Only ONE default export per file

🔁  Named Exports        → Used for utilities, hooks, constants
                         → Ideal for exporting MULTIPLE values

✨  Result               → Cleaner imports, modular codebase, scalable structure
```
