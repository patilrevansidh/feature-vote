import React, { Component } from 'react';
import { login, apiService } from '../../common/service';
import GoogleLogin from 'react-google-login';
import { withRouter, Redirect } from "react-router-dom";
import Form from './form';

class AppHome extends Component {
    state={ username:'',password:'', isLoggedIn: false, error: undefined }
    
    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to="/app" />
        }
        return (
            <Form
                error={this.state.error}
                onLogin={this.handleLogin.bind(this)}
                onTextChange={this.handleTextChange.bind(this)}/>
        );
    }
    isValidForm() {
        const usernameError = this.state.username.trim() ? undefined : 'Enter user name';
        const passwordError = this.state.password.trim() ? undefined : 'Enter user name';
        const error = { usernameError, passwordError }
        this.setState({error});
        return !usernameError && !passwordError
    }
    async handleLogin() {
       if(this.isValidForm()) {
        try {
            const response =await apiService.login(this.state);
            localStorage.setItem('userDetails',JSON.stringify(response.data.data))
            localStorage.setItem('isLoggedIn',true);
            this.setState({isLoggedIn:response.success});
        } catch (error) {
            console.log("error in login",error)   
        }
       }
    }

    handleTextChange(value,name) {
        this.setState({[name]: value});
    }
}

export default AppHome; 



{/* <GoogleLogin
clientId={stringConstant.GOOGLE_CLIENT_ID}
buttonText="Login"
onSuccess={(response)=>console.log("reponse",response)}
onFailure={(response)=>console.log("reponse",response)}
/> */}