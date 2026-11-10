# 💈 Chicago Style Cuts Barber Shop

> **Sharp Cuts. Classic Craft. Cary’s Trusted Neighborhood Barber Shop.**  
> Official website for Chicago Style Cuts Barber Shop at 750 E Chatham St (Suite B), Cary, NC 27511.

[![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245.svg?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment_Ready-000000.svg?logo=vercel&logoColor=white)](https://vercel.com/)

---

## ✂️ About The Shop

Chicago Style Cuts Barber Shop brings traditional barbershop hospitality together with modern styling expertise. Led by owner **Zayed** and a dedicated crew of experienced barbers across **11 full-service chairs**, the shop delivers precision skin fades, classic tapers, hot-towel beard trims, and patient kids' cuts with virtually zero wait times, open 7 days a week.

- 📍 **Address:** 750 E Chatham St (Suite B), Cary, NC 27511 *(Convenient storefront parking right out front)*
- 📞 **Phone:** [(919) 377-2866](tel:9193772866)
- ✉️ **Email:** [arafatzaed1@hotmail.com](mailto:arafatzaed1@hotmail.com)
- ⭐ **Rating:** 4.6 Stars across 1,030+ Google Reviews • 4.5 Stars on Yelp
- 🌐 **Recommended Domain:** `chicagostylecuts.com`
- 🕒 **Hours:**
  - **Monday – Saturday:** 10:00 AM – 7:00 PM
  - **Sunday:** 10:00 AM – 5:00 PM

---

## 🚀 Features & Multi-Page Architecture

This website is built with **React 19**, **Vite**, **Tailwind CSS**, and **React Router DOM v7**, engineered to be **100% mobile-responsive** with fast page loads and smooth client-side routing.

| Page / Route | Path | Description |
| :--- | :--- | :--- |
| **Home** | `/` | Hero with trust badges, real-time "Open Now" badge, About Zayed & the 11 chairs, pricing highlights, barber preview, testimonials, interactive map preview. |
| **Services & Pricing** | `/services` | Full menu with transparent pricing ($25 Men's Haircut, $25 Kids' Haircut, $15–$20 Beard Trim, $35 Hair Color, Combo options), feature checklists, comparison table, and FAQ. |
| **Our Barbers** | `/barbers` | Profiles for Zayed, Samir, Zee, Steven, Amini, Bulat, stations, specialties, experience, and direct "Request Barber" actions. |
| **Reviews & Testimonials** | `/reviews` | Verified Google & Yelp customer reviews, 4.6-star badge breakdown, category filters (Fades, Walk-Ins, Kids, Value), and link to leave a review. |
| **Hours & Location** | `/hours-location` | Interactive Google Map of 750 E Chatham St, live schedule highlighting today's hours, click-to-call, driving directions, and question form. |
| **Book / Call Now** | `/book` | Walk-in guide (explaining the 11-chair advantage) + instant phone call dialer + interactive online chair reservation request form. |

### Extra Features:
- 🎨 **Custom SVG Barber Logo & Favicon:** Vintage circular emblem featuring crossed straight razor & shears, barber pole stripes, Chicago flag 6-pointed stars, and gold ribbon typography.
- 📱 **Mobile-First Experience:** Touch-friendly navigation drawer, collapsible menus, and a sticky floating bottom bar (`Call Shop` + `Book Chair`) for mobile devices.
- 🕒 **Live Eastern Time Operating Status:** Real-time badge dynamically calculates whether the Cary shop is currently open or closed and displays remaining hours.
- 🪟 **Quick Booking Modal:** Accessible from any button on any page without leaving the current screen.
- 🔍 **SEO & Social Optimization:** Title tags, OpenGraph card, meta descriptions, XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (`react`, `react-dom`)
- **Routing:** React Router DOM v7 (`react-router-dom`)
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS 3.4 with custom barbershop color palette
- **Icons:** Lucide React (`lucide-react`)
- **Deployment Target:** Vercel (pre-configured with `vercel.json` SPA rewrite rules)

---

## 💻 Local Development

Follow these steps to run the website locally on your computer:

```bash
# 1. Clone or navigate to the directory
cd "Chicago Style Cuts Barber Shop"

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173` (or the URL shown in your terminal).

To create a production build:
```bash
npm run build
npm run preview
```

---

## 📤 Step-by-Step GitHub Push Guide

To push this codebase to your GitHub account:

### 1. Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Enter a repository name, e.g.: `chicago-style-cuts` or `chicago-style-cuts-barber-shop`
3. Choose **Public** or **Private**
4. **Do NOT** initialize with a README, .gitignore, or license (we already created them!)
5. Click **Create repository**

### 2. Push your local files to GitHub
In your terminal inside this project folder, run:

```bash
# Verify all files are tracked
git status

# Rename branch to main (if not already main)
git branch -M main

# Add your GitHub repository as the remote origin
# (Replace YOUR-USERNAME and REPO-NAME with your actual GitHub details)
git remote add origin https://github.com/YOUR-USERNAME/chicago-style-cuts.git

# Push to GitHub
git push -u origin main
```

---

## ☁️ Step-by-Step Vercel Deployment Guide

Deploying this website to Vercel takes under 2 minutes.

### Method 1: Deploy via Vercel Dashboard (Recommended — Automatic CI/CD)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Under **"Import Git Repository"**, select the `chicago-style-cuts` repository you pushed to GitHub.
4. Vercel automatically detects the framework as **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.
6. Within ~30 seconds, your website is live with a free `*.vercel.app` URL and automatic SSL certificate!
7. **Custom Domain:** Go to Project Settings → **Domains** and add `chicagostylecuts.com`.

### Method 2: Deploy using Vercel CLI

If you prefer using the terminal:

```bash
# 1. Install Vercel CLI globally (if not already installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy preview
vercel

# 4. Deploy to production
vercel --prod
```

---

## ⚙️ Vercel Routing Configuration (`vercel.json`)

To ensure single-page client routing (React Router) works seamlessly when users directly access URLs like `/services` or `/barbers` without 404 errors, `vercel.json` is included:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📄 License & Attribution

- Content & Brand: **Chicago Style Cuts Barber Shop**, Cary, NC
- Owner: **Zayed**
- Design & Code: Built with React & Tailwind CSS
- © 2026 Chicago Style Cuts Barber Shop. All rights reserved.
