import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar has-shadow is-primary">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <h1 className="title is-4">My App</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <Link to="/counter" className="navbar-item">
                            Counter
                        </Link>
                        <Link to="/animation" className="navbar-item">
                            3D Animation
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
