import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";
import profile from "../img/profile.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to={"/dashboard"} className="navbar-brand" href="#"> 
                    <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Explore<span>ASEAN</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <img src={profile} alt="profile" width="30" height="24" className="profileImg d-flex" />
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Profile
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">
                                <Link className="nav-link" to="">My Profile</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link className="nav-link" to="/">Logout</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
