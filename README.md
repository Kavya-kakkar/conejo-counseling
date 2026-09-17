# Dr. Maya Reynolds, PsyD — Psychology Practice

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-brightgreen?style=flat-square)](https://turbo.build/pack)

A bespoke, editorial-grade web application crafted for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist specializing in anxiety, trauma (EMDR), burnout, and nervous system regulation for high-achieving professionals in Santa Monica and across California.

Built with modern performance, accessibility, and clean design principles in mind.

---

## 🌿 Highlights & Features

- **Editorial Aesthetic**: Warm, grounding color palette (cream, sage, terracotta) tailored specifically for calm, therapeutic user engagement.
- **Typography Hierarchy**: Sophisticated combination of Google Fonts (`Playfair Display` serif and `Inter` sans-serif).
- **Responsive Layout**: Pixel-perfect presentation across all screen sizes (mobile, tablet, desktop) with accessible navigation.
- **Section Showcase**:
  - **Hero**: Clean introduction with local telehealth/in-person availability callouts.
  - **Intro Block**: Relatable narrative for high-functioning adults and stress recovery.
  - **Who I Work With**: 3-pillar breakdown of target client profiles.
  - **Specialties & Focus**: Trauma/PTSD, EMDR Therapy, Anxiety & Panic, and Professional Burnout.
  - **Therapeutic Approach**: Overview of integrative somatic, CBT, and mindfulness modalities.
  - **Sanctuary Office**: Dedicated Santa Monica clinic showcase and facility amenities.
  - **Seamless CTAs**: Smooth anchor links for scheduling consultations.
- **Blazing Fast Performance**: Powered by Next.js 16 with Turbopack for near-instant builds and route generation.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16.3.5](https://nextjs.org) (App Router, Turbopack) |
| **Library** | [React 19.2.8](https://react.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + PostCSS |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **Icons & Motion** | [Lucide React](https://lucide.dev), [Framer Motion](https://www.framer.com/motion) |
| **Fonts** | Google Fonts (`next/font/google`: Playfair Display & Inter) |

---

## 📂 Project Structure

```text
conejo-counseling/
├── public/
│   └── images/               # High-resolution imagery & headshots
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css       # Tailwind v4 import & design system tokens
│   │   ├── layout.tsx        # Root layout, metadata & font variable loaders
│   │   └── page.tsx          # Main landing page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation with mobile hamburger drawer
│   │   ├── Hero.tsx          # Main hero banner & appointment CTA
│   │   ├── IntroBlock.tsx    # Practice mission & therapeutic philosophy
│   │   ├── WhoWeHelp.tsx     # 3-column target client overview
│   │   ├── Specialties.tsx   # Core clinical specialties
│   │   ├── Expertise.tsx     # Areas of focus grid
│   │   ├── HowWeWork.tsx     # Integrative care & methodology
│   │   ├── IntermediateBanner.jsx # Philosophy highlight banner
│   │   ├── OurOffice.jsx     # Physical office showcase & location features
│   │   ├── QuoteBanner.jsx   # Grounding quote section
│   │   ├── CTASection.tsx    # Appointment booking CTA
│   │   └── Footer.tsx        # Footer navigation, contact info & disclaimer
│   └── lib/
│       └── utils.ts
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration with @tailwindcss/postcss
├── tailwind.config.ts        # Extended Tailwind palette & font mappings
└── tsconfig.json             # TypeScript compiler settings
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.18 or v20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kavya-kakkar/conejo-counseling.git
   cd conejo-counseling
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm run start
```

To check TypeScript types without building:

```bash
npx tsc --noEmit
```

---

## 🌐 Deployment

The application is optimized for deployment on the [Vercel Platform](https://vercel.com):

1. Push your changes to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and builds the project with zero additional configuration.

---

## 📄 License

This project is proprietary and confidential. All rights reserved &copy; 2026 Dr. Maya Reynolds Psychology Practice.
