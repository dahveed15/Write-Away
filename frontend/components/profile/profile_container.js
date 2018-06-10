import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {

  console.log(state);
  return {
    currentUser: state.entities.users[state.session.id].name
  };
};


export default connect(mapStateToProps, null)(Profile);
