import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../logo.svg"
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Deconnexion from "./Deconnexion";


function Header (props){
    const loggedOut = (
        <>
            <Navbar bg={"dark"} variant={"dark"} expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt="Logo du site"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    EasyNotes
                </Navbar.Brand>
                <Navbar.Text>
                    <span>{props.afficheNom}</span>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant={"pills"} defaultActiveKey={"1"} className={"ml-auto"}>
                        <Nav.Link eventKey={"1"} as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link id={"Connexion"} onClick={() => props.display_popUp(Connexion)}>
                            <span>Connexion</span>
                        </Nav.Link>
                        <Nav.Link id={"Inscription"} onClick={ () => props.display_popUp(Inscription)}>
                            <span>Inscription</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

    const loggedIn = (
        <>
            <Navbar bg={"dark"} variant={"dark"} expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Easy notes
                </Navbar.Brand>
                <Navbar.Text>
                    Connecté en tant que : <span id="AfficheUserName" >{props.afficheNom}</span>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" defaultActiveKey="1" className="ml-auto">
                        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" as={Link} to="page-principale">Notes</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" as={Link} to="Groupes">Groupes</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3" as={Link} to="Horaire">Horaire</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4" as={Link} to="Profil">Profil</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id="Deconnexion">
                            <span onClick={() => props.display_popUp(Deconnexion)}>Déconnexion</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

    return <div>{props.logged_in ? loggedIn : loggedOut}</div>;
}

export default Header;