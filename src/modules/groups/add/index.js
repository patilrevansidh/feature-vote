import React, { Component } from 'react';
import { withRouter }  from 'react-router-dom';
import Form from './form';
import _ from 'lodash';
import apiService from '../../../common/service/apiService';

class AddGroup extends Component {
    state = {selected:[],name:''}
    render() {
        return (
            <Form            
                selected={this.state.selected}
                onUserSelection={this.handleUserSelection.bind(this)}
                onAdd={this.handleSubmitGroup.bind(this)}
                onCancel={()=>this.props.history.goBack()}
                onTextChange={(value,name)=>this.setState({[name]: value})}
            />
        );
    }

    async handleSubmitGroup() {
        const ids = this.state.selected.map(m=>m.id)
        const body = {
            user_ids : ids.toString(),
            name : this.state.name
        }
        try {
            const response = await apiService.postGroup(body)
            this.props.history.goBack()
        } catch (error) {
            
        }
    }
    handleUserSelection(user) {
        const index = _.findIndex(this.state.selected,(u)=>u.id == user.id);
        if(index == -1) {
            this.setState({selected: [...this.state.selected, user]});
        }else {
            const arr = this.state.selected.filter(f=>f.id != user.id)
            this.setState({selected: arr});
        }
    }
}

export default withRouter(AddGroup);