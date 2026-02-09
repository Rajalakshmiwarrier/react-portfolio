export default function Projects() {
    const projects = [
        {   title : 'React Portfolio',
            description: 'Personal portfolio built with Vite + React and modern CSS.',
            tech : ['React', 'Vite','CSS'],
            github: 'https://github.com/Rajalakshmiwarrier/react-portfolio',
            demo: 'https://your-site.netlify.app',
        },
        {
            title : 'Human Resource Management System',
            description: 'Human Resource Management System for 500+ users',
            tech : ['Oracle', 'Php','CSS','Javascript','Jquery'],
            github: 'https://github.com/rajalakshmiwarrierp/react-portfolio',
            demo: 'https://your-site.netlify.app',
        },
    ]
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid projects-grid">
        {
        projects.map((project)=>(
            <div className="card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
             <div className="tech">
                    {project.tech.map(t=>
                        <span key={t}>{t}</span>
                    )}
                </div>
            <div className="project-links">
                <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                >GitHub</a>
                {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Live Demo
                </a>
              )}
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}
