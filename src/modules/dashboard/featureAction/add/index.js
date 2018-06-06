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
                onUserSelection={this.handleUserSelection.bind(this)}
                onTextChange={this.handleTextChange.bind(this)} 
                onAdd={this.handleAddFeature.bind(this)}
            />
        );
    }

    handleAddFeature() {
        // this.props.addFeature(this.state,this.props.history)
        console.log("state",this.state)
    }

    handleTextChange(value, name) {
        this.setState({[name]: value});
    }

    handleUserSelection(user) {
        if(user.selected === false ) {
            const arr = this.state.invited.filter(f=>f != user.id)
            this.setState({invited: arr});
        }else {
            const arr= [...this.state.invited, user.id]
            this.setState({invited: arr});
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFeature : (body, history) => dispatch(addFeature(body, history))
})


export default connect(null,mapDispatchToProps)(withRouter(AddFeature));
