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

export function getUnitWep(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].weapon;
}