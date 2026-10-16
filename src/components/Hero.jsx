import { Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">
            Hi, I'm Harsh Sharma 👋
          </p>

          <h1 className="hero-title gradient-text">
            MERN Stack Developer & Data Analytics 
          </h1>

          <p className="hero-text">
            I'm a BCA student at GL Bajaj Institute of Management,
            passionate about web development, data analytics,
            marketing, and exploring AI-powered tools. I enjoy
            building web applications, solving problems through
            code, and learning new technologies that turn ideas
            into practical solutions.
          </p>

          <a className="btn btn-primary" href="#about">
            More About Me
          </a>

          <div className="social-icons">
            <a
              className="icon-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              className="icon-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/img.png" alt="Harsh Sharma" />
        </div>
      </div>
    </section>
  );
}

export default Hero;