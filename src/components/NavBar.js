import {useEffect, useState} from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import logo from '../assets/img/mylogo-1.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setAtiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect ( () => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll",onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setAtiveLink(value);
    }

    return (
        <Router>
        <Navbar expand = "md" className = {scrolled ? "scrolled": ""}>
            <Container> 
                <Navbar.Brand href="/">
                <div className="logo-container">
                    <img src = {logo} alt = "Logo" className="logo-img"/>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = {activeLink === 'home'? 'active navbar-link' : 'navbar'} onClick = {()=>  onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className = {activeLink === 'skills'? 'active navbar-link' : 'navbar'} onClick = {()=>  onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className = {activeLink === 'projects'? 'active navbar-link' : 'navbar'} onClick = {()=>  onUpdateActiveLink('projects')} >Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href = "#"><img src = {navIcon1} alt = "" /></a>
                        <a href = "#"><img src = {navIcon2} alt = "" /></a>
                        <a href = "#"><img src = {navIcon3} alt = "" /></a>
                    </div>
                    <HashLink to='#connect'>
                        <button className="vvd"><span>Let’s Connect</span></button>
                    </HashLink>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    </Router>
    )
}