import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import parth from "../assets/img/parth.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Parth Bhatt", "Software Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">console.log("Hello World!");</span>
                  <h1>{`I'm `}<span className="wrap">{text}</span></h1>
                  <p>
                    Aspiring Full-Stack Developer | Master's in Computer Science |
                    Proficient in C#, Python, JavaScript, Java | Exploring Rust |
                    Web Dev & ML Enthusiast | Ready to Contribute and Grow in the Tech Industry
                  </p>

                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Let's Connect
                  </button>

                  <a
                    href="/Resume_Parth_Bhatt.pdf"
                    download
                    className="resume-btn"
                    style={{
                      display: "inline-block",
                      marginTop: "20px",
                      padding: "12px 24px",
                      fontWeight: 600,
                      background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                      color: "#fff",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    📄 Download Resume
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={parth} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
