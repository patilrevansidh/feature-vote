import React from 'react';
import { Link, withRouter} from 'react-router-dom';
const Sidebar = () => {
    return (
    <div id="sidebar" className="sidebar responsive ace-save-state" data-sidebar="true" data-sidebar-scroll="true" data-sidebar-hover="true">
        <ul className="nav nav-list" style={{top: 0}}>
            <li className="active">
                <Link to="/">
                    <i className="menu-icon fa fa-tachometer" />
                    <span className="menu-text"> Dashboard </span>
                </Link>
                <b className="arrow" />
            </li>
            <li className>
                <Link to="/users">
                    <i className="menu-icon fa fa-picture-o" />
                    <span className="menu-text"> Users </span>
                </Link>
                <b className="arrow" />
            </li>
        </ul>
    </div>

    );
};

export default withRouter(Sidebar);