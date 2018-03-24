import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/w3.css';
import './css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
