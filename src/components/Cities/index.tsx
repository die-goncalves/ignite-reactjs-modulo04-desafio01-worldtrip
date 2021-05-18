import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

type CityInformation = {
  country: string;
  city: string;
  countryCode: string;
  photography: string;
};
type CitiesProps = {
  mostVisitedCities: Array<CityInformation>;
};

export default function Cities({ mostVisitedCities }: CitiesProps) {
  return (
    <Box paddingX={["2.75rem", 0]}>
      <SimpleGrid
        minChildWidth={{ base: "100%", sm: "16rem" }}
        spacing={{ base: "1.25rem", sm: "1.8125rem" }}
      >
        {mostVisitedCities.map((city) => {
          return (
            <Box
              width="100%"
              borderRadius="base"
              overflow="hidden"
              key={city.city}
            >
              <Image
                width="100%"
                height="10rem"
                src={city.photography}
                alt={city.city}
                objectFit="cover"
                fallback={
                  <Skeleton
                    width="100%"
                    height="10rem"
                    speed={1}
                    endColor="brand.skeleton-endColor"
                    startColor="brand.skeleton-startColor"
                  />
                }
              />

              <Box
                paddingX="1.5rem"
                paddingY="1.125rem"
                borderTop="none"
                borderWidth="1px"
                borderColor="brand.half-orange"
                background="white"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="column"
                    spacing={{ base: "0.25rem", sm: "0.75rem" }}
                  >
                    <Text
                      fontFamily="Barlow"
                      fontWeight="600"
                      fontSize={{ base: "1rem", sm: "1.25rem" }}
                      lineHeight="1.5625rem"
                      color="brand.dark-head-text"
                    >
                      {city.city}
                    </Text>
                    <Text
                      fontFamily="Barlow"
                      fontWeight="500"
                      fontSize={{ base: "0.75rem", sm: "1rem" }}
                      lineHeight="1.625rem"
                      color="brand.dark-info"
                    >
                      {city.country}
                    </Text>
                  </Stack>
                  <Flex
                    boxSize={{ base: "25px", sm: "30px" }}
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <Image
                      margin="auto"
                      src={`https://hatscripts.github.io/circle-flags/flags/${city.countryCode.toLowerCase()}.svg`}
                      alt="South Africa"
                      fit="cover"
                      fallback={
                        <Skeleton
                          width="100%"
                          speed={1}
                          endColor="brand.skeleton-endColor"
                          startColor="brand.skeleton-startColor"
                        />
                      }
                    />
                  </Flex>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
