import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchingGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchingGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      {error && <Text color={"red"}>{error}</Text>}
    </>
  );
};

export default GameGrid;
