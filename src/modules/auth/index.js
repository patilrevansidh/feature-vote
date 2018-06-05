import React, { Component } from 'react';
import { login, apiService } from '../../common/service';
import GoogleLogin from 'react-google-login';
import { withRouter, Redirect } from "react-router-dom";
import stringConstant from '../../common/constants/stringConstant';

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

    async handleLogin() {        
        try {
            const response =await apiService.login(this.state);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('userDetails',JSON.stringify(response.data.data))
            this.setState({isLoggedIn:response.success});
        } catch (error) {
            console.log("error in login",error)   
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



{/* <GoogleLogin
clientId={stringConstant.GOOGLE_CLIENT_ID}
buttonText="Login"
onSuccess={(response)=>console.log("reponse",response)}
onFailure={(response)=>console.log("reponse",response)}
/> */}