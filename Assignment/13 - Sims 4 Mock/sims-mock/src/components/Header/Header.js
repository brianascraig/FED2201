import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


export default function header() {
    return (
        <div className="Header">
            <nav className="nav">
                <div className="nav-item">
                    <Link to="/">My Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/packs">My Home</Link>
                </div>
                <div className="nav-item sideNav-item ">
                    <Link to="/kits">My Home</Link>
                </div>
            </nav>
            <div className="nav-item sideNav-item ">
                <Link to="/my-account">Welcome, Player</Link>
            </div> 
        </div>
    );
}
