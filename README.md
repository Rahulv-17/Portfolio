# Vaddi Rahul — Personal Portfolio

An editorial, high-performance personal developer portfolio built for **Vaddi Rahul** ([rahulvaddi.me](https://rahulvaddi.me)), Computer Science & Engineering undergraduate at **IIIT Kottayam** specializing in AI & Data Science.

Designed with an editorial warm linen, terracotta, and roasted obsidian palette inspired by contemporary design publications and bespoke photography.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration FX**: `canvas-confetti`

---

## ✨ Features & Architecture

- **Editorial Hero**: Featuring a custom transparent portrait cutout framed inside a warm terracotta arch, dynamic greeting, verified social links, and clear call-to-action.
- **Curated Projects Showcase**:
  - **Credix**: AI-driven micro-lending platform (FastAPI, PyTorch, React, Groq Llama-3.3-70B, Qdrant).
  - **RepoLens AI**: Automated repository intelligence and code health analysis (FastAPI, React, Tree-sitter, Gemini 2.5 Flash, Mastra).
  - **SplitMint**: Intelligent expense-sharing application with OCR receipt extraction (Hono, Cloudflare Workers, React, Gemini 2.5 Flash).
- **Interactive Skills Matrix**: Categorized across Languages, AI & ML, Frameworks & Libraries, Databases & Cloud, and Developer Tools with real-time filtering.
- **Engineering Process**: 3-step breakdown (Discover, Engineer, Deliver) detailing system design methodology.
- **Timeline & Milestones**: Verified timeline highlighting freelance development, academic milestones at IIIT Kottayam, and autonomous systems engineering.
- **Direct Contact Dispatch**: Multi-channel communication suite featuring 1-click web Gmail launcher, system email fallback, and instant clipboard copy.
- **Responsive & Accessible**: Pixel-perfect layout across desktop, tablet, and mobile (down to 360px viewport) with zero horizontal overflow.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rahulv-17/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel with Custom Domain (`rahulvaddi.me`)

This repository is pre-configured for instant zero-configuration deployment to [Vercel](https://vercel.com) via `vercel.json`.

### 1. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel
1. Visit [vercel.com/new](https://vercel.com/new) and connect your GitHub account.
2. Select your `Portfolio` repository.
3. Keep default settings (Framework preset: `Vite`, Root Directory: `./`).
4. Click **Deploy**.

### 3. Connect Domain on Namecheap
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Add `rahulvaddi.me` and `www.rahulvaddi.me`.
3. In your **Namecheap Dashboard**:
   - Go to **Domain List** → Click **Manage** next to `rahulvaddi.me`.
   - Go to **Advanced DNS** tab.
   - Add the following DNS Records:
     | Type | Host | Value | TTL |
     | :--- | :--- | :--- | :--- |
     | **A Record** | `@` | `76.76.21.21` | Automatic |
     | **CNAME Record** | `www` | `cname.vercel-dns.com.` | Automatic |
   *(Note: Existing subdomains like `repolens.rahulvaddi.me` and `splitmint.rahulvaddi.me` remain completely unaffected).*
4. Once DNS propagates (typically 2-15 minutes), Vercel automatically provisions free SSL certificates.

---

## 📄 License

MIT © [Vaddi Rahul](https://github.com/Rahulv-17)
