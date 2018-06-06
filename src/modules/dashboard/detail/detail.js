import React from 'react';

const FeatureDetail = (props) => {
    const content = props.loader ? <div>Loading</div> : <Detail feature={props.feature}/>
    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <div className="row">
                                {content} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Detail = (props) =>{
    return(
        <React.Fragment>
            <h1 className="left-align">{props.feature.title}</h1>
            <p className="lead left-align">{props.feature.description}
            </p>
            <div className="row">         
                <h3 className="left-align">Votes</h3>
                <p className="left-align">{props.feature.vote}</p>
            </div> 
        </React.Fragment>
    )
}

const Comments = (props) => {
    return (
        <div>

        </div>
    );
};

export default FeatureDetail;