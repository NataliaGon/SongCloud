import 'normalize.css/normalize.css';
import './assets/styles/reset.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import Root from './components/Root';



import React from 'react';



ReactDOM.render(<Root />, document.querySelector('#root'));
function renderClient(RootComponent) {
  render(

    <RootComponent />,

    document.querySelector('#app'),

  );
}