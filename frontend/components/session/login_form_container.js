import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
  }
);

const mapDispatchToProps = dispatch => ({
    processForm: (email) => dispatch(login(email)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
