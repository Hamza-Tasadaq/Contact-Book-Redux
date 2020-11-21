import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            Contact Book
              </div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link to='/create-contact' type="button" className="btn navbar-brand">Create Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
