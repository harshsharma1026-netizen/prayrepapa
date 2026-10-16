import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="muted">
            I'm always open to connecting with developers,
            exploring new opportunities, collaborating on
            projects, and learning about exciting ideas in
            web development, data analytics, and AI.
            Feel free to reach out!
          </p>

          <div className="contact-links">
            <a
              className="icon-link icon-link-text"
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail size={18} />
              Email
            </a>

            <a
              className="icon-link icon-link-text"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              className="icon-link icon-link-text"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <a
            className="btn btn-primary"
            href="mailto:your-email@example.com"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;