import logo from './logo.svg';
import './App.css';
import TrainSchedule from './components/TrainSchedule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Train Schedule App</h1>
      </header>
      <main className="App-main">
        <TrainSchedule />
      </main>
    </div>
  );
}

export default App;
