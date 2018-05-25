import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { HomeRoute, FirstPrivateRoute } from '../modules/routesImport';

const PrivateRoutes = (props) =>{
    return localStorage.getItem('isLoggedIn')
            ? <Route path={props.path} component={props.component} />
            : <Redirect to="/" />
}

const Routes = (props) => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomeRoute} />
                <PrivateRoutes exact path="/app" component={FirstPrivateRoute} />
            </Switch>
        </Router>
    )
}

export default Routes;