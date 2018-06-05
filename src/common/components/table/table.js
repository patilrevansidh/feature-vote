import React from 'react';
import TableHeader from './tableHeader';
import TableRows from './tableRows';

const Table = (props) => {
    return (
        <table className="table  table-bordered table-hover">
            <TableHeader headers={props.headers}/>
            <TableRows data={props.data} fields={props.fields} />
        </table>
    );
};

export default Table;