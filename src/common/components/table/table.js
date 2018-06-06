import React from 'react';
import TableHeader from './tableHeader';
import TableRows from './tableRows';

const Table = (props) => {
    return (
        <table className="table  table-bordered table-hover">
            <TableHeader headers={props.headers}/>
            <TableRows {...props} />
        </table>
    );
};

export default Table;