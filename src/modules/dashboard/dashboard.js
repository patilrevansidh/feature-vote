import React, { Component } from 'react';
import { PageHeader } from '../../common/components';
import apiService from '../../common/service/apiService';

class Dashboard extends Component {
    state = {dashboard:{}}
    
    async componentWillMount() {
        try {
            const response = await apiService.fetchDashboardInfo()
            this.setState({dashboard:response.data.data});
        } catch (error) {
            console.log("fetch dashboard info",error)
        }
    }
    
    render() {
        if(Object.keys(this.state.dashboard).length > 0) {
            return <DashboardDetail dashboard={this.state.dashboard}/>
        }
        return (
            <div>
                Loading
            </div>
        );
    }
}
const DashboardDetail = (props) =>{
    return(
        <div className="main-content">
            <div className="main-content-inner">
                <div className="page-content">
                    <PageHeader pageHeader="Dashboard"/>
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <div className="row">
                                <Field color={'green'} field={"Users"} value={props.dashboard.users} />
                                <Field color={'blue'} field={"Features"} value={props.dashboard.total_feature} />
                                <Field color={'red'} field={"Votes"} value={props.dashboard.total_vote} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Field = (props) => {
    return(
        <div style={{margin:10}} className={`infobox infobox-${props.color} infobox-small infobox-dark`}>
            <div className="infobox-data">
                <div className="infobox-content">{props.field}</div>
                <div className="infobox-content">{props.value}</div>
            </div>
      </div>      
    )
}

export default Dashboard;