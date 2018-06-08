import React, { Component} from 'react';
import apiService from '../../common/service/apiService';

export default class GroupDetailed extends Component {
    state = {group:undefined}
    
    async componentWillMount() {
        try {
            const response = await apiService.fetchGroupDetail(this.props.id);
            this.setState({group:response.data.data});
        } catch (error) {
            
        }
    }
    
    render() {
        const users = this.state.group && this.state.group.users.map((m)=>{
            return <div className="col-sm-3 col-xs-6">
                    <div className="hidden-480 label label-info label-xlg arrowed-in arrowed-in-right">
                            {m.username}
                    </div>
            </div>
        });

        const content = this.state.group == undefined 
                      ? <div>Loading</div>
                      :  <div className="col-xs-6 col-sm-6">
                            <div className="header blue lighter less-margin">{"Users"}</div>
                            {users}
                        </div>
        return (
            <tr className="detail-row open">
                <td colspan="8">
                    <div className="table-detail">
                        <div className="row">
                            {content}
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}