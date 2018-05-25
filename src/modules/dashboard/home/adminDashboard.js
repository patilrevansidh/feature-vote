import React, { Component } from 'react';
import Logout from '../../../common/components/logout';
import { getFeatures } from '../../../common/service';
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
                <FeatureList features={this.props.features.features ? this.props.features.features : [] }/>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    features : state.featuresReducer
})

const mapDispatchToProps = (dispatch) =>({
    getFeatures : ()=>{ dispatch(getFeatures())}
})
export default connect(mapStateToProps,mapDispatchToProps)(Admindashboard);