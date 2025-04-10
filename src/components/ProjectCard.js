import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL, githubUrl }) => {
  const isClickable = githubUrl && githubUrl.trim() !== "";

  const content = (
    <div className="proj-imgbx">
      <img src={imgURL} alt={title} className="project-img" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
      {isClickable ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Col>
  );
};
