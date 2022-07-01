import "./App.css";
import image from './images/isometric_server_cabinet_preview.png';
import BuyBotChart from "./BuyBotChart";
import HowToPlay from "./HowToPlay";

import React, { useEffect, useState } from "react";

const Counter = () => {
  const [gameInterval, setGameInterval] = useState(null);
  const [count, setCount] = useState(0);
  const [bots, setBots] = useState(0);

  useEffect(() => {
    if (gameInterval !== null) {
      clearInterval(gameInterval);
    }

    const newInterval = setInterval(() => {
      setCount((count) => count + 1 * bots);
    }, 1000);

    setGameInterval(newInterval);
  }, [bots]);

  const handleBuyBoti = () => {
    setBots(bots + 1);
    setCount(count - 2000);
  };

  const handleBuyBotii = () => {
    setBots(bots + 2);
    setCount(count - 4000);
  };

  const handleBuyBotiii = () => {
    setBots(bots + 3);
    setCount(count - 6000);
  };

  const handleReset = () => {
    if (count > 10000) {
      alert("Are you sure you want to reset? It looks like you have made quite a lot! This will reset your hash and your bots.");
      setCount(0);
      setBots(0);
    }
    else {
      alert("Are you sure you want to reset? This will reset your hash and your bots.");
      setCount(0);
      setBots(0);
    }
  };
  
  const handleBuyh1 = () => { setCount(count + 2); };
  const handleBuyh2 = () => { setCount(count + 4); };
  const handleBuyh3 = () => { setCount(count + 6); };

  /*
  FOR NEXT CODING SESSION:
   - Make a error if the user tries to buy but there is not enough hash
   - Change up the values to make the game harder (e.g. increase the value)
   - Add some bot powerups such as a multiplier which doubles the output of the bots
   - Try to put the buy bot buttons in a new JS file so that there is less clutter in the workspace
  */

  return (
    <div>
      <h1 className="sample">hash-mining</h1><br /><br />
      <div style={{"textAlign": "center"}}>
        <img src={image}  alt="" class="image"/><br /><br /><br /><br /><br /><br />
        <div className="align--center">
          <BuyBotChart />
          <br /><br />
          <button onClick={() => setCount(count + 1)}>hash x1</button>||
          <button disabled={count < 200} onClick={handleBuyh1}>hash x2</button>||
          <button disabled={count < 500} onClick={handleBuyh2}>hash x4</button>||
          <button disabled={count < 1000} onClick={handleBuyh3}>hash x6</button><br /><br />
          <button disabled={count < 2000} onClick={handleBuyBoti}>bot i</button>||
          <button disabled={count < 4000} onClick={handleBuyBotii}>bot ii</button>||
          <button disabled={count < 6000} onClick={handleBuyBotiii}>bot iii</button><br /><br />
          <button className="reset" onClick={handleReset}>Reset</button><br /><br />
          <div className="border--hashtext">
            <span className= "count" class="sample">{count} hash</span><br />
          </div>
          <HowToPlay />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <Counter />;
}