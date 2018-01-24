import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootRoute from './page/Router.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootRoute />, document.getElementById('root'));
registerServiceWorker();
