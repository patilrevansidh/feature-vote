import React from 'react';
import { STORAGE_KEYS,TYPE } from '../../constants/stringConstant';

const SingleRow = (props) => {
    const rowData = props.fields.map((f)=>
        <td>{props.data[f]}</td>
    )
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DETAILS))
    const archive = props.type == TYPE.FEATURE 
                    ? <button onClick={(e)=>props.onArchive(props.data.id)} className="btn btn-xs btn-warning">
                            <i className="ace-icon fa fa-archive bigger-120" />
                      </button>
                    : null
    const actions = user.role == "admin" && props.actions
                  ? <React.Fragment>
                        {archive}
                        <button className="btn btn-xs btn-danger" onClick={(e)=>props.onDelete(props.data.id)}>
                            <i className="ace-icon fa fa-trash bigger-120" />
                        </button>
                    </React.Fragment>
                  : null
    return (
        <React.Fragment>
             <tr>
                {rowData}
                <td>
                    <div className='hidden-sm hidden-xs btn-group'>                    
                        {actions}
                        <button className="btn btn-xs btn-success" onClick={(e)=>props.onDetails(props.data.id)}>
                            <i className="ace-icon fa fa-eye bigger-120" />
                        </button>
                    </div>
                </td>
            </tr>
        </React.Fragment>       
    );
};

export default SingleRow;