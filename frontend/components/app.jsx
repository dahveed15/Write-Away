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
import NavBarContainer from './new_nav/nav_bar_container';
// import HomepageContainer from './homepage/homepage_container';
// import Footer from './nav/footer';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import JournalContainer from './journal/journal_index_container';
import JournalShowContainer from './journal/journal_show_container';
import Profile from './profile/profile_container';

const App = (store) => {
  // <ProtectedRoute exact path="/profile" component={Profile} />
  return (
    <div className="container">

      <Route path="/" component={NavBarContainer} />
      <Switch>
        <AuthRoute exact path="/" component={SignupContainer} />
        <ProtectedRoute exact path="/profile" component={JournalContainer} />
        <ProtectedRoute path='/journal/:journalId/entries' component={JournalShowContainer} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};
export default App;

// <Route exact path="/" component={SignupContainer} />

// <Route path="/" component={NavBarContainer} />
// <Switch>
//   <AuthRoute exact path="/" component={HomepageContainer} />
// </Switch>
// <Route path="/" component={Footer} />
