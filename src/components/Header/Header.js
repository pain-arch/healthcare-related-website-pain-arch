import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/old-care.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {

    const {user, logOut} = useAuth();

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" className="navbar-design">
                <Container>
                <Navbar.Brand href="/" className="navbar-brand"><img className="logo-design" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-dark" to="/">Home</NavLink>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-dark" to="/about-us">About Us</NavLink>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-dark" to="/services">Services</NavLink>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-dark" to="/features">Features</NavLink>
                        <NavLink className="mx-2 fs-5 text-decoration-none text-dark" to="/blogs">Blogs</NavLink>
                        
                        {
                            user?.displayName ?(
                               <button className="button-design btn mx-2 fs-5 text-decoration-none text-light bg-dark border border-2 border-light " onClick={logOut} >Log Out</button>
                            ):
                            (<div>
                            <NavLink className="button-design btn mx-2 fs-5 text-decoration-none text-light bg-dark border border-2 border-light " to="/register">Register</NavLink>
                            <NavLink className="button-design btn mx-2 fs-5 text-decoration-none text-light bg-dark border border-2 border-light " to="/login">Login
                            </NavLink>
                            </div>)
                        }
                        { user?.displayName ?(
                        <NavLink className="text-decoration-none text-dark"  to="/">
                            Signed in as : <span style={{color: "white", fontWeight:"600", fontSize:"25px"}} >{user?.displayName}</span>
                        </NavLink>) :
                        <div></div>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
            
        </div>
    );
};

export default Header;