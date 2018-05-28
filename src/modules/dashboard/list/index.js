import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const  FeatureList = (props) => {
    const list = props.features.map((feature)=><Feature onVote={props.onVote} onDelete={props.onDelete} feature={feature}  />)
    return (
        <CardColumns>
            {list}
        </CardColumns>
    );
}

const Feature = (props) => {
    const voteButton = props.feature.voted.includes(localStorage.getItem('user')) ? null : <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onVote(props.feature.id)}}>Vote</Button>
    const deleteButton = localStorage.getItem('role') === "admin" ? <Button style={{margin:5}} onClick={(e)=>{e.preventDefault();props.onDelete(props.feature.id)}}>Delete</Button> : null;
    const totalVotes = props.feature.voted.length ;
    return (
        <Card>            
            <CardBody>
                <Link to={`app/features/${props.feature.id}`}><CardTitle>{props.feature.title}</CardTitle></Link>
                <CardText>{props.feature.description}</CardText>
                <div>Votes: {totalVotes}</div>
                {voteButton}                
                {deleteButton}
            </CardBody>
        </Card>
    )
}

export default FeatureList;