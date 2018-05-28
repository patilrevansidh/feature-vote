import React from 'react';

const LogOutButton = (props) => {
    return (
        <button onClick={(e)=>{e.preventDefault();localStorage.clear();props.logPut()}}>
            Log Out
        </button>
    )
}

export default LogOutButton;