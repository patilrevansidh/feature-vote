import React from 'react';
import { TYPE } from '../../constants/stringConstant';
import GroupDetail from '../../../modules/groups/detailed';

const DetailedComponent = (props) => {
    let comp;
    if(TYPE.GROUPS) {
        comp = <GroupDetail id={props.id} />
    }
    return comp
};

export default DetailedComponent;