import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

const GroupSelect = (props) => {
    const styles = props.error ? 'form-group has-error' : 'form-group';
    const myData = [{value:'One',selected:true},{value:'Two'}];

    return (
        <div className={styles}>
            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1">
                {props.label}
            </label>
            <div className="col-sm-6">
                <Multiselect data={myData} onChange={(e)=>console.log("multiselect",e)} />
            </div>
        </div>
    );
};

export default GroupSelect;