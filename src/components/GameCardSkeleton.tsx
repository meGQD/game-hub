import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <div>
      <Card.Root width="400px" overflow="hidden" borderRadius={10}>
        <Skeleton height="270px" />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCardSkeleton;
