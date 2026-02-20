import './App.css';

function App() {
    const projectCategories = [
        {
            category: "Web Development",
            projects: [
                {
                    title: "Playtorium Test (Discount Engine)",
                    tech: ["React.js", "Bootstrap 5", "State Management", "GitHub Actions (CI/CD)"],
                    description: "Engineered an advanced shopping cart discount engine with complex business logic and established an automated CI/CD pipeline for seamless deployment.",
                    github: "https://github.com/savant777/playtorium-test2",
                    demo: "https://savant777.github.io/playtorium-test2/"
                },
                {
                    title: "Project-SS (Community Portal)",
                    tech: ["Vanilla JavaScript", "JSON (Data-driven)", "CSS3 (Custom Neon Theme)"],
                    description: "Developed a responsive data-driven portal featuring a futuristic \"Teal Neon\" design and modular architecture.",
                    github: "https://github.com/savant777/Project-SS",
                    demo: "https://savant777.github.io/Project-SS/" 
                },
                {
                    title: "Responsive Web Implementation",
                    tech: ["HTML5", "CSS3", "Bootstrap 5", "Figma-to-Code"],
                    description: "Transformed high-fidelity Figma designs into pixel-perfect, responsive web pages with high UI/UX precision.",
                    github: "https://github.com/savant777/homework-for-new-dev/tree/main/responsive_html",
                    demo: "https://savant777.github.io/homework-for-new-dev/responsive_html/"
                }
            ]
        },
        {
            category: "Desktop & Backend",
            projects: [
                {
                    title: "Class Registration App",
                    tech: ["C# WinForms", "SQL LocalDB"],
                    description: "Built a robust student registration system focusing on adaptive software architecture and efficient database integration.",
                    github: "https://github.com/savant777/homework-for-new-dev/tree/main/class_registration_app",
                    demo: null
                },
                {
                    title: "Line OA API",
                    tech: ["Node.js", "Webhook Integration", "Line Messaging API"],
                    description: "Developed backend middleware to handle real-time data processing and automated webhook events for Line Official Accounts.",
                    github: "https://github.com/savant777/homework-for-new-dev/tree/main/line_oa_api",
                    demo: null
                }
            ]
        },
        {
            category: "Data Science & AI",
            projects: [
                {
                    title: "Movie Recommender System",
                    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit Cloud (CD)"],
                    description: "Architected a content-based filtering engine using machine learning concepts and managed delivery through a Continuous Deployment workflow.",
                    github: "https://github.com/savant777/Movie-Recommender",
                    demo: "https://movie-recommender-x9a4vlfequvjopmtau85tz.streamlit.app/"
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
                    <p className="subtitle">Full Stack Developer | First-Class Honours</p>
                </div>
                
                <div className="contact-info">
                    <p><a href="mailto:metawee.77@gmail.com">✉️ metawee.77@gmail.com</a></p>
                    <p><a href="https://linkedin.com/in/metawee77" target="_blank" rel="noreferrer">🔗 LinkedIn</a></p>
                    <p><a href="https://github.com/savant777" target="_blank" rel="noreferrer">💻 GitHub</a></p>
                </div>
                
                <div className="cta-buttons">
                    <a href="./Resume_Metawee_Charoentungsirikul.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">Download Resume (PDF)</a>
                </div>
            </header>

            <main>
                {projectCategories.map((group, idx) => (
                    <section key={idx}>
                        <h2 className="section-title">{group.category}</h2>
                        <div className="project-grid">
                            {group.projects.map((project, pIdx) => (
                                <div key={pIdx} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                    </div>
                                    <div className="links">
                                        {project.demo && (
                                            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
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
