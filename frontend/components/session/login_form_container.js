import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: 'login',

  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (email) => dispatch(login(email)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
