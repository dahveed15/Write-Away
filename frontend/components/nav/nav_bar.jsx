import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (currentUser) {
      return (
        <div>
          <nav className="nav-container">
            <nav className="nav">
              <h3><a href="#" className="main-links">Write Away</a></h3>
            </nav>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav class="nav-container">
            <nav class="nav">
              <h3><a href="#" class="main-links">Write Away</a></h3>
              <section class="nav-items">
                <a href="#" class="main-links nav-items-links">Dashboard</a>
                <a href="#" class="main-links nav-items-links">Feed</a>
                <a href="#" class="main-links nav-items-links">Statistics</a>
              </section>
              <section class="nav-dropdown">
                <div class="nav-dropdown-email">demouser@gmail.com <img src="./images-temp/chevron-down.png" class="icons" /></div>
                <div class="nav-dropdown-content">
                  <a href="#" class="nav-dropdown-elements main-links">Settings</a>
                  <a href="#" class="nav-dropdown-elements main-links">Log Out</a>
                </div>
              </section>
            </nav>
          </nav>
        </div>
      );
    }
  }
}

export default NavBar;
