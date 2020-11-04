import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// permet de rooter les pages par defaut il n'y en a qu'une
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
