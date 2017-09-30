import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostPage from './page/post/PostPage.js';
import Home from './page/Home.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
