import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { STORAGE_KEYS } from '../constants/stringConstant';


const item = [
    { name: 'Dashboard', icon: 'menu-icon fa fa-tachometer', path: "app" },
    { name: 'Users', icon: 'menu-icon fa fa-user-plus', path: "/app/users" },
    { name: 'Groups', icon: 'menu-icon fa fa-users', path: "/app/groups" },
]
const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DETAILS));
    const adminItems = user && user.role === 'admin' || user && user.role === 'super'
                     ? item.map((m)=>{
                            return <SidebarItem name={m.name} icon={m.icon} path={m.path} />
                        }) 
                     : null
    return (
    <div id="sidebar" className="sidebar responsive ace-save-state" data-sidebar="true" data-sidebar-scroll="true" data-sidebar-hover="true">
        <ul className="nav nav-list" style={{top: 0}}>
            { adminItems }
            <SidebarItem name='Features' icon='menu-icon fa fa-code' path="/app/features"/>,
        </ul>
    </div>

    );
};
const SidebarItem = (props) =>{
    return(
        <li className>
                <Link to={`${props.path}`}>
                    <i className={`menu-icon ${props.icon}`} />
                    <span className="menu-text"> {props.name} </span>
                </Link>
                <b className="arrow" />
        </li>
    )
}
export default withRouter(Sidebar);
// fa fa-file-code-o