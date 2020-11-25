import React from 'react';
// import logo from '../../assets/images/drlogo.png'
import {
    Link,
} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: "#00467c"}} className="navbar navbar-expand-lg navbar-dark ">
            <Link className="navbar-brand" to="/">
                <div className="row">
                    <h4 style={{ marginLeft: "20px"}}>Daniel D. Rojas</h4>
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};
export default NavBar;