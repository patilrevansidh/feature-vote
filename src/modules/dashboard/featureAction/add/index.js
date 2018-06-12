import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeatureForm from './form';
import { addFeature } from '../../../../common/service/action';
import _ from 'lodash';
import { ERROR } from '../../../../common/constants/stringConstant';

class AddFeature extends Component {
    state = { title: '', description: '', invited: [], group_ids: [], error: undefined }
    render() {
        return (
                <FeatureForm 
                error={this.state.error}
                invited={this.state.invited}
                onUserSelection={this.handleUserSelection.bind(this)}
                onTextChange={this.handleTextChange.bind(this)} 
                onAdd={this.handleAddFeature.bind(this)}
            />
        );
    }
    isValidForm() {
        const { title, description, invited } = this.state
        const titleError = title && title.trim() ? null : ERROR.FEATURE_TITLE;
        const descriptionError = description && description.trim() ? null : ERROR.FEATURE_DESCRIPTION;
        const invitedError = invited && invited.length > 0 ? null : ERROR.GRP_MEMBER;
        const error = { titleError, descriptionError, invitedError }
        this.setState({error});
        return !titleError && !descriptionError && !invitedError
    }

    handleAddFeature() {
      if(this.isValidForm()) {
        const invited = this.state.invited.map((m)=>m.id).filter(d=>d)
        const body = {...this.state,invited}
        this.props.addFeature(body, this.props.history)
      }
    }

    handleTextChange(value, name) {
        this.setState({[name]: value});
    }

    handleUserSelection(user) {
        const index = _.findIndex(this.state.invited,(u)=>u.id == user.id);
        if(index == -1) {
            this.setState({invited: [...this.state.invited, user]});
        }else {
            const arr = this.state.invited.filter(f=>f.id != user.id)
            this.setState({invited: arr});
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFeature : (body, history) => dispatch(addFeature(body, history))
})


export default connect(null,mapDispatchToProps)(withRouter(AddFeature));
