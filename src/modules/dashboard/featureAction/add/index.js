import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeatureForm from './form';
import { addFeature } from '../../../../common/service/action';

class AddFeature extends Component {
    state = { title: '', description: '', invited:[],group_ids:[]}
    render() {
        return (
                <FeatureForm 
                invited={this.state.invited}
                onUserSelection={this.handleUserSelection.bind(this)}
                onTextChange={this.handleTextChange.bind(this)} 
                onAdd={this.handleAddFeature.bind(this)}
            />
        );
    }

    handleAddFeature() {
        const invited = this.state.invited.map((m)=>m.id).filter(d=>d)
        const body = {...this.state,invited}
        this.props.addFeature(body, this.props.history)
        console.log("state",body)
    }

    handleTextChange(value, name) {
        this.setState({[name]: value});
    }

    handleUserSelection(user) {
        if(user.selected === false ) {
            const arr = this.state.invited.filter(f=>f.id != user.id)
            this.setState({invited: arr});
        }else {
            const arr= [...this.state.invited, user]
            this.setState({invited: arr});
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFeature : (body, history) => dispatch(addFeature(body, history))
})


export default connect(null,mapDispatchToProps)(withRouter(AddFeature));
