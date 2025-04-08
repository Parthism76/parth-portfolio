import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/mylogo-1.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailChimpForm/>
                    <Col sm ={6}>
                    <div className="footer-logo">     
                        <img src = {logo} alt ="Logo" className="logo-img"></img>
                    </div>
                    </Col>
                    <Col sm ={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href = ""><img src = {navIcon1}></img></a>
                        <a href = ""><img src = {navIcon2}></img></a>
                        <a href = ""><img src = {navIcon3}></img></a>
                    </div>
                    <p>CopyRight 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
