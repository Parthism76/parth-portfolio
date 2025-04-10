import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Stay in Touch</h3>
            <p>Drop your email and I’ll reach out when I launch something exciting!</p>
          </Col>
          <Col md={6} xl={7}>
            <form
              action="https://formsubmit.co/vibressence2022@gmail.com"
              method="POST"
              onSubmit={handleFormSubmit}
              target="_blank"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="new-email-bx">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
                <button type="submit">Notify Me</button>
              </div>
            </form>
          </Col>
        </Row>

    
        {submitted && (
          <div className="snackbar show">
            ✅ Thank you! You'll be notified.
          </div>
        )}
      </div>
    </Col>
  );
};
