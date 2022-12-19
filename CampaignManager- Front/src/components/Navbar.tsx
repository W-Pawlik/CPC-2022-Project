import "../Styles/Navbar.css"
import { NavLink } from "react-router-dom"
import { Button, Nav } from "react-bootstrap"
import logo from "../images/dnd.png"

export function Navbar() {
    return (
    <div className="Navbar">
            <img id="logo" src={logo} alt="Logo"/>
        <Nav className="me-auto nav_links">
        <Nav.Link to="/" as={NavLink}>
            <span className="link">
                Home
            </span>
        </Nav.Link>
        <Nav.Link to="/map" as={NavLink}>
        <span className="link">
                Map
            </span>
        </Nav.Link>
        <Nav.Link to="/monsters" as={NavLink}>
        <span className="link">
                Monsters
            </span>
        </Nav.Link>
        <Nav.Link to="/npc" as={NavLink}>
        <span className="link">
                Npc
            </span>
        </Nav.Link>
        <Nav.Link to="/fight" as={NavLink}>
        <span className="link">
                Fight
            </span>
        </Nav.Link>
        </Nav>
        </div>
    )
}