import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
const Header = (props) =>{ 
    return (
        <div id="navbar" className="navbar navbar-default  ace-save-state">
            <div className="navbar-container ace-save-state" id="navbar-container">
            <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span className="sr-only">Toggle sidebar</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <div className="navbar-header pull-left">
                 <Link to="/" className="navbar-brand">
                    <small>                   
                    Katalyst Tech
                    </small>
                </Link>
            </div>
            <Profile/>
            </div>
        </div>
    );
}

const Profile = (props) => {
    const user = JSON.parse(localStorage.getItem('userDetails'))
    return(
        <div className="navbar-buttons navbar-header pull-right" role="navigation">
                <ul className="nav ace-nav">
                <li className="light-blue dropdown-modal">
                    <Link data-toggle="dropdown" to="/" className="dropdown-toggle">
                        <img alt="Users's Photo" className="nav-user-photo fa-user-circle" src={require('../user.png')} />
                        <span className="user-info">
                            <small>Welcome </small>
                            {user.username}
                        </span>
                        <i className="ace-icon fa fa-caret-down" />
                    </Link>
                    <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                    <li className="divider" />
                    <li>
                        <Link to="/" onClick={(e)=>{localStorage.clear()}} >
                        <i className="ace-icon fa fa-sign-out" />
                        Sign out
                        </Link>
                    </li>
                    </ul>
                </li>
                </ul>
        </div>
    )
}

export default withRouter(Header)