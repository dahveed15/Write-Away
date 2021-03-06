import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { createJournal } from '../../actions/journal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
    signUp: true,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    createJournal: (journal) => dispatch(createJournal(journal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
