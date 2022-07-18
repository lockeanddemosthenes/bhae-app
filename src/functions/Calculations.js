const UnitsData = require("../props/unitsTemp.json"),
    WepData = require("../props/weapons.json");

/**
 * @param unit
 * @returns {number[]}
 *
 * The second-most for(for(if()) garbage I've had to write. possibly clean up someday
 * O(h*u), with u being number of units per house (~15 max) and h being number of houses (5)
 *
 */
export function getUnitInd(unit) {
    for(let houseIndex=0; houseIndex < UnitsData.length; houseIndex++) {
        for(let unitIndex=0; unitIndex < UnitsData[houseIndex].options.length; unitIndex++) {
            if(UnitsData[houseIndex].options[unitIndex].name === unit) {
                return [houseIndex, unitIndex];
            }
        }
    }
}

export function getWepInd(wep) {
    for(let typeIndex=0; typeIndex < WepData.length; typeIndex++) {
        for(let wepIndex=0; wepIndex < WepData[typeIndex].options.length; wepIndex++) {
            if(WepData[typeIndex].options[wepIndex].name === wep) {
                return [typeIndex, wepIndex];
            }
        }
    }
}

export function getCrest(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].crestName;
}

export function getCrestDesc(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].crestDesc;
}

export function getWepTooltip(weapon) {
    let tooltipStr = "";
    tooltipStr = "<b>" + weapon + "</b><br /><b>Mt </b>" + getWepMt(weapon) +
        " | <b>Hit </b>" + getWepHit(weapon) + " | <b>Crit </b>" + getWepCrit(weapon) +
        " | <b>Wt </b>" + getWepWt(weapon);
    return tooltipStr;
}

/**
 * Get Stat Functions
 */
export function getUnitStats(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].stats;
}

// export function getUnitCrit(unit) {
//     let unitStats = getUnitStats(unit);
//     return unitStats[0].lck +
// }
//
// export function getUnitAvo(unit) {
//     let unitStats = getUnitStats(unit);
//     return unitStats[0].lck +
// }

/**
 * Weapon Display Functions
 */
export function getUnitWepName(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].weapon;
}

export function getWepType(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].type;
}

export function getWepMag(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].magic;
}

export function getWepMt(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].mt;
}

export function getWepHit(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].hit;
}

export function getWepCrit(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].crit;
}

export function getWepWt(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].wt;
}

export function getWepNote(wep) {
    let wepIndArr = getWepInd(wep);
    return WepData[wepIndArr[0]].options[wepIndArr[1]].note;
}

/**
 * Calculation Display Functions
 */
export function getFightMt(unit1, unit2) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1),
        wep2Name = getUnitWepName(unit2),
        wep1Mt = getWepMt(wep1Name);

    let mt = 0,
        doubled = "";

    if(getWepMag(wep1Name) === true) {
        mt = unit1Stats[0].mag + wep1Mt - unit2Stats[0].res;
    } else {
        mt = unit1Stats[0].str + wep1Mt - unit2Stats[0].def;
    }

    let totalWt1 = getWepWt(wep1Name), //+ eqpWt
        totalWt2 = getWepWt(wep2Name), //+ eqpWt
        adjWt1 = totalWt1 - (unit1Stats[0].str / 5),
        adjWt2 = totalWt2 - (unit2Stats[0].str / 5),
        unit1AtkSpd = unit1Stats[0].spd - adjWt1,
        unit2AtkSpd = unit2Stats[0].spd - adjWt2;

    if((unit1AtkSpd - unit2AtkSpd) > 4) {
        doubled = " x2";
    }

    let atkStr = mt.toString() + doubled;

    return atkStr;
}

export function getFightHit(unit1, unit2) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1);

    let hit = getWepHit(wep1Name) + unit1Stats[0].dex + (unit1Stats[0].luk / 2),
        totalWt = getWepWt(wep1Name), //+ eqpWt
        adjWt = totalWt - (unit1Stats[0].str / 5),
        unit2AtkSpd = unit2Stats[0].spd - adjWt,
        avo = unit2Stats[0].luk + unit2AtkSpd;

    return hit - avo;
}

export function getFightCrit(unit1, unit2) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1);

    let crit = getWepCrit(wep1Name) + unit1Stats[0].dex + (unit1Stats[0].luk / 2),
        critAvo = unit2Stats[0].luk;

    return crit - critAvo;
}

export function getFightCritMt(unit1, unit2) {
    let mt = getFightMt(unit1, unit2);

    return mt*3;
}