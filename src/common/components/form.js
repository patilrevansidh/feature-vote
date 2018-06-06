import React from 'react';

const Form = (props) =>{
    return(
        <div className="main-content">
            <div className="main-content-inner">
                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="form-horizontal">
                                {props.children}                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;