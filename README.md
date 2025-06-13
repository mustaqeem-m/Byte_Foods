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


## 🧭 Routing Types (CSR vs SSR)

### ⚡ Client-Side Routing (CSR)
- Navigation handled by JavaScript (no full page reload).
- Fast transitions, dynamic updates.
- SEO requires extra setup.
- Common in React (using `react-router-dom` + `<Outlet />`).

### 🌐 Server-Side Routing (SSR)
- Every route triggers full page reload.
- Slower but SEO-friendly by default.
```

### Restaurant Menu Part

1. Fetch 🐢 Swiggy API
2. Understand 🧠 data structure (cards → groupedCard → REGULAR → itemCards)
3. Safely extract 🍽️ all dishes using map + flat
4. Render 🖥️ each menu item with name + ₹price

## Restaurant Menu

1. implemented an accordion in React using controlled components, managing open/close state in the parent and passing toggle handlers as props to ensure only one section expands at a time

## 🧰 Redux Toolkit

- Install `@reduxjs/toolkit` and `react-redux`
- Build our store
- Connect our store to our app
- Slice (`cartSlice`)
- dispatch(action)
- selector

# flow

- You click "ADD" button →
- handleAddItem runs →
- dispatch(addItem("Half-grill")) →
- Redux sees type "cart/addItem" →
- Runs addItem reducer →
- "Half-grill" gets added to the cart

# Types of Testing (Dev)

- Unit testing
- Integrating testing
- End to End testing

# Setting up testing in our app

- Install react testing library
- Installed jest
- Installed Babel dependencies
- Configure Babel - babel.donfig.js
- Configure parcel config file to disable default babel transpilation
- Config jest | npx create-jest
- install jsdom-library
- Install @babel/preset-react - to support jsx work in test cases
- install @babel/preset-react inside our babel config
- Install @testing-library/jest-dom

# Essential React testing stack

npm i -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
