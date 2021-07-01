import './App.css';
import TicTacToe from './pages/TicTacToe'
import {GameContextProvider} from './components/context/GameContext'

function App() {
  return (
    <div className="App">
        <GameContextProvider>
          <TicTacToe/>
        </GameContextProvider>
    </div>
  );
}

export default App;
