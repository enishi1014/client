import React, { useState } from 'react';
import axios from 'axios';
import GameList from './components/GameList';

interface Game {
  id: number;
  name: string;
  players: number;
  difficulty: string;
}

function App() {
  const [players, setPlayers] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    try {
      const response = await axios.get<Game[]>(`http://localhost:5000/api/games?players=${players}&difficulty=${difficulty}`);
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Game Suggester</h1>
      <div>
        <input type="number" value={players} onChange={(e) => setPlayers(parseInt(e.target.value))} placeholder="Number of Players" />
        <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder="Difficulty" />
        <button onClick={fetchGames}>Find Games</button>
      </div>
      <GameList games={games} />
    </div>
  );
}

export default App;
