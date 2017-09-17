import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostPage from './page/post/PostPage.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostPage />, document.getElementById('root'));
registerServiceWorker();
