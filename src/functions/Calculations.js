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

export function getUnitCalcs(unit) {
    let unitInd = getUnitInd(unit),
        wepName = getUnitWepName(unit),
        wepIndArr = getWepInd(wepName),
        wepMag = getWepMag(wepName),
        wepMt = getWepMt(wepName),
        wepHit = getWepHit(wepName),
        wepWt = getWepWt(wepName),
        wepNote = getWepNote(wepName);
}
//
// export function getDmgFinalAttacker(unit1, unit2) {
//     let unit1IndArr = getUnitInd(unit1),
//         unit2IndArr = getUnitInd(unit2),
//         unit1Wep = getUnitWep(unit1),
//         unit2Wep = getUnitWep(unit2);
// }