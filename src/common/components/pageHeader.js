import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const  PageHeader = (props) =>{
        // let path = null;
        // switch(this.props.type) {
        //     case stringConstant.USERS_TYPE :
        //         path='/app/users/new';
        //         break;

        //     case stringConstant.ALBUMS_TYPE :
        //         path='/app/albums/new';
        //         break;
            
        //     case stringConstant.EVENTS_TYPE :
        //         path='/app/events/new';
        //         break;
        //     case stringConstant.SCHOOL_TYPE:
        //         path='app/schools'
        //         break;
        //     default :
        //         path='/app/notices/new';
        //         break;
        // }

        // const plusBtn = this.props.type!== stringConstant.SCHOOL_TYPE ? 
        //                                         ( <Link className="btn btn-success" to={path}>
        //                                               <i className="fa fa-plus" />
        //                                         </Link>)
        //                                         :
        //                                         <Link className="btn btn-success" onClick={(e)=>{this.props.addSchool(e)}}>
        //                                               <i className="fa fa-plus" />
        //                                         </Link>;
        return (
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-6" style={{paddingTop:10}}>
                        <h1 style={{textAlign:'left'}}>{props.pageHeader}</h1>
                    </div>
                    <div className="col-sm-6">
                        <div className="pull-right">                           
                            <a className="btn btn-success" onClick={(e)=>{e.preventDefault();props.onAddClick()}}>
                                 <i className="fa fa-plus" />
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        );
}  

export default  PageHeader;