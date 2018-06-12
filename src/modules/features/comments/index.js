import React from 'react';
import { CommentWidgetHeader, CommentBox, Comment } from './commentComponent';

const Comments = (props) => {
    const commentsList = Array.isArray(props.comments) && props.comments.length >  0  
                       ?  props.comments.map((m)=><Comment {...m}/>)
                       : <div className="itemdiv dialogdiv">
                            <div className="body">
                                <div className="text">No Comments</div>
                            </div>
                        </div>
    return (
        <div className="col-sm-6">
            <div className="widget-box">
                <CommentWidgetHeader/>
                <div className="widget-body">
                    <div className="widget-main no-padding">
                        <div className="dialogs ace-scroll">
                            <div className="scroll-track" style={{display: 'none', height: 300}}>
                                <div className="scroll-bar" style={{height: 236, top: 0}} />
                                </div>
                            <div className="scroll-content">
                                 {commentsList}        
                            </div>
                        </div>
                        <CommentBox comment={props.comment} onChange={props.onChange} onCommentPress={props.onCommentPress}/>
                    </div>{/* /.widget-main */}
                </div>{/* /.widget-body */}
            </div>{/* /.widget-box */}
        </div>
    );
};


export default Comments;