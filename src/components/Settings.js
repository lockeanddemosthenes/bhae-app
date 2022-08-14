import Select from "react-select";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import { useBetween } from "use-between";
import {
    getUnitWepName,
    getWepType,
    getUnitStats,
    getFightMt,
    getFightMtStr,
    getFightHit,
    getFightCrit,
    getFightCritMt,
    getCrestName,
    getCrestDesc,
    getWepTooltip,
    getEqpType,
    getUnitEqpName,
    getAbilityArray,
    getAbilityDesc,
    getAbilityIcon,
    getCombatArtInd,
    getCombatArtMag,
    getLvClass,
    getEqpDesc
} from "../functions/Calculations.js";

const AbilitiesData = require('../props/abilities.json');
const CombatArtsData = require('../props/combat_arts.json');
const UnitsData = require('../props/unitsTemp.json');

function useShareableState() {
    const [unit1, setUnit1] = useState("Edelgard");
    const [unit2, setUnit2] = useState("Edelgard");
    const [combatArt, setCombatArt] = useState("None");
    return {
        unit1,
        setUnit1,
        unit2,
        setUnit2,
        combatArt,
        setCombatArt
    }
}

function Settings() {
    const { unit1, setUnit1, unit2, setUnit2, combatArt, setCombatArt } = useBetween(useShareableState);

    function handleUnit1(e) {
        setUnit1(e.name);
    }

    function handleUnit2(e) {
        setUnit2(e.name);
    }

    function handleCombatArt(e) {
        setCombatArt(e.name);
    }

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
                        onChange={handleUnit1}
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
                        onChange={handleUnit2}
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
                        options={CombatArtsData}
                        defaultValue={CombatArtsData[0].options[0]}
                        getOptionLabel={(option) => `${option.name}`}
                        onChange={handleCombatArt}
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

            <button id="changeWpnBtn">Change Weapon</button>
            <br/>
            <br/>
            <ResultDisplay />
        </div>
    );
}

function ResultDisplay() {
    const { unit1, unit2, combatArt } = useBetween(useShareableState);

    let unit1WepName = getUnitWepName(unit1),
        unit2WepName = getUnitWepName(unit2),
        unit1EqpName = getUnitEqpName(unit1),
        unit2EqpName = getUnitEqpName(unit2),
        unit1LvClass = getLvClass(unit1),
        unit2LvClass = getLvClass(unit2),
        unit1Crest = getCrestName(unit1),
        unit2Crest = getCrestName(unit2),
        unit1CrestDesc = getCrestDesc(unit1),
        unit2CrestDesc = getCrestDesc(unit2);

    let unit1WepTip = getWepTooltip(unit1WepName),
        unit2WepTip = getWepTooltip(unit2WepName),
        unit1WepType = getWepType(unit1WepName),
        unit2WepType = getWepType(unit2WepName),
        unit1EqpIcon = getEqpType(unit1EqpName),
        unit2EqpIcon = getEqpType(unit2EqpName),
        unit1EqpTip = "<b>" + unit1EqpName + "</b><br />" + getEqpDesc(unit1EqpName),
        unit2EqpTip = "<b>" + unit2EqpName + "</b><br />" + getEqpDesc(unit2EqpName);

    let abilityArrayUnit1 = getAbilityArray(unit1),
        abilityArrayUnit2 = getAbilityArray(unit2);

    let unit1Mt = getFightMtStr(unit1, unit2, combatArt),
        unit2Mt = getFightMtStr(unit2, unit1, "None"),
        unit1Hit = getFightHit(unit1, unit2, combatArt),
        unit2Hit = getFightHit(unit2, unit1, "None"),
        unit1Crit = getFightCrit(unit1, unit2, combatArt),
        unit2Crit = getFightCrit(unit2, unit1, "None"),
        unit1CritMt = getFightCritMt(unit1, unit2, combatArt),
        unit2CritMt = getFightCritMt(unit2, unit1, "None");

    let unit1Tip = "<b>" + unit1 + "</b>" + "<br/>" + unit1LvClass,
        unit2Tip = "<b>" + unit2 + "</b>" + "<br/>" + unit2LvClass;

    return (
        <div className="Results">
            <div className="Participant1">
                <div className="UnitIconContainer">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/img/portrait/' + unit1 + '.png'} className="unit-portrait" alt={unit1} data-tip={unit1Tip}/>
                    </div>
                    <div className="cwe-icons">
                        <img src={process.env.PUBLIC_URL + '/img/crest/' + unit1Crest + '.png'} className="crest-icon" alt={unit1Crest} data-tip={unit1CrestDesc}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/wep/' + unit1WepType + '.png'} className="wep-icon" alt={unit1WepName} data-tip={unit1WepTip}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/eqp/' + unit1EqpIcon + '.png'} className="eqp-icon" alt={unit1EqpName} data-tip={unit1EqpTip}/>
                    </div>
                </div>
                <br />

                <div className="UnitAbilityContainer">
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 0) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 0)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 1) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 1)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 2) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 2)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 3) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 3)}/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 4) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 4)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 5) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 5)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 6) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 6)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 7) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 7)}/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 8) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 8)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 9) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 9)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 10) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 10)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit1, 11) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit1, 11)}/>
                </div>
            </div>

            <div className="Calculations">
                <p><b>{unit1}</b> attacks <b>{unit2}</b> with <b>{unit1WepName}</b>!</p>
                <table>
                    <tr>
                        <th></th>
                        <th><b>{unit1}</b></th>
                        <th><b>{unit2}</b></th>
                    </tr>

                    <tr>
                        <td><b>Mt</b></td>
                        <td>{unit1Mt}</td>
                        <td>{unit2Mt}</td>
                    </tr>

                    <tr>
                        <td><b>Hit</b></td>
                        <td>{unit1Hit}</td>
                        <td>{unit2Hit}</td>
                    </tr>

                    <tr>
                        <td><b>Crit</b></td>
                        <td>{unit1Crit}</td>
                        <td>{unit2Crit}</td>
                    </tr>

                    <tr>
                        <td><b>Crit Mt</b></td>
                        <td>{unit1CritMt}</td>
                        <td>{unit2CritMt}</td>
                    </tr>
                </table>
            </div>

            <div className="Participant2">
                <div className="UnitIconContainer">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/img/portrait/' + unit2 + '.png'} className="unit-portrait" alt={unit2} data-tip={unit2Tip}/>
                    </div>
                    <div className="cwe-icons">
                        <img src={process.env.PUBLIC_URL + '/img/crest/' + unit2Crest + '.png'} className="crest-icon" alt={unit2Crest} data-tip={unit2CrestDesc}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/wep/' + unit2WepType + '.png'} className="wep-icon" alt={unit2WepName} data-tip={unit2WepTip}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/eqp/' + unit2EqpIcon + '.png'} className="eqp-icon" alt={unit2EqpName} data-tip={unit2EqpTip}/>
                    </div>
                </div>
                <br />

                <div className="UnitAbilityContainer">
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 0) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 0)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 1) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 1)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 2) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 2)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 3) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 3)}/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 4) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 4)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 5) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 5)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 6) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 6)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 7) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 7)}/>
                    <br />
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 8) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 8)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 9) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 9)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 10) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 10)}/>
                    <img src={process.env.PUBLIC_URL + '/img/abilities/' + getAbilityIcon(abilityArrayUnit2, 11) + '.png'} className="ability-icon" alt="ability-icon" data-tip={getAbilityDesc(abilityArrayUnit2, 11)}/>
                </div>
            </div>

            <ReactTooltip className="toolTip" html={true} data-multine={true}/>
        </div>
    );
}

export default Settings;
