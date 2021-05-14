import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import TravelTemplate from "./TravelTemplate";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex
      marginY={["2.25rem", "2.9375rem", "3.625rem", "4.3125rem", "5rem"]}
      marginX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
    >
      <Grid
        width="100%"
        templateColumns={{
          base: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))",//   479 < base <= 0
          sm: "repeat(auto-fit, minmax(min(128px, 100%), 1fr))",//      767 < sm <= 480
          md: "repeat(auto-fit, minmax(min(137.8px, 100%), 1fr))",//     1023 < md <= 768
          lg: "repeat(auto-fit, minmax(min(147.8px, 100%), 1fr))",//     1443 < lg <= 1024
          xl: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))" // infinite < xl <= 1440
        }}
        columnGap={["0rem", "0rem", "2.3rem", "1.0475rem", "1.5rem"]}
        rowGap={["0.5rem", "0.75rem", "1rem", "1.25rem", "1.5rem"]}
      >
        {isWideVersion ? (
          <>
            <TravelTemplate
              src="/cocktail.svg"
              alt="cocktail"
              text="vida noturna"
            />
            <TravelTemplate src="/surf.svg" alt="surf" text="praia" />
            <TravelTemplate src="/building.svg" alt="building" text="moderno" />
            <TravelTemplate src="/museum.svg" alt="museum" text="clássico" />
            <TravelTemplate src="/earth.svg" alt="earth" text="e mais..." />
          </>
        ) : (
          <>
            <TravelTemplate
              src="/cocktail.svg"
              alt="cocktail"
              text="vida noturna"
              justify="flex-start"
            />
            <TravelTemplate
              src="/surf.svg"
              alt="surf"
              text="praia"
              justify="flex-end"
            />
            <TravelTemplate
              src="/building.svg"
              alt="building"
              text="moderno"
              justify="flex-start"
            />
            <TravelTemplate
              src="/museum.svg"
              alt="museum"
              text="clássico"
              justify="flex-end"
            />
            <GridItem colSpan={2}>
              <TravelTemplate
                src="/earth.svg"
                alt="earth"
                text="e mais..."
                justify="center"
              />
            </GridItem>
          </>
        )}
      </Grid>
    </Flex>
  );
}
