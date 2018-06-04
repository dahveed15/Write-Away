import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const animationFadeIn = ['animated', 'fadeInUp'];
    const animationFadeOut = ['animated', 'fadeOutUp'];
    const animationAppear = ['animated', 'fadeIn'];
    const animationPulse = ['animated', 'pulse'];
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd animationend';

    const writeLess = document.getElementById('write-less');
    const rememberMore = document.getElementById('remember-more');
    const writeAway = document.getElementById('write-away');
    const journaling = document.getElementById('journaling');

    writeLess.classList.add(...animationFadeIn).addEventListener(animationEnd, function(event1) {
      writeLess.classList.remove(...animationFadeIn);
      writeLess.classList.add(...animationFadeOut);

      rememberMore.classList.add(...animationFadeIn).addEventListener(animationEnd, function(event2) {
        rememberMore.classList.remove(...animationFadeIn);
        rememberMore.classList.add(...animationFadeOut);

        writeAway.classList.add(...animationFadeIn).addEventListener(animationEnd, function(event3) {
          journaling.classList.add(...animationAppear).addEventListener(animationEnd, function(event4) {
            journaling.classList.remove(...animationAppear);
            journaling.classList.add(...animationPulse);
            event4.target.removeEventListener(event4.type, arguments.callee);
          });
          event3.target.removeEventListener(event3.type, arguments.callee);
        });
        event2.target.removeEventListener(event2.type, arguments.callee);
      });
      event1.target.removeEventListener(event1.type, arguments.callee);
    });
  }

  render() {
    return (
      <div>
        <section className="main-container">
          <section className="main">
            <section className="main-animation-container">
              <h1 id="write-less" className="main-headers">Write Less.</h1>
              <h1 id="remember-more" className="main-headers">Remember More.</h1>
              <h1 id="write-away" className="main-headers">Write Away.</h1>
              <h2 id="journaling">A low-commitment alternative to journaling</h2>
            </section>


            <div className="session-buttons-container">
              <a href="#" className="session-buttons">Go!</a>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Homepage;
