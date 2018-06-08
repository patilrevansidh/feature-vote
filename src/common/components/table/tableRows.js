import React from 'react';
import SingleRow from './singleRow';
import DetailedComponent from './detailedComponent';

const TableRows = (props) => {
    console.log("showdetails",props)
    const rows = props.data.length ==0 
                ? <NoDataFound spanValue={4}/>
                : props.data.map((m)=>{ 
                    const arr =[]
                    const single = <SingleRow  {...props} data={m}/>
                    arr.push(single)
                    if(props.showDetail && props.showDetail.includes(m.id)) {
                        const detail = <DetailedComponent id={m.id}/>;
                        arr.push(detail);
                    }
                    return arr
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