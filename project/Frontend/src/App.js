import './App.css';
import CurrentPrice from './components/CurrentPrice';
import CustomDate from './components/CustomDate';
import Chart from './components/Chart';

function App() {

  return (
    <div>
      <Chart/>
      <CustomDate/>
      <CurrentPrice/>
    </div>
  );
}

export default App;
