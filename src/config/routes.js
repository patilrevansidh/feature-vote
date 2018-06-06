import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { HomeRoute, Dashboard, FeatureDetail, NewFeature } from '../modules/routesImport';
import { Provider } from 'react-redux';
import store from './store';
import {Header, MainContainer, Sidebar} from '../common/components';


const PrivateRoutes = (props) =>{
    return localStorage.getItem('isLoggedIn')
            ?  <AppContent>
                    <Route path={props.path} location= {props.location} component={props.component} />
                </AppContent>
            : <Redirect to="/" />
}

const AppContent = (props) => {
    return(
        <div>
            <Header/>
            <div className="main-container ace-save-state" id="main-container">
                    <Sidebar/>
                    <div className="main-content">
                        <div className="main-content-inner">
                            <div className="page-content center">
                                {props.children}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

const Routes = (props) => {
    const {location} = window
    return(
        <Router>
            <Switch>
                <Route exact path="/" location= {location} component={HomeRoute} />
                <PrivateRoutes exact path="/app" location= {location} component={Dashboard} />
                <PrivateRoutes exact path="/app/features/:featureId" location= {location} component={FeatureDetail} />
                <PrivateRoutes exact path="/app/feature/new" location= {location} component={NewFeature} />
            </Switch>
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