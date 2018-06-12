import React from 'react';
import FeatureComment from '../../features/comments';
import { STORAGE_KEYS } from '../../../common/constants/stringConstant';
import {CommentWidgetHeader} from '../../features/comments/commentComponent';

const FeatureDetail = (props) => {
    const content = props.loader ? <div>Loading</div> : <Detail {...props} feature={props.feature}/>
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
    const voted_people = props.feature.voted_people ? props.feature.voted_people.split(',') : []
    const user = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DETAILS))
    const isVoted = voted_people.includes(`${user.id}`)
    return(
        <React.Fragment>
            <div className="alert alert-block alert-success">
                {props.feature.title}
            </div>            
            <div className="row">
                <p className="widget-main padding-6 no-padding-left no-padding-right col-sm-6 col-xs-12">
                    <i className="ace-icon fa fa-quote-left" style={{margin:5}} />
                        {props.feature.description}
                    <i className="ace-icon fa fa-quote-right" style={{margin:5}}/>
                </p>     
                <div className="infobox infobox-green col-sm-6 col-xs-12">
                    <div className="infobox-icon">
                        <i className="ace-icon fa fa-thumbs-up" />
                    </div>
                    <div className="infobox-data">
                        <span className="infobox-data-number">{props.feature.vote}</span>
                        <div className="infobox-content">Total Votes</div>
                    </div>
                </div>
                <VoteButton onVotePress={()=>props.onVotePress(props.feature.id)} voted={isVoted}/>
            </div>
            <div className="hr hr32 hr-dotted"></div>
            <FeatureComment {...props} comments={props.feature.comments}/>
            <VottingDetails {...props}/>
        </React.Fragment>
    )
}
const VottingDetails = (props)=>{
    const voted = props.feature && Array.isArray(props.feature.voted_users) 
                    ? props.feature.voted_users.map(m=><div>{m.username}</div>)
                    : null;
    const non_voted = props.feature && Array.isArray(props.feature.non_voted_people) 
                    ? props.feature.non_voted_people.map(m=><div>{m.username}</div>)
                    : null;
    return(
        <div className="col-sm-6 col-xs-12">
              <div className="col-sm-12 col-xs-12">
                <div className="widget-box">        
                    <div className="widget-header">
                        <p className="widget-title">Voted</p>
                    </div>
                    {voted}                       
                </div>
              </div>
              <div className="col-sm-12 col-xs-12">
                <div className="widget-box">
                    <div className="widget-header">
                        <p className="widget-title">
                         Non Voted
                        </p>
                    </div>
                    {non_voted}
                </div>
               </div>
        </div>
    )
}

const VoteButton = (props) => {
    const color = props.voted ? 'success' : 'danger';
    const label = props.voted ? 'Voted' : 'Hit to Vote';
    const status = props.voted ? 'disabled' : '';
    return(
        <a href="#" onClick={(e)=>{e.preventDefault();props.onVotePress()}} className={`btn btn-${color} ${status}`}>
            <i className={`fa fa-thumbs-up bigger-300`} />
            {label}
        </a>
    )
}


export default FeatureDetail;