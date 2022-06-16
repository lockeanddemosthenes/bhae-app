import ReactTooltip from "react-tooltip";
import './static/css/App.css';

const abilitiesData = require('./props/abilities.json'),
multilineTrue = true;

let participant1 = "yuri_commoner";

let abilityName = abilitiesData[1].name;
let abilityIcon = abilitiesData[1].icon;
let abilityDesc = "<b>" + abilityName + "</b><br />" + abilitiesData[1].desc;

function ResultDisplay() {
  return (
    <div className="Results">
        <div className="Participant1">
            <img src={process.env.PUBLIC_URL + '/img/sprite/' + participant1 + '.png'} data-class="unitInfo" className="unit-icon" alt="Yuri" data-tip="Yuri Leclerc (AW)<br/>Lv 13 Thief"/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} data-class="abilityInfo" className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
        </div>
        <ReactTooltip className="toolTip" html={true} />
    </div>
  );
}

export default ResultDisplay;
