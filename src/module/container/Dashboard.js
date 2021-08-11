import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-dark static-top"
                    id="nav-background">
                    <p className="logo-color">A.D TRENDALL RESEARCH CENTRE <br />
                        FOR MEDITERRANEAN STUDIES</p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" activeClassName="active">
                            <NavLink to="/home" className="nav-item">
                                Home
                            </NavLink>
                            <NavLink className="nav-item" to="/research">
                                Research
                            </NavLink>
                            <NavLink className="nav-item" to="/aboutus">
                                About Us
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Dashboard;
