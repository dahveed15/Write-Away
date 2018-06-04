import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <footer className="footer-container">
          <footer className="footer">
            <a href="#contact" className="main-links">Contact</a>
          </footer>
        </footer>
      </div>
    );
  }
}

export default Footer;
