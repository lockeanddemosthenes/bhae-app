function Settings() {
    return (
        <div className="Settings">
            <h3>Settings</h3>
            <form action="">
                <label htmlFor='participant1'>Participant 1: </label>
                <div></div>
                <input type='text' id="participant1" placeholder="Enter name here" className="textbox"
                       autoComplete="off"/><br/>

                <label htmlFor='participant2'>Participant 2: </label>
                <div></div>
                <input type='text' id="participant2" placeholder="Enter name here" className="textbox"
                       autoComplete="off"/><br/>

                <label htmlFor='house'>Combat Art: </label>
                <div></div>
                <select name="house" id="house" className="dropdown" placeholder="Combat Art">
                    <option value="Blue Lions">Blue Lions</option>
                    <option value="Black Eagles">Black Eagles</option>
                    <option value="Golden Deer">Golden Deer</option>
                    <option value="Ashen Wolves">Ashen Wolves</option>
                    <option value="Church of Seiros">Church of Seiros</option>
                </select><br/><br/>
            </form>

            <button id="fightBtn">Fight!</button>
            <button id="changeWpnBtn">Change Weapon</button>
            <br/>
        </div>
    );
}

export default Settings;
