import "./App.css";

const BuyBotChart = () => {
    var h1 = 200;
    var h2 = 500;
    var h3 = 1000;
    var boticost = 2000;

    var h1output = 2;
    var h2output = 4;
    var h3output = 6;
    var botioutput = 0.1;

    return (
        <div>
          <tr>
            <th>upgrade</th>
            <th>hash needed</th>
            <th>description</th>
            <th>new click output</th>
          </tr>
          <tr>
            <th>h1</th>
            <th>{h1}</th>
            <th></th>
            <th>{h1output} hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>h2</th>
            <th>{h2}</th>
            <th></th>
            <th>{h2output} hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>h3</th>
            <th>{h3}</th>
            <th></th>
            <th>{h3output} hash/<sub>c</sub></th>
          </tr>
          <tr>
            <th>bot i</th>
            <th>{boticost}</th>
            <th>Your miner companion :&#41;</th>
            <th>{botioutput} hash/<sub>s</sub></th>
          </tr>
        </div>
    );
};

export default BuyBotChart;