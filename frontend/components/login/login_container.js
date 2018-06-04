import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from './login_form';
import { login } from  '../../actions/auth';
import {authErrors, isAuthenticated} from '../../reducers/index';

const Login = (props) => {
  if(props.isAuthenticated) {
    return (
      <Redirect to='/' />
    );
  }
    return (
      <div className="login-page">
        <LoginForm {...props}/>
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, username, password) => {
    dispatch(login(email, username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
