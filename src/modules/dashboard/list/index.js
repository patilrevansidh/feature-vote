import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const  FeatureList = (props) => {
    const list = props.features.map((feature)=><Feature feature={feature}  />)
    return (
        <CardColumns>
            {list}
        </CardColumns>
    );
}

const Feature = (props) => {
    return (
        <Card>            
            <CardBody>
                <Link to={`app/features/${props.feature.id}`}><CardTitle>{props.feature.title}</CardTitle></Link>
                <CardText>{props.feature.description}</CardText>
                <Button onClick={(e)=>{e.preventDefault();props.onVote(props.feature.id)}}>Vote</Button>
            </CardBody>
        </Card>
    )
}

export default FeatureList;