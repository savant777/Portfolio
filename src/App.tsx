import './App.css';

const contactIcons = {
    email: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 10.5V18" />
            <path d="M6.5 6v.01" />
            <path d="M11 18v-7.5" />
            <path d="M11 14c0-2.1 1.2-3.5 3-3.5s3 1.2 3 3.5V18" />
            <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        </svg>
    ),
    github: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5" />
            <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
        </svg>
    )
};

const downloadIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="btn-icon">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
    </svg>
);

function App() {
    const projectCategories = [
        {
            category: "Active Product",
            projects: [
                {
                    title: "ZZZCODE EDITOR",
                    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
                    description: "Built and actively iterates on a developer-focused code editor with customizable UI workflows, drag-and-drop interactions, color customization, toast feedback, and cloud-backed features.",
                    github: "https://github.com/savant777/zzzcode",
                    demo: "https://zzzcode.vercel.app/?group=category&tag=all",
                    demoLabel: "Open App",
                    preview: "./projects/zzzcode-editor.png"
                }
            ]
        },
        {
            category: "IoT & Data Systems",
            projects: [
                {
                    title: "IoT Anomaly Detection Dashboard",
                    tech: ["Next.js", "TypeScript", "Recharts", "Node.js", "Express", "Python", "scikit-learn"],
                    description: "Developed a full-stack predictive maintenance dashboard using machine learning-based anomaly scoring, sensor statistics, and interactive data visualizations.",
                    github: "https://github.com/savant777/Anomaly-Detection",
                    demo: "https://anomaly-detection-two.vercel.app/",
                    demoLabel: "Open Dashboard",
                    backend: "https://anomaly-detection-ev0a.onrender.com",
                    preview: "./projects/iot-anomaly-detection.png"
                }
            ]
        },
        {
            category: "Desktop & Backend",
            projects: [
                {
                    title: "Class Registration Application",
                    tech: ["C#", "WinForms", "SQL Server LocalDB"],
                    description: "Designed and developed a desktop-based class registration system with database integration, CRUD functionality, and a practical alternative workflow when PowerApps was unavailable.",
                    github: "https://github.com/savant777/homework-for-new-dev/tree/main/class_registration_app",
                    demo: null
                },
                {
                    title: "LINE OA API Middleware",
                    tech: ["Node.js", "Express.js", "LINE Messaging API", "Webhook Integration"],
                    description: "Developed backend middleware for LINE Official Account integration with webhook handling, custom message workflows, and secure environment-based configuration.",
                    github: "https://github.com/savant777/homework-for-new-dev/tree/main/line_oa_api",
                    demo: null
                }
            ]
        },
        {
            category: "Frontend Logic",
            projects: [
                {
                    title: "Playtorium Test (Discount Engine)",
                    tech: ["React.js", "State Management", "Conditional Rules", "GitHub Actions"],
                    description: "Implemented discount calculation logic with maintainable frontend state handling, conditional business rules, and an automated deployment workflow.",
                    github: "https://github.com/savant777/playtorium-test2",
                    demo: "https://savant777.github.io/playtorium-test2/",
                    demoLabel: "View Project",
                    preview: "./projects/playtorium-test.png"
                }
            ]
        }
    ];
    return (
        <div className="container">
            <header>
                <div className="profile-section">
                    <img src="./resume-pic.png" alt="Metawee Charoentungsirikul" className="profile-pic" />
                    <h1>Metawee C.</h1>
                    <p className="subtitle">Full Stack Developer | IoT & Data Systems</p>
                </div>
                
                <div className="contact-info">
                    <p><a href="mailto:metawee.77@gmail.com">{contactIcons.email}<span>email</span></a></p>
                    <p><a href="https://linkedin.com/in/metawee77" target="_blank" rel="noreferrer">{contactIcons.linkedin}<span>LinkedIn</span></a></p>
                    <p><a href="https://github.com/savant777" target="_blank" rel="noreferrer">{contactIcons.github}<span>GitHub</span></a></p>
                </div>
                
                <div className="cta-buttons">
                    <a href="./CV_Metawee_Charoentungsirikul.pdf" className="btn btn-primary" target="_blank" rel="noreferrer" download>{downloadIcon}<span>Download CV</span></a>
                </div>
            </header>

            <main>
                {projectCategories.map((group, idx) => (
                    <section key={idx}>
                        <h2 className="section-title">{group.category}</h2>
                        <div className="project-grid">
                            {group.projects.map((project, pIdx) => (
                                <div key={pIdx} className="project-card">
                                    {"preview" in project && project.preview && (
                                        <a href={project.demo || project.github} className="project-preview" target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                                            <img src={project.preview} alt={`${project.title} preview`} loading="lazy" />
                                        </a>
                                    )}
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                    </div>
                                    <div className="links">
                                        {project.demo && (
                                            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">{project.demoLabel}</a>
                                        )}
                                        {"backend" in project && project.backend && (
                                            <a href={project.backend} className="btn btn-secondary" target="_blank" rel="noreferrer">API Backend</a>
                                        )}
                                        <a href={project.github} className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            <footer>
                <p>Let's build something great together.</p>
                <p>© {new Date().getFullYear()} Metawee Charoentungsirikul</p>
            </footer>
        </div>
    )
}

export default App
