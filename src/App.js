import './App.css';
import BattleView from './components/game/BattleView';

function App() {
  // state that shows which view to display

  // have the logic that shows the correct view to the player
  return (
    <div className="App">
      <BattleView />
    </div>
  );
}

export default App;
