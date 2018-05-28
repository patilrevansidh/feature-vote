import React from 'react';
import { Link } from 'react-router-dom';

const LogOutButton = (props) => {
    return (
        <button onClick={(e)=>{e.preventDefault();localStorage.clear()}}>
            <Link to="/">            
                    Log Out
            </Link>
        </button>
    )
}

export default LogOutButton;