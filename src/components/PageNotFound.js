import React, { Component } from 'react';
import {
    BrowserRouter as 
    Link
} from "react-router-dom";

export default class PageNotFound extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: "250px" }} className='h2 text-center' >
                    <div className='h3'>Page Not Found</div>
                    <Link to='/' className='btn'>Back To Home</Link>
                </div>
            </div>
        )
    }
}
