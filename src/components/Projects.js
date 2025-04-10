import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/websec.jpg";
import { Nav,Container,Row,Col,Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
//import 'bootstrap/dist/css/bootstrap.min.css';


export const Projects = () => {
    const projects = [
        {
          title: "ShopEasy An E-Commerce website",
          description: "E-commerce platform with product filtering, cart, and checkout flow.",
          imgUrl: projImg1,
          githubUrl: "https://github.com/Parthism76/ShopEasy",
          liveDemo: "https://shopeasy.vercel.app",
          tech: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          title: "Movieland",
          description: "Interactive movie search with OMDB API and responsive UI.",
          imgUrl: projImg2,
          githubUrl: "https://github.com/Parthism76/MovieLand",
          liveDemo: "https://movieland.vercel.app",
          tech: ["React", "OMDB API", "CSS"]
        },
        {
          title: "Websec",
          description: "ML-based website classification system.",
          imgUrl: projImg3,
          githubUrl: "https://github.com/Parthism76/Websec",
          tech: ["Python", "Scikit-learn", "Flask"]
        },
      ];
      

    return (
        <section className="project" id = "projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                     {({isVisible}) => 
                       <div className= {isVisible?"animate__animated animate__bounce": ""}>
                    <h2>Project and Achievements</h2>
                    <p>Here are a few of the projects I've worked on recently. Click through the tabs to explore more.</p>

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey ="first" as="button" >All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second" as="button">Featured</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                       <Nav.Link eventKey="third" as="button">Archived</Nav.Link>
                    </Nav.Item>
                    </Nav>

  <Tab.Content id="slideInUp"  key={isVisible ? "visible" : "hidden"} className={isVisible ? "animate__animated animate__slideInUp" : ""} >
    <Tab.Pane eventKey="first">
      <Row>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="second">
      <Row>

        {[projects[0], projects[1]].map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </Tab.Pane>
    <Tab.Pane eventKey="third">
      <p>Stay tuned! More projects coming soon.</p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>

                </div>}
                </TrackVisibility>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src= {colorSharp2}></img>
        </section>
    )
    
}