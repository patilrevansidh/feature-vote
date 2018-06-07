import React from 'react';

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

const CommentWidgetHeader = (props) =>{
    return(
        <div className="widget-header">
            <h4 className="widget-title lighter smaller">
                <i className="ace-icon fa fa-comment blue" />
                Comments
            </h4>
        </div>
    )
}
const Comment = (props) =>{
    return(
        <div className="itemdiv dialogdiv">
            <div className="body">
            <div className="name">
                <p className="left-align">{props.username}</p>
            </div>
            <div className="text left-align">{props.comment}</div>
            </div>
        </div>
    )
}

const CommentBox = (props) =>{
    return(
        <form>
            <div className="form-actions">
            <div className="input-group">
                <input value={props.comment} onChange={(e)=>props.onChange(e.target.value,'comment')} placeholder="Type your message here ..." type="text" className="form-control" name="message" />
                <span className="input-group-btn">
                <button onClick={(e)=>{e.preventDefault();props.onCommentPress()}} className="btn btn-sm btn-info no-radius" type="button">
                    <i className="ace-icon fa fa-share" />
                    Send
                </button>
                </span>
            </div>
            </div>
      </form>
    )
}

export default Comments;