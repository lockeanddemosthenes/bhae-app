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
    getCrest,
    getCrestDesc, getWepTooltip, getEqpType, getUnitEqpName
} from "../functions/Calculations.js";

const AbilitiesData = require('../props/abilities.json');
const CombatArtsData = require('../props/combat_arts.json');
const UnitsData = require('../props/unitsTemp.json');

function useShareableState() {
    const [unit1, setUnit1] = useState("Edelgard");
    const [unit2, setUnit2] = useState("Edelgard");
    return {
        unit1,
        setUnit1,
        unit2,
        setUnit2
    }
}

function Settings() {
    const { unit1, setUnit1, unit2, setUnit2 } = useBetween(useShareableState);

    function handleUnit1(e) {
        setUnit1(e.name);
    }

    function handleUnit2(e) {
        setUnit2(e.name);
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

            <button id="changeWpnBtn">Change Weapon</button>
            <br/>
            <br />
            <ResultDisplay />
        </div>
    );
}

function ResultDisplay() {
    const { unit1, unit2 } = useBetween(useShareableState);

    let unit1Tip = "<b>" + unit1 + "</b>" + "<br/>Lv 13 Thief",
        unit2Tip = "<b>" + unit2 + "</b>" + "<br/>Lv 16 Pegasus Rider",
        unit1WepName = getUnitWepName(unit1),
        unit1WepType = getWepType(unit1WepName),
        unit2WepName = getUnitWepName(unit2),
        unit2WepType = getWepType(unit2WepName);

    let unit1Crest = getCrest(unit1),
        unit2Crest = getCrest(unit2),
        unit1CrestDesc = getCrestDesc(unit1),
        unit2CrestDesc = getCrestDesc(unit2),
        unit1WepTip = getWepTooltip(unit1WepName),
        unit2WepTip = getWepTooltip(unit2WepName),
        unit1EqpIcon = getEqpType(getUnitEqpName(unit1)),
        unit2EqpIcon = getEqpType(getUnitEqpName(unit2));

    let abilityName = AbilitiesData[1].name,
        abilityIcon = AbilitiesData[1].icon,
        abilityDesc = "<b>" + abilityName + "</b><br />" + AbilitiesData[1].desc;

    let unit1Mt = getFightMtStr(unit1, unit2),
        unit2Mt = getFightMtStr(unit2, unit1),
        unit1Hit = getFightHit(unit1, unit2),
        unit2Hit = getFightHit(unit2, unit1),
        unit1Crit = getFightCrit(unit1, unit2),
        unit2Crit = getFightCrit(unit2, unit1),
        unit1CritMt = getFightCritMt(unit1, unit2),
        unit2CritMt = getFightCritMt(unit2, unit1);

    return (
        <div className="Results">
            <div className="Participant1">
                <div className="UnitIconContainer">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/img/portrait/' + unit1 + '.png'} className="unit-portrait" alt={unit1} data-tip={unit1Tip}/>
                    </div>
                    <div className="cwe-icons">
                        <img src={process.env.PUBLIC_URL + '/img/crest/' + unit1Crest + '.png'} className="crest-icon" alt={abilityName} data-tip={unit1CrestDesc}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/wep/' + unit1WepType + '.png'} className="wep-icon" alt={unit1WepName} data-tip={unit1WepTip}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/eqp/' + unit1EqpIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
                    </div>
                </div>
                <br />

            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <br />*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <br />*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            {/*    <img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
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
                        <img src={process.env.PUBLIC_URL + '/img/crest/' + unit2Crest + '.png'} className="crest-icon" alt={abilityName} data-tip={unit2CrestDesc}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/wep/' + unit2WepType + '.png'} className="wep-icon" alt={unit2WepName} data-tip={unit2WepTip}/>
                        <br />
                        <img src={process.env.PUBLIC_URL + '/img/eqp/' + unit2EqpIcon + '.png'} className="eqp-icon" alt={abilityName} data-tip="equipment"/>
                    </div>
                </div>
                <br />

                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<br />*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<br />*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
                {/*<img src={process.env.PUBLIC_URL + '/img/abilities/' + abilityIcon + '.png'} className="ability-icon" alt={abilityName} data-tip={abilityDesc}/>*/}
            </div>

            <ReactTooltip className="toolTip" html={true} data-multine={true}/>
        </div>
    );
}

export default Settings;
