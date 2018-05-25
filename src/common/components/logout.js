import React from 'react';

const LogOutButton = (props) => {
    return (
        <button onClick={(e)=>{e.preventDefault();localStorage.clear()}}>
            Log Out
        </button>
    )
}

export default LogOutButton;