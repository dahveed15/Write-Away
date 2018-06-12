import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="nav-container">
        <img className="logo" src="assets/WriteAway.svg"></img>
        <h1>WRITE AWAY</h1>
        <Login logout={this.props.logout} loggedIn={this.props.loggedIn}/>
      </nav>
    );
  }
}

export default NavBar;
