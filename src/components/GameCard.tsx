import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card.Root overflow="hidden" borderRadius={10}>
        <Image src={game.background_image} />
        <Card.Body>
          <Heading size={"3xl"}>{game.name}</Heading>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCard;
