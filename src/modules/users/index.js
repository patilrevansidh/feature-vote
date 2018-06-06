import React, { Component } from 'react';
import { apiService } from '../../common/service';
import stringConstant, { TYPE, HEADER, ACTIONS, FIELDS } from '../../common/constants/stringConstant';
import { Table, PageHeader } from '../../common/components/'

class Users extends Component {
    state = {users:[]}

    async componentWillMount() {
        try {
            const response = await apiService.fetchUsers();
            this.setState({users:response});
        } catch (error) {
            console.log("error fetch user",error)
        }
    }
    
    render() {
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="page-content">
                        <PageHeader onAddClick={()=>this.props.history.push("app/feature/new")} pageHeader="Features"/>
                        <Table
                            type={TYPE.USER}
                            // onDelete={this.handleDelete.bind(this)}
                            actions={ACTIONS.USER}
                            fields={FIELDS.USER}
                            headers = {HEADER.USER}
                            data={this.state.users ? this.state.users : [] } />                       
                    </div>
                </div>
            </div>
        );
    }

    handleDelete(id) {
        console.log("user to be deleted",id)
    }
}

export default Users;