import "./App.css";
import twitterlink from './twitterlink.png';

const HowToPlay = () => {
    return (
        <div className="htp">
            <h2>How to play</h2>
            <h5>
                - click the "hash" button to earn hash<br />
                - level up your hash/<sub>c</sub> and continue buying hash multipliers<br />
                - buy bots to level up your hash/<sub>s</sub>
            </h5>
            <h2>Happy mining :&#41;</h2>
            <p className="cprt">Copyright &copy; 2022 324Hz</p>
            <a href="https://twitter.com/win21H2" target="_blank"><img src={twitterlink} className="twitterlink" alt=""></img></a>
        </div>
    );
};
export default HowToPlay;