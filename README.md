# 🌐 Metawee's Portfolio Hub

Welcome to my personal portfolio landing page. This project serves as a centralized gateway to my technical works, ranging from Web Development and Desktop Applications to Data Science projects.

## ✨ Key Features
- **Centralized Showcase:** A clean, minimal dark-themed UI to explore all my major projects.
- **Responsive Design:** Optimized for all devices, ensuring a seamless experience when accessed via QR code on my resume.
- **Automated CI/CD:** Integrated with **GitHub Actions** for continuous integration and deployment to GitHub Pages.

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** CSS3 (Custom Dark Theme), Google Sans Typography
- **Automation:** GitHub Actions (CI/CD)
- **Deployment:** GitHub Pages

## 📂 Project Structure
```bash
my-projects/
├── public/          # Assets (Profile pic, Resume PDF)
├── src/             # Source files
│   ├── App.jsx      # Main application logic & project data
│   └── App.css      # Custom styles & animations
├── .github/         # CI/CD Workflows
└── vite.config.ts   # Build configurations
```

## 🚀 Deployment Process
This repository is configured with a **Continuous Deployment** pipeline.
1. Any push to the `main` branch triggers the **Deploy Vite React to GitHub Pages** workflow.
2. GitHub Actions installs dependencies, builds the project (`npm run build`), and deploys the `dist` folder to the `gh-pages` environment.

---

## 👤 Contact
- Email: metawee.77@gmail.com
- LinkedIn: [linkedin.com/in/metawee77](https://www.linkedin.com/in/metawee77/)
- GitHub: [savant777](https://github.com/savant777)
