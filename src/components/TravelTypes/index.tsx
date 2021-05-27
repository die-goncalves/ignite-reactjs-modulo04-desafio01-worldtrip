import { Flex, Grid, Stack, useBreakpointValue, Wrap, WrapItem } from "@chakra-ui/react";
import TravelTemplate from "./TravelTemplate";

export default function TravelTypes() {
  const isLargerThan480 = useBreakpointValue({
    base: 'base',
    sm: '+sm',
  });

  return (
    <>
      {(isLargerThan480 === 'base') && (
        <Stack
          direction="column"
          spacing="1.5rem"
          marginY={["2.25rem", null]}
          marginX={["1rem", null]}
        >
          <Wrap align="flex-end" justify="space-around" spacing="1.25rem">
            <WrapItem minW="132.56px" >
              <TravelTemplate src="/cocktail.svg" alt="cocktail" text="vida noturna" />
            </WrapItem>
            <WrapItem >
              <TravelTemplate src="/surf.svg" alt="surf" text="praia" />
            </WrapItem>
          </Wrap>
          <Wrap align="center" justify="space-around" spacing="1.5rem">
            <WrapItem >
              <TravelTemplate src="/building.svg" alt="building" text="moderno" />
            </WrapItem>
            <WrapItem >
              <TravelTemplate src="/museum.svg" alt="museum" text="clássico" />
            </WrapItem>
          </Wrap>
          <Flex justifyContent="center">
            <TravelTemplate src="/earth.svg" alt="earth" text="e mais..." />
          </Flex>
        </Stack>
      )}
      {(isLargerThan480 === '+sm') && (
        <Grid
          marginY={[null, "2.9375rem", "3.625rem", "4.3125rem", "5rem"]}
          marginX={[null, "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
          templateColumns={{
            base: null,//   479 < base <= 0
            sm: "repeat(auto-fit, minmax(min(122.78px, 100%), 1fr))",//      767 < sm <= 480
            md: "repeat(auto-fit, minmax(min(98.38px, 100%), 1fr))",//     1023 < md <= 768
            lg: "repeat(auto-fit, minmax(min(147.66px, 100%), 1fr))",//     1443 < lg <= 1024
            xl: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))" // infinite < xl <= 1440
          }}
          columnGap={[null, null, null, "0.75rem", "1.5rem"]}
          rowGap={[null, "1.5rem", null]}
          alignItems="flex-start"
        >
          <TravelTemplate src="/cocktail.svg" alt="cocktail" text="vida noturna" />
          <TravelTemplate src="/surf.svg" alt="surf" text="praia" />
          <TravelTemplate src="/building.svg" alt="building" text="moderno" />
          <TravelTemplate src="/museum.svg" alt="museum" text="clássico" />
          <TravelTemplate src="/earth.svg" alt="earth" text="e mais..." />
        </Grid>
      )}
    </>
  );
}
