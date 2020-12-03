import React from 'react'
import {
    Link
    } from "react-router-dom"

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <div className="container text-center">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" exact="true">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Clasificados">clasificados</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav