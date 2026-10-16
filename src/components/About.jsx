function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="muted">
            I'm Harsh Sharma, a BCA student at GL Bajaj Institute
            of Management with a strong interest in web development
            and technology. As a MERN Stack Developer, I enjoy
            building interactive web applications and turning
            creative ideas into functional digital experiences.
          </p>

          <p className="muted">
            Along with development, I'm exploring Data Analytics,
            marketing, and AI-powered tools to expand my skills
            and understand how technology can solve real-world
            problems. I'm always eager to learn, experiment with
            new ideas, and improve through hands-on projects.
          </p>
        </div>

        <div className="card">
          <h3>My Interests & Focus Areas</h3>

          <div className="badges">
            <span className="badge">MERN Stack Development</span>
            <span className="badge">React.js</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">Data Analytics</span>
            <span className="badge">Marketing</span>
            <span className="badge">AI Tools</span>
            <span className="badge">Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;