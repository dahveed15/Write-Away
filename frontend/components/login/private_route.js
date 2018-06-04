import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as reducers from '../../reducers/index';


const PrivateRoute = (props) => {
  console.log('in private_route6', props);
  let Component = props.component;
  return (
    <Route  render={(arr) => {
      console.log('what is arr?', arr);
      return (
        props.isAuthenticated ? (
          <Component {...arr} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
      );
    }} />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
