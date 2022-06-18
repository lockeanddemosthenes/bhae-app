import ReactTooltip from "react-tooltip";
import '../static/css/App.css';

const abilitiesData = require('../props/abilities.json');

let participant1 = "Yuri",
    participant2 = "Finley";

let p1Tip = "<b>" + participant1 + "</b>" + "<br/>Lv 13 Thief",
    p2Tip = "<b>" + participant2 + "</b>" + "<br/>Lv 16 Pegasus Rider";

let abilityName = abilitiesData[1].name,
    abilityIcon = abilitiesData[1].icon,
    abilityDesc = "<b>" + abilityName + "</b><br />" + abilitiesData[1].desc;

function ResultDisplay() {
  return (
    <div className="Results">
        <div className="Participant1">
            <div className="UnitIconContainer">
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/sprite/' + participant1 + '.png'} className="unit-icon" alt={participant1} data-tip={p1Tip}/>
                </div>
                <div className="cwe-icons">
                    <img src={process.env.PUBLIC_URL + '/img/crest/aubin.png'} className="crest-icon" alt={abilityName} data-tip="Aubin (2): yeah"/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/wep/swordd.png'} className="wep-icon" alt={abilityName} data-tip="funny sword"/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
                </div>
            </div>
            <br />

            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <br />
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <br />
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
        </div>

        <div className="Calculations">
            <p>{participant1} attacks {participant2} with WEAPON LOL!</p>
        </div>

        <div className="Participant2">
            <div className="UnitIconContainer">
                <div>
                    <img src={process.env.PUBLIC_URL + '/img/sprite/' + participant2 + '.png'} className="unit-icon" alt={participant2} data-tip={p2Tip}/>
                </div>
                <div className="cwe-icons">
                    <img src={process.env.PUBLIC_URL + '/img/crest/none.png'} className="crest-icon" alt={abilityName} data-tip="CRESTLESS BUFFOON"/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/wep/lanced.png'} className="wep-icon" alt={abilityName} data-tip="uhhh funny lance"/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
                </div>
            </div>
            <br />

            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <br />
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <br />
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
            <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
        </div>

        <ReactTooltip className="toolTip" html={true} />
    </div>
  );
}

export default ResultDisplay;
