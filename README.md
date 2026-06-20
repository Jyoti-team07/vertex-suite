# Vertex Suite — All-In-One WhatsApp Business SaaS Platform

<div align="center">
  <img src="public/Vertex-Suite-lOGO.png" alt="Vertex Suite Logo" width="120" />
  
  **India's Most Powerful WhatsApp Business API & Social Commerce Platform**
  
  Built by **Atmik Bharat Industries Pvt. Ltd.**, Bhilai, Chhattisgarh 🇮🇳

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)
  ![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Sections Overview](#sections-overview)
- [Deployment — Netlify](#deployment--netlify)
- [Environment Variables](#environment-variables)
- [Design System](#design-system)
- [Company Info](#company-info)

---

## Overview

Vertex Suite is a modern, production-ready React SPA (Single Page Application) marketing website for an All-In-One SaaS platform focused on:

- **WhatsApp Business API** — Broadcasts, chatbots, multi-agent inbox
- **Social Commerce** — Product catalog, cart, order tracking via WhatsApp
- **Marketplace Integration** — Amazon, Flipkart, Myntra from one dashboard
- **Shared Inbox** — All channels (WhatsApp, Instagram, Facebook, Telegram) unified
- **Ads Manager** — Facebook, Google, Instagram ads in one place
- **Shipment Pooling** — Cost-efficient logistics with 50+ courier partners
- **Vendor Management** — Centralized multi-seller platform

---

## Live Demo

> 🌐 **Local:** `http://localhost:3000`  
> 🌐 **Network:** `http://10.142.215.146:3000`  
> 🚀 **Production:** Deploy to Netlify (see [Deployment](#deployment--netlify))

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React JS | 19.x | UI framework with functional components & hooks |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 12.x | Animations, scroll effects, page transitions |
| Lucide React | Latest | Icon library |
| React CountUp | 6.x | Animated number counters |
| React Intersection Observer | 10.x | Scroll-triggered animations |
| React Router DOM | 7.x | Client-side routing |

---

## Features

### ✅ Implemented
- 🎨 **Modern glassmorphism UI** with dark/light sections
- 🌊 **Particle canvas animation** in Hero section
- 📱 **Fully mobile-responsive** (mobile-first design)
- 🔢 **Animated CountUp stats** triggered on scroll
- 🎠 **Auto-playing testimonials carousel** with keyboard navigation
- 🔑 **Login modal** with validation, show/hide password, success state
- 📋 **Solutions mega-dropdown** in navbar
- 🍔 **Hamburger mobile menu** with slide-down drawer
- 🛒 **WhatsApp commerce mockup** with live animated chat
- 📊 **Dashboard mockup** with animated charts
- 📬 **Shared inbox mockup** with tab switching on mobile
- ♾️ **Infinite logo marquee** strip (TrustedBy)
- 💬 **WhatsApp floating CTA** button (bottom-right)
- 🎯 **Scroll-aware navbar** (hides on scroll down, shows on scroll up)
- 🚀 **Netlify deployment** config with SPA redirects & caching headers

### 🎨 Design System
- Primary: `#25D366` (WhatsApp Green) + `#128C7E` (Dark Green)
- Accent: `#6C5CE7` (Purple) for CTAs
- Background dark: `#0F0F1A`, `#1A1A2E`
- Font: **Inter** (Google Fonts)
- Cards: Glassmorphism — `backdrop-blur`, semi-transparent bg, border with opacity

---

## Project Structure

```
vertex-suite/
├── public/
│   ├── Vertex-Suite-lOGO.png     # Official Vertex Suite logo
│   ├── _redirects                # Netlify SPA redirect rule
│   ├── index.html                # HTML entry point with Inter font
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky nav, mega dropdown, login modal trigger
│   │   ├── Hero.jsx              # Full-screen hero, particle canvas, dashboard mockup
│   │   ├── TrustedBy.jsx         # Infinite marquee logo strip
│   │   ├── Features.jsx          # 3×2 glassmorphism feature cards grid
│   │   ├── SocialCommerce.jsx    # Split layout + animated WhatsApp phone mockup
│   │   ├── MarketplaceIntegration.jsx # Dashboard table mockup + stat cards
│   │   ├── SharedInbox.jsx       # Multi-channel inbox with mobile tab switching
│   │   ├── AdsManager.jsx        # Analytics dashboard + SVG bar chart
│   │   ├── ShipmentPooling.jsx   # Benefit cards + animated CountUp stats
│   │   ├── VendorManagement.jsx  # Vendor dashboard mockup
│   │   ├── Stats.jsx             # 4 animated counter stats
│   │   ├── Testimonials.jsx      # Auto-play carousel with dots + avatar grid
│   │   ├── BlogSection.jsx       # 3-column blog cards with real images
│   │   ├── CTABanner.jsx         # Full-width green gradient CTA
│   │   ├── Footer.jsx            # 4-column footer with newsletter
│   │   ├── LoginModal.jsx        # Full-featured login popup + VertexLogoMark
│   │   └── WhatsAppFloat.jsx     # Floating WhatsApp button (bottom-right)
│   │
│   ├── data/
│   │   ├── features.js           # Feature cards, commerce features, shipment data
│   │   ├── testimonials.js       # 4 customer testimonials
│   │   └── blogs.js              # 3 blog posts with images
│   │
│   ├── App.jsx                   # Root component, section order
│   ├── index.js                  # React DOM entry point
│   └── index.css                 # Tailwind + custom CSS (glassmorphism, animations)
│
├── netlify.toml                  # Netlify build config, redirects, headers
├── tailwind.config.js            # Tailwind custom colors, fonts, animations
├── postcss.config.js             # PostCSS config for Tailwind
├── .env.production               # CI=false for Netlify builds
├── .gitignore
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Jyoti-team07/vertex-suite.git
cd vertex-suite

# 2. Checkout the development branch
git checkout vertex_suite_v1

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **`http://localhost:3000`** automatically.

---

## Available Scripts

```bash
# Start development server (hot reload)
npm start

# Create optimized production build
npm run build

# Build for Netlify (CI=false, ignores lint warnings)
npm run build:netlify

# Run tests
npm test
```

---

## Sections Overview

| # | Section | Component | Description |
|---|---|---|---|
| 1 | Hero | `Hero.jsx` | Full-screen with particle canvas, dashboard mockup, CTAs |
| 2 | Trusted By | `TrustedBy.jsx` | Infinite marquee of brand logos |
| 3 | Features | `Features.jsx` | 6 core platform feature cards |
| 4 | Social Commerce | `SocialCommerce.jsx` | WhatsApp phone mockup with live chat animation |
| 5 | Marketplace | `MarketplaceIntegration.jsx` | Order table dashboard + stat cards |
| 6 | Shared Inbox | `SharedInbox.jsx` | Multi-channel inbox (WhatsApp, Instagram, FB, Telegram) |
| 7 | Ads Manager | `AdsManager.jsx` | Analytics card + animated bar chart |
| 8 | Shipment | `ShipmentPooling.jsx` | 3 benefit cards + animated counter stats |
| 9 | Vendor | `VendorManagement.jsx` | Vendor list dashboard mockup |
| 10 | Stats | `Stats.jsx` | 4 animated CountUp metrics |
| 11 | Testimonials | `Testimonials.jsx` | Auto-play carousel, 4 customer quotes |
| 12 | Blog | `BlogSection.jsx` | 3 blog cards with real images |
| 13 | CTA Banner | `CTABanner.jsx` | Green gradient full-width CTA |
| 14 | Footer | `Footer.jsx` | 4-column footer + newsletter |

---

## Deployment — Netlify

### Option 1: Drag & Drop

1. Run `npm run build`
2. Drag the `build/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

### Option 2: Connect GitHub (Recommended)

1. Push to GitHub (already done on `vertex_suite_v1` branch)
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Choose **GitHub** → select `Jyoti-team07/vertex-suite`
4. Configure:
   - **Branch:** `vertex_suite_v1`
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy site**

The `netlify.toml` file handles:
- ✅ SPA routing (`/* → /index.html 200`)
- ✅ Security headers (XSS, frame options, content type)
- ✅ Asset caching (`/static/*` → 1 year)
- ✅ Node 18 environment
- ✅ `CI=false` to prevent lint warnings from failing builds

---

## Environment Variables

| Variable | Value | Purpose |
|---|---|---|
| `CI` | `false` | Prevents ESLint warnings from failing Netlify build |
| `GENERATE_SOURCEMAP` | `false` | Smaller build output, faster deploys |

Set in `.env.production` — already committed and ready.

---

## Design System

### Colors

```css
/* Primary */
--green-primary:   #25D366;   /* WhatsApp Green */
--green-dark:      #128C7E;   /* Dark Green */

/* Accent */
--purple:          #6C5CE7;   /* CTA Purple */

/* Backgrounds */
--dark-900:        #0F0F1A;   /* Near black */
--dark-800:        #1A1A2E;   /* Dark navy */

/* Text */
--text-light:      #FFFFFF;   /* On dark */
--text-dark:       #1A1A2E;   /* On light */
--text-muted:      #6B7280;   /* Muted gray */
```

### Typography

- **Font:** Inter (Google Fonts)
- **Headings:** `font-weight: 700`
- **Body:** `font-weight: 400 / 500`

### Component Patterns

```css
/* Glassmorphism card */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);

/* Green glow */
box-shadow: 0 0 30px rgba(37, 211, 102, 0.3);
```

---

## Company Info

**Atmik Bharat Industries Pvt. Ltd.**

| | |
|---|---|
| 🏢 **Address** | R/O 18/10 Radhika Nagar, Supela, Bhilai - 490023, Chhattisgarh, India |
| 📞 **Phone** | +91-7349064541 |
| 📧 **Email** | info@atmikbharat.com |
| 🌐 **Website** | [vertexsuite.in](https://vertexsuite.in) |
| 💼 **GitHub** | [github.com/Jyoti-team07/vertex-suite](https://github.com/Jyoti-team07/vertex-suite) |

---

## License

© 2024 Atmik Bharat Industries Pvt. Ltd. All rights reserved.

This codebase is proprietary. Unauthorized reproduction or distribution is prohibited.

---

<div align="center">
  Made with ❤️ in Bhilai, Chhattisgarh 🇮🇳
</div>
