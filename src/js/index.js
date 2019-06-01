// Global app controller
// IMPORT THE CSS FILE into the main app JS or else the CSS file wont generate when npm build is run
import '../sass/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));