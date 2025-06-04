# Tohatsu Saudi Arabia Website

A modern, responsive website for Tohatsu marine engines in Saudi Arabia, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Pages
- **Homepage** - Hero slider, product categories, value propositions
- **About** - Company history, timeline, statistics, innovations
- **Products** - Main products page with categories
- **Product Categories**:
  - Portable Engines (2.5-20 HP)
  - Mid-range Engines (25-90 HP)
  - High-power Engines (100-140 HP)
- **Contact** - Contact form, departments, FAQ section
- **Dealer Locator** - Jeddah showroom information
- **Quote Request** - Comprehensive quote form
- **FAQ** - Searchable FAQ with categories

### Technical Features
- ✅ **RTL Support** - Full Arabic language support
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern Animations** - Framer Motion animations
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Performance** - Optimized images and code splitting
- ✅ **Accessibility** - WCAG compliant
- ✅ **WhatsApp Integration** - Floating WhatsApp button

### Design System
- **Colors**: Navy (#181b39) and Gold (#c2b280)
- **Typography**: Arabic-optimized fonts
- **Components**: Reusable header, footer, and UI components
- **Animations**: Consistent particle effects and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/clicksalesmedia/tohatsusaudiarabia.git
cd tohatsusaudiarabia
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

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

## 📁 Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── WhatsAppButton.tsx
├── utils/              # Utility functions
│   └── particlePositions.ts
├── about/              # About page
├── contact/            # Contact page
├── dealer-locator/     # Dealer locator
├── faq/               # FAQ page
├── products/          # Products section
│   ├── page.tsx       # Main products page
│   ├── portable-engines/
│   ├── mid-range-engines/
│   └── high-power-engines/
├── quote/             # Quote request
├── layout.tsx         # Root layout
├── page.tsx          # Homepage
└── globals.css       # Global styles

public/
├── hero/             # Hero images
├── products/         # Product images
└── logo files
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` and throughout the components:
- Primary: `#181b39` (Navy)
- Secondary: `#c2b280` (Gold)

### Content
- Update text content in each page component
- Replace images in the `public/` directory
- Modify contact information in components

### Animations
Particle animations are centralized in `utils/particlePositions.ts` for consistency.

## 📱 Pages Overview

1. **Homepage** - Hero slider with 5 slides, product categories, value propositions
2. **About** - Company timeline, statistics, innovation showcase
3. **Products** - Overview of all engine categories
4. **Portable Engines** - 2.5-20 HP engines with detailed specs
5. **Mid-range Engines** - 25-90 HP engines for general use
6. **High-power Engines** - 100-140 HP engines for commercial use
7. **Contact** - Multiple contact methods and departments
8. **Dealer Locator** - Jeddah showroom with services
9. **Quote** - Comprehensive quote request form
10. **FAQ** - Searchable FAQ with 24 questions across 6 categories

## 🌐 Deployment

The project is configured for easy deployment on Vercel:
- ESLint errors are ignored during build for faster deployment
- TypeScript errors are ignored during build
- All images are optimized for web

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Tohatsu Saudi Arabia
