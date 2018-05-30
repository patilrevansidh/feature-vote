import React from 'react';

const NewFeatureForm = (props) => {
    return (
        <div className="container">
            <div className="form">
                <form className="login-form">
                <br/><br/>
                    <input onChange={(e)=>props.onTextChange(e.target.value,'title')} type="text" placeholder="title"/><br/><br/>
                    <input onChange={(e)=>props.onTextChange(e.target.value,'description')} type="text" placeholder="description"/><br/><br/>
                    <button onClick={(e)=>{e.preventDefault();props.onAdd()}}>Add Feature</button>
                </form>                
            </div>
        </div>
    );
};

export default NewFeatureForm;