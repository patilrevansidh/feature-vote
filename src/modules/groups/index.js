import React, { Component } from 'react';
import { apiService } from '../../common/service';
import { Table, PageHeader } from '../../common/components';
import stringConstant, { ACTIONS, HEADER, FIELDS, TYPE } from '../../common/constants/stringConstant';

class Groups extends Component {
    state = { groups: [] }

    async componentWillMount() {
        try {
            const response = await apiService.fetchGroups();
            this.setState({groups: response.data.data});
        } catch (error) {
            console.log("error fetch user",error)
        }
    }
    
    render() {
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="page-content">
                        <PageHeader add={true} onAddClick={()=>this.props.history.push("groups/new")} pageHeader="Groups"/>
                        <Table
                            type={TYPE.GROUPS}
                            // onDelete={this.handleDelete.bind(this)}
                            actions={ACTIONS.GROUPS}
                            fields={FIELDS.GROUPS}
                            headers = {HEADER.GROUPS}
                            data={this.state.groups ? this.state.groups : [] } />                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Groups;