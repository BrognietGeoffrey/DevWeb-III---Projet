import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../logo.svg"
import Connexion from "./Connexion";


function Header (props){
    const loggedOut = (
        <>
            <Navbar bg={"#99AAB5"} expand="lg">
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
                        <Nav.Link id={"Inscription"} onClick={ () => alert("tentative d'inscription")}>
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
                            <NavDropdown.Item eventKey="3.1" as={Link} to="AjoutFacture">Ajouter une nouvelle Facture</NavDropdown.Item>
                            <NavDropdown.Item eventKey="3.2" as={Link} to="RechercheFactures">Recherche d'une facture</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="3.3" as={Link} to="Clients">Clients</NavDropdown.Item>
                            <NavDropdown.Item eventKey="3.4" as={Link} to="Fournisseurs">Fournisseurs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="3.5" as={Link} to="Resume">Résumé de la période</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey="4" as={Link} to="Profil">Profil</Nav.Link>
                        <Nav.Link id="Deconnexion">
                            <span onClick={() => props.alert("tentative de deconnexion")}>Déconnexion</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

    return <div>{props.logged_in ? loggedIn : loggedOut}</div>;
}

export default Header;