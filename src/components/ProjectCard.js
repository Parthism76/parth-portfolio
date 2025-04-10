import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, liveDemo, tech }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-img" />

        <div className="proj-overlay">
          <div className="proj-content">
            <h4>{title}</h4>
            <p>{description}</p>

            <div className="project-links">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                  <FaGithub size={20} />
                </a>
              )}
              {liveDemo && (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>

            {tech && (
              <div className="tech-tags">
                {tech.map((item, idx) => (
                  <span key={idx} className="tech-pill">{item}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
