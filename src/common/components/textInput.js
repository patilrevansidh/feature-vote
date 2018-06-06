import React from 'react';

const TextInput = (props) => {
    const styles = props.error ? 'form-group has-error' : 'form-group';
    return (
        <div className={styles}>
            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1">
                {props.label}
            </label>
            <div className="col-sm-6">
               <input type="text"
                    placeholder={props.placeholder}
                    className="col-xs-10 col-sm-6 form-control" 
                    onChange={(e)=>props.onChange(e)}/>
            </div>         
        </div>
    );
};

export default TextInput;