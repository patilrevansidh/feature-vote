import React, { Component } from 'react';
import Logout from '../../../common/components/logout';
import { FIELDS, HEADER, ACTIONS,TYPE } from '../../../common/constants/stringConstant';
import { Sidebar, MainContainer, Header, PageHeader, Table } from '../../../common/components'
import { getFeatures, deleteFeature, castVote } from '../../../common/service/action';
import FeatureList from '../list/';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
// import { swalService } from '../../../common/service';

class Admindashboard extends Component {
    state = {features:[],filter:{}}
    
    componentWillMount(){ 
        this.fetchFeatures({})
    }

    fetchFeatures(body={}) {
        this.props.getFeatures(body)    
    }

    render() {
        return (            
            <div className="main-content">
                <div className="main-content-inner">
                    <div className="page-content">
                        <PageHeader add={true} onAddClick={()=>this.props.history.push("feature/new")} pageHeader="Features"/>
                        <div style={{margin:5}} className="pull-right">
                            <b className="text-primary">Order</b>
                            &nbsp;
                            <select onChange={this.handleFilterChange.bind(this)} >
                                <option value="">Clear</option>
                                <option value="newest">Newest First</option>
                                <option value="most">Most Voted</option>
                            </select>
                        </div>
                        <Table
                            type={TYPE.FEATURE}
                            onArchive={(id)=>console.log('onArchive',id)}
                            onDelete={this.handleDelete.bind(this)}
                            onDetails={(id)=>this.props.history.push(`/app/features/${id}`)}
                            actions={ACTIONS.FEATURE}
                            fields={FIELDS.FEATURE}
                            headers = {HEADER.FEATURE}
                            data={this.props.features.features ? this.props.features.features : [] } />                       
                    </div>
                </div>
             </div>
        );
    }

    handleFilterChange(e) {
        e.preventDefault()
        switch(e.target.value) {
            case 'newest':
                const newest = true
                this.fetchFeatures({newest})
                break;
            case 'most':
                const most = true
                this.fetchFeatures({most})
                break;
            default:
                this.fetchFeatures({})
                
        }
    }

    handleDelete(id) {
        this.props.deleteFeature(id)
    }

    handleVote(id) {
        this.props.castVote(id)
    }
}
const mapStateToProps = (state) =>({
    features : state.featuresReducer
})

const mapDispatchToProps = (dispatch) =>({
    getFeatures : (filter)=>{ dispatch(getFeatures(filter))},
    deleteFeature : (id)=>{ dispatch( deleteFeature(id) )},
    castVote : (id)=>{ dispatch( castVote(id) )}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Admindashboard));