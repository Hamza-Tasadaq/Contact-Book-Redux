import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';
import ContactDetail from './components/ContactDetail';
import PageNotFound from './components/PageNotFound';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/* <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="/create-contact" component={CreateContact} />
                        <Route path="/contact/:id" component={ContactDetail} />
                        <Route path="*" component={() => <h2>404 Not Found</h2>} /> */}

                        <Route exact path='/' component={Home} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/create-contact' component={CreateContact} />
                        <Route exact path='/contact/:id' component={ContactDetail} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
