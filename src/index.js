import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/style.css';
// import ResultDisplay from './components/ResultDisplay';
import Settings from './components/Settings';

ReactDOM.render(
    <React.StrictMode>
        <Settings />
        {/*<ResultDisplay />*/}
    </React.StrictMode>,
    document.getElementById('battle-settings')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ResultDisplay />
//   </React.StrictMode>,
//   document.getElementById('battle-outcome')
// );