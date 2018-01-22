import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './page/markdown/demo.js'
import registerServiceWorker from './registerServiceWorker';

if (typeof window !== 'undefined') {
    ReactDOM.render(<Demo />, document.getElementById('root'))
}
registerServiceWorker();
