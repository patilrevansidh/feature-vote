import React, { Component } from 'react';
import {getFeatureDetails} from '../../../common/service';
import {
    CardTitle, CardText, Button, CardColumns
} from 'reactstrap';


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

    }

    handleVote(id) {
        
    }
}

const FeatureDetail = (props) => {
    const deleteButton = localStorage.getItem('role') ? <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onDelete(props.feature.id)}}>Delete</Button> : ''
    return(
        <div>
            <CardTitle>{props.feature.title}</CardTitle>
            <CardText>{props.feature.description}</CardText>        
                <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onVote(props.feature.id)}}>Vote</Button>
                {deleteButton}
        </div>
    )
}

export default FeatureDetails;