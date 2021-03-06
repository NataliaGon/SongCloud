import './assets/styles/reset.css';
import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import Routes from './components/routes/routes';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';



ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.querySelector('#root')
    );