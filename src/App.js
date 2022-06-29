import './App.css';
//import Users from './useUsers.js';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    window.onload = disablebutton()

    function disablebutton() {
      // document.getElementById("x2").disabled = true;
      // document.getElementById("x4").disabled = true;
      // document.getElementById("x6").disabled = true;
      document.getElementById("x2").disabled = false;
      document.getElementById("x4").disabled = false;
      document.getElementById("x6").disabled = false;
    };
    /*
    IDEAS FOR NEW FEATURES:
    3. Add a system where you can buy a "auto-clicker" which will increase the count by a certain amount every second
    make an upgrade system which when the user presses a button, initializes a variable and then any of the multipliers get affected by that upgrade e.g.

    upgradeVar = 5;

    count + 2 + upgradeVar;
    */
    if (count > 100) {
      document.getElementById("x2").disabled = false;
    }
    if (count > 200) {
      document.getElementById("x4").disabled = false;
    }
    if (count > 400) {
      document.getElementById("x6").disabled = false;
    }
  }, [count]);

  var upgradeVar = 10;

  return (
    <>
    <div>
      <div className='container'>
        <h6>Mini hash mining game</h6>
        <button onClick={() => setCount(count + 1)}>Click! x1</button>
        <button id="x2" onClick={() => setCount(count + 2 + upgradeVar)}>Click! x2</button>
        <button id="x4" onClick={() => setCount(count + 4)}>Click! x4</button>
        <button id="x6" onClick={() => setCount(count + 6)}>Click! x6</button>
        <br />
        <div className="align--center">
          <tr>
            <th>Upgrade</th>
            <th>How many clicks are needed?</th>
            <th>New click output</th>
          </tr>
          <tr>
            <th>T1</th>
            <th>100</th>
            <th>2 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>T2</th>
            <th>200</th>
            <th>4 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>T3</th>
            <th>400</th>
            <th>6 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>T4</th>
            <th>Coming soon!</th>
            <th>Coming soon!</th>
          </tr>
        </div>
        <br />
        <button id="reset" onClick={() => setCount(0)}>Reset</button>
        <br />
        <span className="count" class="sample">Hashing power: {count}</span>
        <br />
      </div>
    </div>
    {/* <div className='USERFONT'>
      <Users />
    </div> */}
    </>
  );
}

export default App;