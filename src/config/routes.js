import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { HomeRoute, Dashboard } from '../modules/routesImport';

const PrivateRoutes = (props) =>{
    return localStorage.getItem('isLoggedIn')
            ? <Route path={props.path} location= {props.location} component={props.component} />
            : <Redirect to="/" />
}

const Routes = (props) => {
    const {location} = window
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" location= {location} component={HomeRoute} />
                    <PrivateRoutes exact path="/app" 
                        location= {location} component={Dashboard} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;