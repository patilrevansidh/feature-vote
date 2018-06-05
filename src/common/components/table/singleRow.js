import React from 'react';

const SingleRow = (props) => {
    const row = props.fields.map((f)=>
        <td>{props.data[f]}</td>
    )
    return (
        <tr>
            <td></td>
            {row}
        </tr>
    );
};

export default SingleRow;