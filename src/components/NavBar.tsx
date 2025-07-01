import { Container, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import role from "../assets/role.svg";
import GenreDrawer from "./GenreDrawer";

interface Props {
  onSearch: (searchText: string) => void;
  showAside: boolean | undefined;
}

const NavBar = ({ onSearch, showAside }: Props) => {
  return (
    <div>
      <HStack paddingX="20px" paddingY="10px">
        <Image src={role} boxSize="50px"></Image>
        <Container fluid>
          <SearchInput onSearch={onSearch} />
        </Container>
        <ColorModeSwitch />
        {!showAside && <GenreDrawer />}
      </HStack>
    </div>
  );
};

export default NavBar;
