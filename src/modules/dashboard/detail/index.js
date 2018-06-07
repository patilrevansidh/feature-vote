import React, { Component } from 'react';
import Details from './detail.js';
import { connect } from 'react-redux';
import apiService from '../../../common/service/apiService';

import { getFeatureDetails, castVote, deleteFeature } from '../../../common/service/action';


class FeatureDetails extends Component {
    state = { feature: {}, loader: undefined, comment: ''}

    
    componentWillMount() {
        this.setState({loader:true});
    }

    async fetchDetail () {
        try {
            const response = await apiService.fetchFeatureDetail(this.props.match.params.featureId)
            this.setState({feature:response.data.data,loader:false});
        } catch (error) {
            this.setState({loader:false});
        }
    }
    
    componentDidMount() {
        this.fetchDetail()
    }
    
    render() {   
        return (
                <Details 
                    onVotePress={this.handleVote.bind(this)}
                    onChange={(text,name)=>this.setState({[name]:text})}
                    onCommentPress={this.handleCommentPress.bind(this)}
                    loader={this.state.loader}
                    comment={this.state.comment}
                    feature={this.state.feature}/>
        );
    }

    handleDelete(id) {        
        this.props.deleteFeature(id,this.props.history)        
    }

    async handleVote(id) {
        try {
            const response = await apiService.castVote(id)
            this.fetchDetail()
        } catch (error) {
            
        }
    }
    async handleCommentPress() {
        const id = this.props.match.params.featureId;
        try {
            const response = await apiService.postComment(id,this.state.comment)
            this.setState({feature:response.data.data,comment:''});
        } catch (error) {
            
        }
    }

}



const mapStateToProps = (state) => ({
    feature: state.featuresReducer
})


const mapDispatchToProps = (dispatch) =>({
    getFeatureDetails : (id)=>{ dispatch(getFeatureDetails(id))},
    deleteFeature : (id,history)=>{ dispatch(deleteFeature(id,history))},
    castVote : (id)=>{ dispatch(castVote(id))},

})
export default connect(mapStateToProps, mapDispatchToProps)(FeatureDetails);