import ReactTooltip from "react-tooltip";
import logo from './logo.svg';
import yuri from './static/img/sprite/yuri_commoner.png';
import './static/css/App.css';

function ResultDisplay() {
  return (
    <div className="Results">
        <img src={logo} className="App-logo" alt="logo" /> <br/>
        <img src={yuri} data-for="main" className="unit-icon" alt="Yuri" data-tip="Yuri Leclerc (AW)<br/>Lv 13 Thief" data-iscapture="true"/>
        <p>
          Edit <code>src/ResultDisplay.js</code> and save to reload.
        </p>
        <p>
          woah...
        </p>

        <ReactTooltip
            id="main"
            multiline="true"
        />
    </div>
  );
}

export default ResultDisplay;
