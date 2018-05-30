import React, { Component } from 'react';
// import { deleteFeature } from '../../../common/service';
import {
    CardTitle, CardText, Button, CardColumns
} from 'reactstrap';
import { connect } from 'react-redux';
import { getFeatureDetails, castVote, deleteFeature } from '../../../common/service/action';


class FeatureDetails extends Component {
    state = {feature:{}}
    componentWillMount() {
        this.props.getFeatureDetails(this.props.match.params.featureId)
        // const feature = this.props.feature.features.filter(f=>f.d !==this.props.match.params.featureId)[0]
        // this.setState({feature});
    }
    
    render() {
        console.log("feature detail",this.props)
        const detail = this.props.feature.featureDetail && this.props.feature.featureDetail.id
                     ? <FeatureDetail 
                            onVote={this.handleVote.bind(this)}
                            feature={this.props.feature.featureDetail}
                            onDelete={this.handleDelete.bind(this)}
                        /> 
                     : ''
        return (
            <div className="container">
                {detail}
            </div>
        );
    }

    handleDelete(id) {        
        this.props.deleteFeature(id,this.props.history)        
    }

    handleVote(id) {
        this.props.castVote(id)
    }

}

const FeatureDetail = (props) => {
    const user = JSON.parse(localStorage.getItem('userDetails'))
    const voteButton = props.feature.voted_people.includes(`${user.id}`)
                    ? null 
                    : <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onVote(props.feature.id)}}>Vote</Button>
    const deleteButton = user.role === "admin" ? <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onDelete(props.feature.id)}}>Delete</Button> : null;
    const totalVotes = props.feature.vote ;

    return(
        <div>
            <CardTitle>{props.feature.title}</CardTitle>
            <CardText>{props.feature.description}</CardText>  
            <div>Votes: {totalVotes}</div>      
                {voteButton}
                {deleteButton} 
        </div>
    )
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