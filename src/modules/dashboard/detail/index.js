import React, { Component } from 'react';
import { getFeatureDetails, deleteFeature } from '../../../common/service';
import {
    CardTitle, CardText, Button, CardColumns
} from 'reactstrap';
import { connect } from 'react-redux';


class FeatureDetails extends Component {
    state = {feature:{}}
    componentWillMount() {
        const feature = getFeatureDetails(this.props.match.params.featureId)
        this.setState({feature});
    }
    
    render() {
        const detail = this.state.feature.id 
                     ? <FeatureDetail 
                            onVote={this.handleVote.bind(this)} feature={this.state.feature}
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
        this.props.history.goBack();
        this.props.deleteFeature(id)
    }

    handleVote(id) {
    }

}

const FeatureDetail = (props) => {
    const deleteButton = localStorage.getItem('role') ? <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onDelete(props.feature.id)}}>Delete</Button> : ''
    const voteButton = props.feature.voted.includes(localStorage.getItem('user')) ? null : <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onVote(props.feature.id)}}>Vote</Button>
    const totalVotes = props.feature.voted.length ;

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

const mapDispatchToProps = (dispatch) =>({
    deleteFeature : (id)=>{ dispatch(deleteFeature(id))}
})

export default connect(null,mapDispatchToProps)(FeatureDetails);