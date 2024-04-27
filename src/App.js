import './App.css';
import LineChart from './Components/Line';
import BarChart from './Components/Bar.jsx';
import PieChart from './Components/Pie.jsx';
import DougChart from './Components/Doug.jsx';
import PolarChart from './Components/Polar.jsx';
import BubleChart from './Components/Buble.jsx';




function App() {
  return (
    <div className="App">
      <h1>React Chart</h1>
      <LineChart />
      <BarChart />
      <PieChart />
      <DougChart />
      <PolarChart />
      <BubleChart />

    </div>
  );
}

export default App;
