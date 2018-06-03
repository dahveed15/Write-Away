import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  // console.log('entry file');
  const root = document.getElementById('root');
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  //
  // } else {
  //   store = configureStore();
  // }
  // ReactDOM.render(<h1>Hi there</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});
