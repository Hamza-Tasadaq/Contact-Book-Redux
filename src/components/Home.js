import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import Contacts from './Contacts';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container text-center'>
                    {this.props.contacts.length > 0 ? <div> <Contacts /> </div> : <div>
                        <div className="h1">Welcome To The Contact Book</div>
                        <h3>By <span>Hamza Tasadaq</span></h3>
                    </div>}
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

export default (connect(mapStateToProps, null))(Home)