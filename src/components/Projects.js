import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/websec.jpg";
import { Nav,Container,Row,Col,Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
            {
              title: "ShopEasy An E-Commerce website",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Movieland",
              description: "Implemented an interactive movie search application using React and the OMDB API, enabling real-time movie exploration. Designed responsive movie cards with CSS to ensure a user-friendly interface that adapts to various screen sizes.",
              imgUrl: projImg2,
            },
            {
              title: "Websec - A website classification system",
              description: "Design & Development",
              imgUrl: projImg3,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
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
                    <h2>Projects</h2>
                    <p>
                        ffrfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                    </p>
                    <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                    <Nav variant = "pills" className="nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                        <Nav.Item>
                            <Nav.Link eventkey = "first">Tab 1 </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey = "second">Tab 2 </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey= "third">Tab 3</Nav.Link>
                        </Nav.Item> 
                    </Nav>
                    <Tab.Content id = "slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return (
                                            <ProjectCard 
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
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