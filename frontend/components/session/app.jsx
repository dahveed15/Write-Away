import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Refresh
} from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import HomepageContainer from './homepage/homepage_container';
import Footer from './nav/footer';
import LoginContainer from './session/form_container';

const App = (store) => {
  return (
    <div className="container">
      <Route path="/" component={HomepageContainer} />
    </div>
  );
};
export default App;


// <Route path="/" component={NavBarContainer} />
// <Switch>
//   <AuthRoute exact path="/" component={HomepageContainer} />
// </Switch>
// <Route path="/" component={Footer} />
