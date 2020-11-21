import React, { Component } from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact,deleteAllContacts } from '../store/action/index';


class Contacts extends Component {
    render() {
        let contact = this.props.contacts;
        return (
            <div>
                {/* <Navbar /> */}
                <div className="container">
                    <div className="h3 text-center form-heading">
                        Your Contact's
                    </div>
                    <br />
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><Link data={value} to={{ pathname: `/contact/${value.firstName}-${value.lastName}`, aboutprops: { data: value } }}>{value.firstName}</Link></td>
                                        <td>{value.phone}</td>
                                        <td>{value.email}</td>
                                        <td><button onClick={() => this.props.deleteContact(index)} type="button" className="btn btn-sm">Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button onClick={()=>this.props.deleteAllContacts()} type="button" className="btn btn-lg btn-block">Delete All Contacts</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        deleteContact: (id) => { dispatch(deleteContact(id)) },
        deleteAllContacts:()=>{dispatch(deleteAllContacts())}
    }
)

export default (connect(mapStateToProps, mapDispatchToProps))(Contacts)