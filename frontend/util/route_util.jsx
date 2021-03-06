import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';



const Auth = ({ component: Component, path, loggedIn }) => {
  return (
    <Route path={path} render={(props) => {
      if (loggedIn) {
        return (<Redirect to="/profile" />);
      } else {
        return (<Component {...props} />);
      }
    }} />
  );
};

const Protected = ({ component: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => {
      if (loggedIn) {
        return (<Component {...props} />);
      } else {
        return (<Redirect to="/" />);
      }
    }} />
  );
};

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser) }
  );
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
