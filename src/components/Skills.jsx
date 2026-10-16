
function Skills() {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid">
          <div className="card">
            <h3>MERN Stack Development</h3>
            <div className="badges">
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React.js</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express.js</span>
              <span className="badge">MongoDB</span>
            </div>
          </div>

          <div className="card">
            <h3>Programming & Tools</h3>
            <div className="badges">
              <span className="badge">JavaScript</span>
              <span className="badge">Git</span>
              <span className="badge">GitHub</span>
              <span className="badge">REST APIs</span>
              <span className="badge">VS Code</span>
            </div>
          </div>

          <div className="card">
            <h3>Data Analytics</h3>
            <div className="badges">
              <span className="badge">Excel</span>
              <span className="badge">SQL</span>
              <span className="badge">Python</span>
              <span className="badge">Pandas</span>
              <span className="badge">Data Visualization</span>
              <span className="badge">Power BI</span>
            </div>
          </div>

          <div className="card">
            <h3>AI & Marketing</h3>
            <div className="badges">
              <span className="badge">AI-Powered Tools</span>
              <span className="badge">Prompt Engineering</span>
              <span className="badge">Digital Marketing</span>
              <span className="badge">Content Ideas</span>
              <span className="badge">Creative Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
