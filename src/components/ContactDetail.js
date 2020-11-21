import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from '../components/Navbar';

export default class ContactDetail extends Component {
    render() {
        let data = this.props.location.aboutprops.data;
        return (
            <div>
                <Navbar title={"Contact-Book"} src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"} />
                <div className="container padtop">
                    <div className="row">
                        <div className="col-12">
                            <div className="h1">{data.firstName} {data.lastName}</div>
                            <hr />
                            <ul className="list-group">
                                <li className="list-group-item"><span className="h3">Phone : </span>{data.phone}</li>
                                <li className="list-group-item"><span className="h3">Email : </span>{data.email}</li>
                                <li className="list-group-item"><span className="h3">Address : </span>{data.address}</li>
                            </ul>
                            <br />
                        </div>
                    </div>
                    <Link to='/' type="button" className="btn btn-lg btn-block">Back</Link>
                </div>
            </div>
        )
    }
}
