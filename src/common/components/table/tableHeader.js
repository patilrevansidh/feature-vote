import React from 'react';

const TableHeader = (props) => {
    const headers = props.headers.map((h)=>{
        return <th>{h}</th>
    })
    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
};

export default TableHeader;