import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/style.css';
import ResultDisplay from './ResultDisplay';
import Settings from './components/settings/Settings';

ReactDOM.render(
    <React.StrictMode>
        <Settings />
    </React.StrictMode>,
    document.getElementById('battle-settings')
);

ReactDOM.render(
  <React.StrictMode>
    <ResultDisplay />
  </React.StrictMode>,
  document.getElementById('battle-outcome')
);