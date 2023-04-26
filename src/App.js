import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import GameDetails from './components/game/GameDetails';
import AddGame from './components/game/AddGame';
import EditGame from './components/game/EditGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home />}>
        </Route>
        <Route path='home' element={<Dashboard />}>
        </Route>
        <Route path='games/:id' element={<GameDetails />}>
        </Route>
        <Route path='games/:id/edit' element={<EditGame />}>
        </Route>
        <Route path='games/new' element={<AddGame />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
