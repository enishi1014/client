import React from 'react';

interface Game {
  id: number;
  name: string;
  players: number;
  difficulty: string;
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>Players: {game.players}</p>
          <p>Difficulty: {game.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
