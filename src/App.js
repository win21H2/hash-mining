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

  const handleBuyBot = () => {
    setBots(bots + 1);
    setCount(count - 10);
  };

  return (
    <div>
      <h1 className="sample">hash-mining</h1><br /><br />
      <div style={{"textAlign": "center"}}>
        <img src={image}  alt="" class="image"/><br /><br /><br /><br /><br /><br />
        <div className="align--center">
          <BuyBotChart />
          <br /><br />
          <button onClick={() => setCount(count + 1)}>hash x1</button>||
          <button onClick={() => setCount(count + 2)}>hash x2</button>||
          <button onClick={() => setCount(count + 4)}>hash x4</button>||
          <button onClick={() => setCount(count + 6)}>hash x6</button><br /><br />
          <button disabled={count < 10} onClick={handleBuyBot}>bot i</button><br /><br />
          <button id="reset" onClick={() => setCount(0)}>Reset</button><br /><br />
          <span className= "count" class="sample">{count} hash</span><br />
          <HowToPlay />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <Counter />;
}