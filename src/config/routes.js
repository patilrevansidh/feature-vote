import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { HomeRoute, Dashboard, FeatureDetail } from '../modules/routesImport';
import { Provider } from 'react-redux';
import store from './store';


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
                    <PrivateRoutes exact path="/app" location= {location} component={Dashboard} />
                    <PrivateRoutes exact path="/app/features/:featureId" location= {location} component={FeatureDetail} />
                </Switch>
            </div>
        </Router>
    )
}

const App = (props) =>{
    return(
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

export default App;