import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Input from './Input';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createContact } from '../store/action/index';

class CreateContact extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createContact = () => {
        let history = this.props.history;
        this.props.createContact(this.state, history);
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: ""
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="h3 text-center form-heading">
                        Add Contact
                    </div>
                    <form onSubmit={() => this.createContact}>
                        <Input placeholder='First Name' name='firstName' value={this.state.firstName} handleChange={(e) => this.handleChange(e)} />
                        <Input placeholder='Last Name' name='lastName' value={this.state.lastName} handleChange={(e) => this.handleChange(e)} />
                        <Input placeholder='Phone' name='phone' value={this.state.phone} handleChange={(e) => this.handleChange(e)} />
                        <Input placeholder='Email' name='email' value={this.state.email} handleChange={(e) => this.handleChange(e)} />
                        <Input placeholder='Address' name='address' value={this.state.address} handleChange={(e) => this.handleChange(e)} />
                        <Link type="submit" onClick={() => this.createContact()} className="btn  btn-lg btn-block">Create Contact</Link>
                        {/* to='/contacts' */}
                    </form>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => (
    {
        createContact: (newContact, history) => { dispatch(createContact(newContact, history)) }
    }
)
export default (connect(null, mapDispatchToProps))(CreateContact)