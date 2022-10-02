import './App.css';
import MapChart from './MapChart';
// import TableauEmbed from './tabeleu';

function App() {
  return (
    <div className="App">
      <div id="nav">
        <ul>
          <li><a href="#abstract">Abstract</a></li>
          <li><a href="#model">Model</a></li>
          <li><a href="#findings">Findings</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </div>
    <div id="body">
      <div id="topic">
        <h2>"Data Speaks!"</h2>
        <p> </p>
        <hr />
      </div>

      <div id="abstract">
        <h2>Abstract</h2>
        <p> Every one of us believes that we care about Earth and thus are serious about the most threatening, yet complex problem, the Climate Change. However, the data visualization on the non-renewable energy consumption over the last  60 years shows a different reality.</p>
        <hr />
      </div>
      
      <div id="Model">
        <h2>Model</h2>
        <p> The contribution of non-renewable energy to the total energy consumption of each state of America from 1960 A.D-2020 A.D was extracted from EIA State Energy Data System, SEDS. Platforms like react.js and node.js are used to present the map of each state of America with red color to those states with more than 75% of non-renewable energy consumption and green for those with more renewable energy consumption every 10 years interval. Similarly, CSS is used to enhance the graphics of the map and the website, and  Tableau is utilized for the visualization of the percentage of non-renewable energy to the total energy consumption over the period of 60 years.</p>
        <MapChart /> 
        <br />
        <br />
        <hr />
      </div> 

      <div id="findings">
        <h2>Findings</h2>
        <p> In 1960 A.D,only 5 states (Washington, Vermont, Montana, Oregon ,and Idaho) were Green meaning their NRE contributed less than 75% of total energy consumption.And after 30 years later,only four states(Washington, Oregon, Idaho, Montana) made to the list .Similarly,after 60 years in 2020, 9 states(Washington, Oregon, Idaho, Montana, North Dakota, South Sakota, Nebraska, Iowa) entered green list ,which means their NRE contributed less than 75% of total energy consumption.Since 1960 ,only 4 more states have strengthened their renewable energy consumption contributing against climate change.</p>
        <hr />
      </div>

      <div id="conclusion">
        <h2>Conclusion</h2>
        <p> From the data visualization,it is concluded that our words and actions don't go hand in hand.The climate change is self-evident from the calamities of the last couple of decades,yet most of the states are indifferent towards action against climate change. </p>
        <hr />
      </div>

      <div id="references">
        <h2>References</h2>
        <p> 
          The primary source of our data is thegovernmental website, called EIA State Energy Data System. 
          <br />
          <br />
          <a href="https://www.eia.gov/state/seds/seds-data-complete.php?sid=US#StatisticsIndicators"> EIA SEDS, Enerfy Information Administration State ENergy Data System</a>
          <br />
          <br />
        </p>
        <hr />
      </div>

      <div id="footer">
        <p> &copy; of team <b> EARTHIAN </b> @ UMBC-hackathon </p>
      </div>
    </div>

    </div>
  );
}

export default App;