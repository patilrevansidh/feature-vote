import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../../../common/components/logout';
import FeatureList from '../list/';
import { getFeatures, castVote } from '../../../common/service/';
import { withRouter } from 'react-router-dom';


class Userdashboard extends Component {
    
    componentWillMount() {
        this.props.getFeatures()
    }
    
    render() {
        return (
            <div className="container">
                <Logout logPut={()=>console.log("logged Out",this.props.history.goBack())}/> <br/>
                <FeatureList 
                    onVote = {this.handleVote.bind(this)}
                    features={this.props.features.features ? this.props.features.features : [] }/>
            </div>
        );
    }
    handleVote(id) {
        const user = localStorage.getItem('user');
        this.props.castVote(id,user)
    }
}
const mapStateToProps = (state) =>({
    features : state.featuresReducer
})

const mapDispatchToProps = (dispatch) =>({
    getFeatures : ()=>{ dispatch(getFeatures())},
    castVote : (id,user)=>{ dispatch( castVote(id, user) )}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Userdashboard));