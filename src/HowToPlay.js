import "./App.css";
import twitterlink from './images/twitterlink.png';
import mainlink from './images/324Hz512512.png';

const HowToPlay = () => {
    return (
        <div className="htp">
            <h2>How to play</h2>
            <pre>
- click the "hash" button to earn hash<br />
- level up your hash/<sub>c</sub> and continue buying hash multipliers<br />
- buy bots to level up your hash/<sub>s</sub>
            </pre>
            <h2>Happy mining :&#41;</h2>
            <p className="cprt">Copyright &copy; 2022 324Hz</p>
            <a href="https://twitter.com/win21H2" rel="noreferrer" target="_blank"><img src={twitterlink} className="twitterlink" alt=""></img></a>
            <a href="https://324hz.dev" rel="noreferrer" target="_blank"><img src={mainlink} className="twitterlink" alt=""></img></a>
        </div>
    );
};
export default HowToPlay;