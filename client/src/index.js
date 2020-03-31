import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={App} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='login' component={LoginPage} />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
