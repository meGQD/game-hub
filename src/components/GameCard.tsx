import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

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
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCard;
