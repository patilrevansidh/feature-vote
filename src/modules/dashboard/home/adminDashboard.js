import React, { Component } from 'react';
import Logout from '../../../common/components/logout';
import { getFeatures, deleteFeature } from '../../../common/service';
import FeatureList from '../list/';
import { connect } from 'react-redux';

class Admindashboard extends Component {
    state = {features:[]}
    
    componentWillMount(){ 
        this.props.getFeatures()    
    }

    render() {
        return (
            <div className="container">
                <Logout/> <br/>
                <FeatureList 
                    onVote = {this.handleVote.bind(this)}
                    onDelete = {this.handleDelete.bind(this)}
                    features={this.props.features.features ? this.props.features.features : [] }/>
            </div>
        );
    }

    handleDelete(id) {
        this.props.deleteFeature(id)
    }

    handleVote(id) {

    }
}
const mapStateToProps = (state) =>({
    features : state.featuresReducer
})

const mapDispatchToProps = (dispatch) =>({
    getFeatures : ()=>{ dispatch(getFeatures())},
    deleteFeature : (id)=>{ dispatch(deleteFeature(id))}
})
export default connect(mapStateToProps,mapDispatchToProps)(Admindashboard);