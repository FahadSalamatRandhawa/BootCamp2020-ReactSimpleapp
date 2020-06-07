import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './hello.css';

ReactDOM.render(
  <div><App name='Grandma' language='Mexican' time={12}/> <ul><li className='forlisting'>Done with Props and Div Tah from the App.js file</li></ul>
  <hr/>I did things a bit differently to try and test my understanding
  </div>,
  document.getElementById('base')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
