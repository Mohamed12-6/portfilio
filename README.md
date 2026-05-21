# Mohamed Osama Hamedy — Personal Portfolio

> A modern, fully responsive personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — featuring bilingual support (Arabic / English), dark/light theme, and a clean component-based architecture.

---

## 🚀 Live Demo

> _Add your deployment URL here (Vercel / Netlify)_

---

## ✨ Features

- 🌐 **Bilingual** — Full Arabic (RTL) & English (LTR) support with one-click toggle
- 🌙 **Dark / Light Theme** — Smooth theme switching with CSS variables
- 📱 **Fully Responsive** — Mobile-first design across all screen sizes
- ⚡ **Next.js 14 App Router** — Fast, SEO-friendly, server/client components
- 🧩 **Component-Based** — Every section is an isolated, reusable component
- 🎯 **Smooth Navigation** — Scroll-spy navbar with active section detection
- 🖼️ **Optimized Images** — Next.js `Image` component with lazy loading
- 🎨 **CSS Variables Theming** — One source of truth for all design tokens

---

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, theme wrapper
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # CSS variables, base styles, animations
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu, lang & theme toggles
│   ├── Hero.tsx            # Hero section — name, subtitle, stats, profile image
│   ├── Skills.tsx          # Technical skills grouped by category
│   ├── Projects.tsx        # Project cards with tags, code & demo links
│   ├── Experience.tsx      # Work history & education timeline
│   ├── Contact.tsx         # Contact cards — email, phone, LinkedIn, GitHub
│   └── translations.ts     # All EN / AR strings in one place
│
└── public/
    └── 1762881911500.jpg   # Profile photo
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Variables |
| **State** | React `useState`, `useEffect` |
| **UI Libraries** | Shadcn UI, MUI, Headless UI |
| **Icons** | Inline SVG |
| **Deployment** | Vercel |

---

## 📦 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mohamed12-6/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Internationalization (i18n)

All text content lives in a single file:

```
components/translations.ts
```

To add or edit any text — English or Arabic — go to that file and update the relevant key. The entire UI re-renders instantly on language toggle.

```ts
// Example
heroTag: "Available for opportunities",   // EN
heroTag: "متاح للفرص الوظيفية",           // AR
```

---

## 🎨 Theming

All colors are defined as CSS variables in `globals.css`:

```css
/* Dark mode */
--bg: #0d0d0d;
--accent: #6c63ff;
--accent2: #a78bfa;
--accent3: #10b981;
--text: #f0f0f0;
--muted: #6b7280;
--card: #141414;
--border: #1f1f1f;

/* Light mode */
--bg: #f8f8f8;
--accent: #6c63ff;
--text: #111111;
...
```

---

## 📁 Components Overview

| Component | Description |
|---|---|
| `Navbar` | Sticky top bar with smooth scroll links, language & theme toggles, mobile hamburger menu |
| `Hero` | Full-width intro with profile photo, animated availability badge, CTA buttons, and stats |
| `Skills` | 4-column grid of skill categories with styled tags |
| `Projects` | Card grid with gradient hover effects, tech tags, GitHub & live demo links |
| `Experience` | Vertical list of work history and education with role, company, period, and status badge |
| `Contact` | 4-column card grid for email, phone, LinkedIn, and GitHub |

---

## 🚢 Deployment

This project is optimized for **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly from [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📬 Contact

**Mohamed Osama Hamedy**
- 📧 mohamedosama01005045063@gmail.com
- 📞 +20 1014546662
- 💼 [LinkedIn](www.linkedin.com/in/mohamed-osama-fullstack)
- 🐙 [GitHub](https://github.com/Mohamed12-6)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<<<<<<< HEAD
<p align="center">Designed & Built by <strong>Mohamed Osama Hamedy</strong> — 2026</p>
=======
<p align="center">Designed & Built by <strong>Mohamed Osama Hamedy</strong> — 2026</p>
>>>>>>> abc1a8c79743fa54067f3295f8e04014d67c7f79
