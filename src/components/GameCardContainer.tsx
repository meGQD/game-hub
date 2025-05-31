import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div>
      <Box width="400px" overflow="hidden" borderRadius={10}>
        {children}
      </Box>
    </div>
  );
};

export default GameCardContainer;
