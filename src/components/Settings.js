import Select from "react-select";

const CombatArtsData = require('../props/combat_arts.json');

function Settings() {
    return (
        <div className="Settings">
            <h3>Settings</h3>
            <form action="">
                <label htmlFor='participant1'>Participant 1: </label>
                <br />
                <input type='text' id="participant1" placeholder="Enter name here" className="textbox"
                       autoComplete="off"/><br/>

                <label htmlFor='participant2'>Participant 2: </label>
                <br />
                <input type='text' id="participant2" placeholder="Enter name here" className="textbox"
                       autoComplete="off"/><br/>

                <label htmlFor='house'>Combat Art: </label>
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

export default Settings;
