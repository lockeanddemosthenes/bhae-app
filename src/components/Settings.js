import Select from "react-select";
import ReactTooltip from "react-tooltip";
import {useState} from "react";
import { useBetween } from "use-between";

const CombatArtsData = require('../props/combat_arts.json');
const UnitsData = require('../props/unitsTemp.json');

function useShareableState() {
    const [unit1, setUnit1] = useState("Hubert");
    const [unit2, setUnit2] = useState("Edelgard");
    return {
        unit1,
        setUnit1,
        unit2,
        setUnit2
    }
}

/**
 * @param unit
 * @returns {number[]}
 *
 * The most unfortunate for(for(if()) garbage I've had to write. possibly clean up someday
 * O(h*u), with u being number of units per house (~15 max) and h being number of houses (5)
 *
 */
function getUnitInd(unit) {
    for(let houseIndex=0; houseIndex < UnitsData.length; houseIndex++) {
        for(let unitIndex=0; unitIndex < UnitsData.length; unitIndex++) {
            if(UnitsData[houseIndex].options[unitIndex].name === unit) {
                return [houseIndex, unitIndex];
            }
        }
    }
}

function getUnitWep(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].weapon;
}

function Settings() {
    const { unit1, setUnit1, unit2, setUnit2 } = useBetween(useShareableState);

    function handleUnit1(e) {
        setUnit1(e.target.value);
    }

    function handleUnit2(e) {
        setUnit2(e.target.value);
    }

    console.log(getUnitWep(unit1));

    return (
        <div className="Settings">
            <h3>Settings</h3>
            <form action="">
                <label htmlFor='participant1'>Participant 1: </label>
                <br />
                <div style={{width: '242px', margin: '0 2.5rem 2rem 2.5rem'}}>
                    <Select //menuIsOpen = {true}
                        id='participant1'
                        options={UnitsData}
                        defaultValue={UnitsData[0].options[0]}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.name}
                        theme={(theme) => ({
                            ...theme,
                            baseUnit: 50,
                            borderRadius: 4,
                            borderColor: '#64C89A',
                            boxShadow: 0,
                            colors: {
                                ...theme.colors,
                                text: 'black',

                                neutral0: '#64C89A',
                                neutral5: '#64C89A',
                                neutral10: '#8FF2B6',
                                neutral20: '#8FF2B6',
                                neutral30: '#64C89A',
                                neutral40: '#8FF2B6',
                                neutral50: 'black',
                                neutral60: '#8FF2B6',
                                neutral80: '#8FF2B6',

                                primary: '#8FF2B6', //color of option, after selected
                                primary25: '#8FF2B6', //color while hovering, before selected
                                primary50: '#8FF2B6', //color while clicking, before selected
                                primary75: 'black'
                            },
                        })}
                    />
                </div>

                <label htmlFor='participant2'>Participant 2: </label>
                <br />
                <div style={{width: '242px', margin: '0 2.5rem 2rem 2.5rem'}}>
                    <Select //menuIsOpen = {true}
                        id='participant2'
                        options={UnitsData}
                        defaultValue={UnitsData[0].options[0]}
                        getOptionLabel={(option) => `${option.name}`}
                        theme={(theme) => ({
                            ...theme,
                            baseUnit: 50,
                            borderRadius: 4,
                            borderColor: '#64C89A',
                            boxShadow: 0,
                            colors: {
                                ...theme.colors,
                                text: 'black',

                                neutral0: '#64C89A',
                                neutral5: '#64C89A',
                                neutral10: '#8FF2B6',
                                neutral20: '#8FF2B6',
                                neutral30: '#64C89A',
                                neutral40: '#8FF2B6',
                                neutral50: 'black',
                                neutral60: '#8FF2B6',
                                neutral80: '#8FF2B6',

                                primary: '#8FF2B6', //color of option, after selected
                                primary25: '#8FF2B6', //color while hovering, before selected
                                primary50: '#8FF2B6', //color while clicking, before selected
                                primary75: 'black'
                            },
                        })}
                    /></div>

                <label htmlFor='combatArt'>Combat Art: </label>
                <br />
                <div style={{width: '242px', margin: '0 2.5rem 2rem 2.5rem'}}>
                    <Select //menuIsOpen = {true}
                        isClearable
                        options={CombatArtsData}
                        getOptionLabel={(option) => `${option.name}`}
                        theme={(theme) => ({
                            ...theme,
                            baseUnit: 50,
                            borderRadius: 4,
                            borderColor: '#64C89A',
                            boxShadow: 0,
                            colors: {
                                ...theme.colors,
                                text: 'black',

                                neutral0: '#64C89A',
                                neutral5: '#64C89A',
                                neutral10: '#8FF2B6',
                                neutral20: '#8FF2B6',
                                neutral30: '#64C89A',
                                neutral40: '#8FF2B6',
                                neutral50: 'black',
                                neutral60: '#8FF2B6',
                                neutral80: '#8FF2B6',

                                primary: '#8FF2B6', //color of option, after selected
                                primary25: '#8FF2B6', //color while hovering, before selected
                                primary50: '#8FF2B6', //color while clicking, before selected
                                primary75: 'black'
                            },
                        })}
                /></div>
                <br />
            </form>

            <button id="fightBtn">Fight!</button>
            <button id="changeWpnBtn">Change Weapon</button>
            <br/>
        </div>
    );
}

// function ResultDisplay(props) {
//     return (
//         <div className="Results">
//             <div className="Participant1">
//                 <div className="UnitIconContainer">
//                     <div>
//                         <img src={process.env.PUBLIC_URL + '/img/sprite/' + props.unit1.name + '.png'} className="unit-icon" alt={participant1} data-tip={p1Tip}/>
//                     </div>
//                     <div className="cwe-icons">
//                         <img src={process.env.PUBLIC_URL + '/img/crest/aubin.png'} className="crest-icon" alt={abilityName} data-tip="Aubin (2): yeah"/>
//                         <br />
//                         <img src={process.env.PUBLIC_URL + '/img/wep/swordd.png'} className="wep-icon" alt={abilityName} data-tip="funny sword"/>
//                         <br />
//                         <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
//                     </div>
//                 </div>
//                 <br />
//
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <br />
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <br />
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//             </div>
//
//             <div className="Calculations">
//                 <p>{participant1} attacks {participant2} with WEAPON LOL!</p>
//             </div>
//
//             <div className="Participant2">
//                 <div className="UnitIconContainer">
//                     <div>
//                         <img src={process.env.PUBLIC_URL + '/img/sprite/' + participant2 + '.png'} className="unit-icon" alt={participant2} data-tip={p2Tip}/>
//                     </div>
//                     <div className="cwe-icons">
//                         <img src={process.env.PUBLIC_URL + '/img/crest/none.png'} className="crest-icon" alt={abilityName} data-tip="CRESTLESS BUFFOON"/>
//                         <br />
//                         <img src={process.env.PUBLIC_URL + '/img/wep/lanced.png'} className="wep-icon" alt={abilityName} data-tip="uhhh funny lance"/>
//                         <br />
//                         <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
//                     </div>
//                 </div>
//                 <br />
//
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <br />
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <br />
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//                 <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>
//             </div>
//
//             <ReactTooltip className="toolTip" html={true} />
//         </div>
//     );
// }

export default Settings;
