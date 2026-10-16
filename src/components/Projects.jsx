
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid project-grid">
          <ProjectCard
            title="DevConnect - Developer Community"
            description="A MERN stack web application where developers can create profiles, connect with other developers, share ideas, and manage their posts."
            tech={["React", "Node.js", "Express", "MongoDB"]}
            github="#"
          />

          <ProjectCard
            title="Sales & Marketing Analytics Dashboard"
            description="A data analytics dashboard that explores sales trends, customer behavior, revenue performance, and marketing campaign results to support better business decisions."
            tech={["Python", "Pandas", "Excel", "Power BI"]}
            github="#"
          />

          <ProjectCard
            title="AI Marketing Content Assistant"
            description="A concept application that uses AI tools to generate marketing content ideas, draft social media captions, and organize content plans for different audiences."
            tech={["React", "JavaScript", "AI APIs"]}
            github="#"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
