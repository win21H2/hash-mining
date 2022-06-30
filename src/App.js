import './App.css';
import { useState, useEffect } from 'react';
import image from './isometric_server_cabinet_preview.png';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    window.onload = disablebutton()

    function disablebutton() {
      // document.getElementById("x2").disabled = true;
      // document.getElementById("x4").disabled = true;
      // document.getElementById("x6").disabled = true;
      // document.getElementById("boti").disabled = true;
      // document.getElementById("botii").disabled = true;
      // document.getElementById("botiii").disabled = true;
      // document.getElementById("botiiii").disabled = true;
      document.getElementById("x2").disabled = false;
      document.getElementById("x4").disabled = false;
      document.getElementById("x6").disabled = false;
      document.getElementById("boti").disabled = false;
      document.getElementById("botii").disabled = false;
      document.getElementById("botiii").disabled = false;
      document.getElementById("botiiii").disabled = false;
    };
    /*
    LOGIC TREE FOR ATOCLICKER BOTS
    What I need to do to implement a bot autoclicker system:

    Check if the user clicks the buy button and if the user does, check if there is enough hash to buy the bot and if not, keep the button disabled.

    Once the user buys a bot, take the amount of hash they have and subtract the price of the bot from it.

    Start the bot counter which will work based on what bot the user chose

    */
    if (count >= 200) { document.getElementById("x2").disabled = false; }
    if (count >= 750) { document.getElementById("x4").disabled = false; }
    if (count >= 1000) { document.getElementById("x6").disabled = false; }
    if (count >= 2000) { document.getElementById("boti").disabled = false; }
    if (count >= 3000) { document.getElementById("botii").disabled = false; }
    if (count >= 5000) { document.getElementById("botiii").disabled = false; }
    if (count >= 10000) { document.getElementById("botiiii").disabled = false; }

    document.getElementById("boti").onclick = function() {
      if ((count - 2000) < 0) { document.getElementById("boti").disabled = true; }
      else { setCount(count - 2000); }
    };
    document.getElementById("botii").onclick = function() {
      if ((count - 3000) < 0) { document.getElementById("botii").disabled = true; }
      else { setCount(count - 3000); }
    }
    document.getElementById("botiii").onclick = function() {
      if ((count - 5000) < 0) { document.getElementById("botiii").disabled = true; }
      else { setCount(count - 5000); }
    }
    document.getElementById("botiiii").onclick = function() {
      if ((count - 10000) < 0) { document.getElementById("botiiii").disabled = true; }
      else { setCount(count - 10000); }
    }
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  var upgradeVar = 10;

  /* 
  FOR NEXT PROGRAMMING SESSION:
   - Make a "bot" counter and display it under the hash
   - Make a hash per second counter and display it under the hash
   - Make it when the user buys a bot, it automatically starts counting up in increments of one hash

   - Figure out a more reliable way for counting because right now, it counts for the first few numbers
   but then goes into a whole fucking mess... yEET
  */
 // increment the count every second

  return (
    <>
    <br />
    <br />
    <br />
    <h1 className="sample">hash-mining</h1>
    <div style={{"textAlign": "center"}}>
      <img src={image}  alt="" class="image"/><br />
      <span className="count" class="sample">Hash: {count}</span>
    </div>
    <br />
    <br />
    <div className='container'>
        ||<button onClick={() => setCount(count + 1)}>hash x1</button>||
        <button id="x2" onClick={() => setCount(count + 2 + upgradeVar)}>hash x2</button>||
        <button id="x4" onClick={() => setCount(count + 4)}>hash x4</button>||
        <button id="x6" onClick={() => setCount(count + 6)}>hash x6</button>||
        <br />
        <br />
        ||<button id="boti">stitch i</button>||
        <button id="botii">stitch ii</button>||
        <button id="botiii">stitch iii</button>||
        <button id="botiiii">stitch iiii</button>||
        <br />
        <br />
        ||<button id="reset" onClick={() => setCount(0)}>Reset</button>||
        <br />
        <br />
        <br />
      
        <div className="align--center">
          <tr>
            <th>Upgrade</th>
            <th>hash needed</th>
            <th>Description</th>
            <th>New click output</th>
          </tr>
          <tr>
            <th>h1</th>
            <th>200</th>
            <th></th>
            <th>2 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>h2</th>
            <th>500</th>
            <th></th>
            <th>4 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>h3</th>
            <th>1000</th>
            <th></th>
            <th>6 hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>stitch i</th>
            <th>2000</th>
            <th>Your miner companion :&#41;</th>
            <th>1 hash/<sub>s</sub></th>
          </tr>
          <tr>
            <th>stitch ii</th>
            <th>3000</th>
            <th>Your miner companion :&#41;</th>
            <th>2 hash/<sub>s</sub></th>
          </tr>
          <tr>
            <th>stitch iii</th>
            <th>5000</th>
            <th>Your miner companion :&#41;</th>
            <th>3 hash/<sub>s</sub></th>
          </tr>
          <tr>
            <th>stitch iiii</th>
            <th>????</th>
            <th>Your miner companion :&#41;</th>
            <th>?? hash/<sub>s</sub></th>
          </tr>
        </div>
        <br />
        <br />
        <div className="htp">
          <h2>How to play</h2>
          <h5> - Click the "hash" button to earn hash
          <br /> - Level up your hash/<sub>c</sub> and continue buying hash multipliers
          <br /> - Buy bots to level up your hash/<sub>s</sub>
          </h5>
          <h2>Happy mining :&#41;</h2>
        </div>
        <p className="cprt">Copyright &copy; 2022 324Hz</p>
      </div>
    </>
  );
}

export default App;