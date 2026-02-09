export default function Skills() {
  const skills = ['React', 'JavaScript', 'Java', 'SQL', 'Oracle', 'Php', 'NoSQL','Git']

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid skills-grid">
        {skills.map(skill => (
          <div className="card skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
