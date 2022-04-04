import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { Nav, Item, Button} from "react-bootstrap";


export default function header() {
    return (
        <div className="Header">

        <>
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link> <Link to="/home">My Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" ><Link to="/packs">Packs</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" ><Link to="/kits">Kits</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
                <Nav.Item className="justify-content-end">
                    <Nav.Link eventKey="link-2" ><Link to="/my-account">Welcome, Player</Link></Nav.Link>
                </Nav.Item>
            </Nav>   
            </>
        </div>
    );
}
