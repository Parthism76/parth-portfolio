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
              description: "Design & Development",
              imgUrl: projImg1,
              githubUrl : "https://github.com/Parthism76/MovieLand"
            },
            {
              title: "Movieland",
              description: "Implemented an interactive movie search application using React and the OMDB API, enabling real-time movie exploration. Designed responsive movie cards with CSS to ensure a user-friendly interface that adapts to various screen sizes.",
              imgUrl: projImg2,
              githubUrl:""
            },
            {
              title: "Websec - A website classification system",
              description: "Design & Development",
              imgUrl: projImg3,
              githubUrl:"https://github.com/Parthism76/MovieLand"
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
              githubUrl: "https://github.com/Parthism76/MovieLand"
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