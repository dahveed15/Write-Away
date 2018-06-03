import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';


const App = (store) => {
  // console.log('App file');
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};
export default App;
