import React from 'react';


const FormButton = (props) =>{
    return(
        <div className="row push-down-2">
            <div className="col-sm-9">
                <p className="pull-right">
                    <button style={{margin:8}}
                        className="btn ll-btn btn-warning"
                        type="button"
                        onClick={(e)=>props.onCancel(e)}>
                        Cancel
                    </button>
                    <button
                        className="btn ll-btn btn-success"
                        type="button"
                        onClick={(e)=>props.onSubmit(e)}>
                        Submit
                    </button>
                </p>
                
            </div>
        </div>
    );
};

export default FormButton;