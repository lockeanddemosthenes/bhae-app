const UnitsData = require("../props/unitsTemp.json"),
    WepData = require("../props/weapons.json"),
    EqpData = require("../props/equips.json"),
    AbilitiesData = require("../props/abilities.json"),
    CombatArtsData = require("../props/combat_arts.json");

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

export function getCombatArtInd(artName) {
    for(let typeIndex=0; typeIndex < CombatArtsData.length; typeIndex++) {
        for(let artIndex=0; artIndex < CombatArtsData[typeIndex].options.length; artIndex++) {
            if(CombatArtsData[typeIndex].options[artIndex].name === artName) {
                return [typeIndex, artIndex];
            }
        }
    }
}

export function getUnitEqpName(unit) {
    let unitIndArr = getUnitInd(unit),
        eqpName = UnitsData[unitIndArr[0]].options[unitIndArr[1]].eqp;
    return eqpName;
}

/**
 * Get display functions
 */
export function getCrestName(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].crestName;
}

export function getCrestDesc(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].crestDesc;
}

export function getWepTooltip(weapon) {
    let tooltipStr = "<b>" + weapon + "</b><br /><b>Mt </b>" + getWepMt(weapon) +
        " | <b>Hit </b>" + getWepHit(weapon) + " | <b>Crit </b>" + getWepCrit(weapon) +
        " | <b>Wt </b>" + getWepWt(weapon);
    return tooltipStr;
}

export function getEqpType(eqpName) {
    let eqp = EqpData.filter(function(data) {return data.name === eqpName});
    return eqp[0].type;
}

export function getEqpDesc(eqpName) {
    let eqp = EqpData.filter(function(data) {return data.name === eqpName});
    return eqp[0].note;
}

export function getLvClass(unit) {
    let unitIndArr = getUnitInd(unit),
        lv = UnitsData[unitIndArr[0]].options[unitIndArr[1]].lv,
        uClass = UnitsData[unitIndArr[0]].options[unitIndArr[1]].class,
        lvClass = "Lv " + lv + " " + uClass;
    return lvClass;
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
 * Get Ability Functions
 */

export function getAbilityArray(unit) {
    let unitIndArr = getUnitInd(unit);
    return UnitsData[unitIndArr[0]].options[unitIndArr[1]].abilities;
}

export function getAbilityIcon(unitAbilities, num) {
    return unitAbilities[num];
}

export function getAbilityName(unitAbilities, num) {
    let abilityIcon = getAbilityIcon(unitAbilities, num),
        ability = AbilitiesData.filter(function(data) {return data.icon === abilityIcon});
    return ability[0].name;
}

export function getAbilityDesc(unitAbilities, num) {
    let abilityIcon = getAbilityIcon(unitAbilities, num),
        ability = AbilitiesData.filter(function(data) {return data.icon === abilityIcon}),
        abilityDescText = ability[0].desc,
        fullString = "<b>" + getAbilityName(unitAbilities, num) + "</b><br />" + abilityDescText;
    return fullString;
}

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
 * Get Combat Art Functions
 */
export function getCombatArtMag(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].magic;
}

export function getCombatArtMt(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].mt;
}

export function getCombatArtHit(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].hit;
}

export function getCombatArtCrit(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].crit;
}

export function getCombatArtAvo(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].avo;
}

export function getCombatArtNote(combatArt) {
    let combatArtIndArr = getCombatArtInd(combatArt);
    return CombatArtsData[combatArtIndArr[0]].options[combatArtIndArr[1]].note;
}

/**
 * Calculation Display Functions
 */
export function getFightMt(unit1, unit2, combatArt) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1),
        wep1Mt = getWepMt(wep1Name);

    let mt = 0;
    if(getWepMag(wep1Name) === true || getCombatArtMag(combatArt) === true) {
        mt = unit1Stats[0].mag + wep1Mt - unit2Stats[0].res;
    } else {
        mt = unit1Stats[0].str + wep1Mt - unit2Stats[0].def;
    }

    mt += getCombatArtMt(combatArt);

    return mt;
}

export function getFightMtStr(unit1, unit2, combatArt) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1),
        wep2Name = getUnitWepName(unit2);

    let totalWt1 = getWepWt(wep1Name), //+ eqpWt
        totalWt2 = getWepWt(wep2Name), //+ eqpWt
        adjWt1 = totalWt1 - (unit1Stats[0].str / 5),
        adjWt2 = totalWt2 - (unit2Stats[0].str / 5),
        unit1AtkSpd = unit1Stats[0].spd - adjWt1,
        unit2AtkSpd = unit2Stats[0].spd - adjWt2;

    let doubled = "";

    if((unit1AtkSpd - unit2AtkSpd) > 4) {
        doubled = " x2";
    }

    let atkStr = getFightMt(unit1, unit2, combatArt).toString() + doubled;

    return atkStr;

}

export function getFightHit(unit1, unit2, combatArt) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1);

    let hit = getWepHit(wep1Name) + unit1Stats[0].dex + (unit1Stats[0].luk / 2),
        totalWt = getWepWt(wep1Name), //+ eqpWt
        adjWt = totalWt - (unit1Stats[0].str / 5),
        unit2AtkSpd = unit2Stats[0].spd - adjWt,
        avo = unit2Stats[0].luk + unit2AtkSpd;

    hit += getCombatArtHit(combatArt);

    return hit - avo;
}

export function getFightCrit(unit1, unit2, combatArt) {
    let unit1Stats = getUnitStats(unit1),
        unit2Stats = getUnitStats(unit2),
        wep1Name = getUnitWepName(unit1);

    let crit = getWepCrit(wep1Name) + unit1Stats[0].dex + (unit1Stats[0].luk / 2),
        critAvo = unit2Stats[0].luk;

    crit += getCombatArtCrit(combatArt);

    return crit - critAvo;
}

export function getFightCritMt(unit1, unit2, combatArt) {
    let mt = getFightMt(unit1, unit2, combatArt);

    return mt*3;
}