import React, { Component } from 'react';
import { login } from '../../common/service';
import { withRouter, Redirect } from "react-router-dom";

class AppHome extends Component {
    state={username:'',password:'',isLoggedIn:false,error:undefined}
    
    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to="/app" />
        }
        return (
            <Login
                error={this.state.error}
                onLogin={this.handleLogin.bind(this)}
                onTextChange={this.handleTextChange.bind(this)}/>
        );
    }

    handleLogin() {        
        const response = login(this.state);
        if(response.success) {
            this.setState({isLoggedIn:true});
            localStorage.setItem('isLoggedIn',true);
            // this.props.history.push("app");
            console.log("logged In");
        }else {
            this.setState({error:response.message});
        }
    }

    handleTextChange(value,name) {
        this.setState({[name]: value});
    }
}

const Login = (props) => {
    return(
        <div className="container">
            <div className="form">
                <form className="login-form">
                <br/><br/>
                    <input onChange={(e)=>props.onTextChange(e.target.value,'username')} type="text" placeholder="username"/><br/><br/>
                    <input onChange={(e)=>props.onTextChange(e.target.value,'password')} type="password" placeholder="password"/><br/><br/>
                    <button onClick={(e)=>{e.preventDefault();props.onLogin()}}>login</button>
                </form>
                {props.error}
            </div>
        </div>
    )
}

export default AppHome; 