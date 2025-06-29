import { Container, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import role from "../assets/role.svg";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="20px">
        <Image src={role} boxSize="50px"></Image>
        <Container fluid>
          <SearchInput onSearch={onSearch} />
        </Container>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
