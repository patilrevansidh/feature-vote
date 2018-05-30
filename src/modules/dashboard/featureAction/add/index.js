import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeatureForm from './form';
import { addFeature } from '../../../../common/service/action';

class AddFeature extends Component {
    state = {title:'',description:''}
    render() {
        return (
            <FeatureForm 
                onTextChange={this.handleTextChange.bind(this)} 
                onAdd={this.handleAddFeature.bind(this)}
            />
        );
    }
    handleAddFeature() {
        this.props.addFeature(this.state,this.props.history)
    }
    handleTextChange(value, name) {
        this.setState({[name]: value});
    }
}

const mapDispatchToProps = (dispatch) => ({
    addFeature : (body, history) => dispatch(addFeature(body, history))
})


export default connect(null,mapDispatchToProps)(withRouter(AddFeature));