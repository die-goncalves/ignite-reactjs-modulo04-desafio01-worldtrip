import { Stack, Wrap, WrapItem } from "@chakra-ui/react";
import TravelTemplate from "./TravelTemplate";

export default function TravelTypes() {
  return (
    <Stack
      direction={["column", "row"]}
      marginY={["2.25rem", "2.9375rem", "3.625rem", "4.3125rem", "5rem"]}
      marginX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
    >
      <Wrap
        w={["initial", "100%"]}
        justify={["space-around", "center", "space-between"]}
        spacing={["1.6875rem", "0.5rem", "initial"]}
      >
        <WrapItem
          w={[null, "30%", "initial"]}
          minW={["167.75px", "122.78px", "137.81px", "147.66px", "157.5px"]}
          px={["1.1rem", "initial"]}
          justifyContent={[null, "center"]}
        >
          <TravelTemplate src="/cocktail.svg" alt="cocktail" text="vida noturna" />
        </WrapItem>
        <WrapItem
          w={[null, "30%", "initial"]}
          minW={[null, "78.3px", "87.88px", "94.14px", "100.42px"]}
          px={["0.8rem", "initial"]}
          justifyContent="center"
        >
          <TravelTemplate src="/surf.svg" alt="surf" text="praia" />
        </WrapItem>
        <WrapItem
          w={[null, "30%", "initial"]}
          paddingLeft={["1.1rem", "initial"]}
          paddingRight={["1.5rem", "initial"]}
          justifyContent="center"
        >
          <TravelTemplate src="/building.svg" alt="building" text="moderno" />
        </WrapItem>
        <WrapItem
          w={[null, "30%", "initial"]}
          minW={[null, "122.78px", "137.81px", "147.66px", "157.5px"]}
          px={["0.8rem", "initial"]}
          justifyContent="center"
        >
          <TravelTemplate src="/museum.svg" alt="museum" text="clássico" />
        </WrapItem>
        <WrapItem
          w={["100%", "30%", "initial"]}
          minW={[null, "78.3px", "87.88px", "94.14px", "100.42px"]}
          justifyContent="center"
        >
          <TravelTemplate src="/earth.svg" alt="earth" text="e mais..." />
        </WrapItem >
      </Wrap>
    </Stack>
  );
}
