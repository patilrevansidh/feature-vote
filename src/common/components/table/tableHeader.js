import React from 'react';

const TableHeader = (props) => {
    const headers = props.headers.map((h)=>{
        return <th>{h}</th>
    })
    return (
        <thead>
            <tr>
                <th className="detail-col">Details</th>
                {headers}
            </tr>
        </thead>
    );
};

export default TableHeader;