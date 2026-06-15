# Metawee's Portfolio Hub

Welcome to my personal portfolio landing page. This project serves as a centralized gateway to my technical works, ranging from active products and IoT/data systems to desktop, backend, and frontend logic projects.

## Key Features
- **Centralized Showcase:** A clean, minimal dark-themed UI to explore all major projects by category.
- **Project Preview Cards:** Selected projects include captured screenshots that link directly to live demos or project pages.
- **Responsive Design:** Optimized for all devices, ensuring a seamless experience when accessed via QR code on my resume.
- **Automated CI/CD:** Integrated with GitHub Actions for continuous integration and deployment to GitHub Pages.

## Tech Stack
- **Frontend:** React 19 + TypeScript (Vite)
- **Styling:** CSS3 (Custom Dark Theme), Google Sans Typography
- **Preview Capture:** Playwright screenshots for project preview assets
- **Automation:** GitHub Actions (CI/CD)
- **Deployment:** GitHub Pages

## Project Structure
```bash
my-projects/
├── public/                 # Static assets (profile image, resume PDF, previews)
│   ├── projects/           # Captured screenshots for project cards
│   ├── resume-pic.png
│   └── CV_Metawee_Charoentungsirikul.pdf
├── scripts/
│   └── capture-previews.mjs # Captures live project screenshots
├── src/
│   ├── App.tsx             # Main application logic and project data
│   ├── App.css             # Custom styles and animations
│   └── main.tsx            # React entry point
├── .github/                # CI/CD workflows
└── vite.config.ts          # Vite build configuration
```

## Local Development
```bash
npm install
npm run dev
```

Useful scripts:
- `npm run build` - Type-checks and builds the production bundle.
- `npm run preview` - Serves the production build locally.
- `npm run lint` - Runs ESLint.
- `npm run capture-previews` - Captures project demo screenshots into `public/projects/`.

## Deployment Process
This repository is configured with a Continuous Deployment pipeline.
1. Any push to the `main` branch triggers the **Deploy Vite React to GitHub Pages** workflow.
2. GitHub Actions installs dependencies, builds the project (`npm run build`), and deploys the `dist` folder to GitHub Pages.
3. Vite is configured with the GitHub Pages base path `/Portfolio/`.

## Contact
- Email: metawee.77@gmail.com
- LinkedIn: [linkedin.com/in/metawee77](https://www.linkedin.com/in/metawee77/)
- GitHub: [savant777](https://github.com/savant777)
