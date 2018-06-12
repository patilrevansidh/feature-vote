import React, { Component } from 'react';

const  Login = (props) =>{ 
  
  const usernameError = props.error && props.error.usernameError ? 'form-group has-error' : 'form-group';
  const passwordError = props.error && props.error.passwordError ? 'form-group has-error' : 'form-group';

    return (
      <div className="main-container">
        <div className="main-content">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="login-container">
                <div className="center">
                  <h1>
                    <span className="blue">KATALYST</span>
                  </h1>
                  <h4 className="blue" id="id-company-text">© Company Name</h4>
                </div>
                <div className="space-6" />
                <div className="position-relative">
                  <div id="login-box" className="login-box visible widget-box no-border">
                    <div className="widget-body">
                      <div className="widget-main">
                        <h4 className="header blue lighter bigger">
                          <i className="ace-icon fa fa-coffee green" />
                          Please Enter Your Information
                        </h4>
                        <div className="space-6" />
                        <form>
                          <fieldset>
                            <label className={`block clearfix ${usernameError}`}>
                              <span className="block input-icon input-icon-right">
                                <input type="text" className="form-control" onChange={(e)=>props.onTextChange(e.target.value,'username')} placeholder="Username" />
                                <i className="ace-icon fa fa-user" />
                                {props.error && props.error.usernameError}
                              </span>
                            </label>
                            <label className={`block clearfix ${passwordError}`}>
                              <span className="block input-icon input-icon-right">
                                <input type="password" className="form-control" placeholder="Password" onChange={(e)=>props.onTextChange(e.target.value,'password')} />
                                <i className="ace-icon fa fa-lock" />
                              </span>
                            </label>
                            <div className="space" />
                            <div className="clearfix">
                              <label className="inline">
                                <input type="checkbox" className="ace" />
                                <span className="lbl"> Remember Me</span>
                              </label>
                              <button onClick={(e)=>{props.onLogin()}} type="button" className="width-35 pull-right btn btn-sm btn-primary">
                                <i className="ace-icon fa fa-key" />
                                <span className="bigger-110">Login</span>
                              </button>
                            </div>
                            <div className="space-4" />
                          </fieldset>
                        </form>
                        <div className="space-6" />
                      </div>{/* /.widget-main */}
                    </div>{/* /.widget-body */}
                  </div>{/* /.login-box */}
                  {/* /.forgot-box */}
                  {/* /.signup-box */}
                </div>{/* /.position-relative */}        
              </div>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.main-content */}
      </div>
    );
}

export default Login;