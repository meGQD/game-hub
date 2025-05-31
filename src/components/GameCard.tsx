import type { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import MetaCriticScore from "./MetaCriticScore";

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
          <HStack justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCriticScore score={game.metacritic} />
          </HStack>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCard;
