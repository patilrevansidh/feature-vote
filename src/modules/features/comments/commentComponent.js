import React from 'react';

export const CommentWidgetHeader = (props) =>{
    return(
        <div className="widget-header">
            <h4 className="widget-title lighter smaller">
                <i className="ace-icon fa fa-comment blue" />
                Comments
            </h4>
        </div>
    )
}
export const Comment = (props) =>{
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

export const CommentBox = (props) =>{
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