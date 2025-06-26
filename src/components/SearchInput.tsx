import { Container, Flex, Group, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <div>
      <InputGroup startElement={<LuSearch />}>
        <Input borderRadius={20} placeholder="Search Games..." />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
