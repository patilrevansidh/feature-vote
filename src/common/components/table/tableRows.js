import React from 'react';
import SingleRow from './singleRow';
const TableRows = (props) => {
    const rows = props.data.length ==0 
                ? <NoDataFound spanValue={4}/>
                : props.data.map((m)=>{
                    return <SingleRow  {...props} data={m}/>
                })
    return (
        <tbody>
            {rows}
        </tbody>
    );
};

const NoDataFound = (props) => {
    return (        
        <tr>
            <td rowSpan={props.spanValue}></td>            
        </tr>
    )
}

export default TableRows;