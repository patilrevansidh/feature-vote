import React, { Component } from 'react';
import { apiService } from '../../common/service';
import { Table, PageHeader } from '../../common/components';
import swal from 'sweetalert';
import stringConstant, { ACTIONS, HEADER, FIELDS, TYPE } from '../../common/constants/stringConstant';

class Groups extends Component {
    state = { groups: [], showDetail:[]}

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
                            showDetail={this.state.showDetail}
                            onDetails={this.handleShowDetails.bind(this)}
                            type={TYPE.GROUPS}
                            onDelete={this.handleDelete.bind(this)}
                            actions={ACTIONS.GROUPS}
                            fields={FIELDS.GROUPS}
                            headers = {HEADER.GROUPS}
                            data={this.state.groups ? this.state.groups : [] } />                       
                    </div>
                </div>
            </div>
        );
    }
    handleShowDetails(id) {
        if(this.state.showDetail.includes(id)) {
            this.setState({
                showDetail : this.state.showDetail.filter(f=>f !=id )
            });
        }else {
            this.setState({showDetail:[...this.state.showDetail,id]});
        }
    }
    async handleDelete(id) {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this feature!",
            icon: "warning",
            buttons: true,
            dangerMode: true, })
        if(willDelete) {                        
            const response = await apiService.deleteGroup(id)
            this.setState({groups:response.data.data});
            swal("Poof! Your feature has been deleted!", {icon: "success"});
        }else {
            throw Error
        }
    }
}

export default Groups;