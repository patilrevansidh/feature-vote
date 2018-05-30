import React, { Component } from 'react';
import Logout from '../../../common/components/logout';
import { getFeatures, deleteFeature, castVote } from '../../../common/service/action';
import FeatureList from '../list/';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';

class Admindashboard extends Component {
    state = {features:[]}
    
    componentWillMount(){ 
        this.props.getFeatures()    
    }

    render() {
        return (
            <div className="container">
                <Logout logPut={()=>console.log("logged Out")}/> <br/>
                <button style={{marginTop: 5, marginBottom: 5}} onClick={(e)=>{e.preventDefault();    this.props.history.push("app/feature/new");}}>
                            Add New Feature
                </button>
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
        this.props.castVote(id)
    }
}
const mapStateToProps = (state) =>({
    features : state.featuresReducer
})

const mapDispatchToProps = (dispatch) =>({
    getFeatures : ()=>{ dispatch(getFeatures())},
    deleteFeature : (id)=>{ dispatch( deleteFeature(id) )},
    castVote : (id)=>{ dispatch( castVote(id) )}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Admindashboard));