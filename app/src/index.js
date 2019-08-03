import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset';
import './styles/global';
import App from './App';
// import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


const startApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  // serviceWorker.unregister();
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}