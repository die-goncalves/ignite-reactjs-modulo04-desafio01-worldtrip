import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { CircleFlag } from "react-circle-flags";
import { api } from "../../services/api";

type Cities = {
  country: string,
  city: string,
  countryCode: string,
  photography: string,
};
type Continent = {
  continent: string,
  countries: number,
  languages: number,
  description: string,
  mostVisitedCities: Cities[],
};

type ContinentProps = {
  dataContinent: Continent,
};

export default function Continent({ dataContinent }: ContinentProps) {
  const chooseBanner =
    dataContinent.mostVisitedCities[
      Math.floor(Math.random() * dataContinent.mostVisitedCities.length)
    ].photography;

  return (
    <Flex
      as="main"
      width="100%"
      flexDirection="column"
      paddingBottom="2.1875rem"
    >
      <Flex position="relative">
        <Image
          src={chooseBanner}
          alt="background"
          width="100%"
          height="28.125rem"
          objectFit="cover"
        />
        <Box position="absolute" bottom="15%" left="8.75rem">
          <Text
            as="h1"
            fontSize="3rem"
            fontWeight="600"
            lineHeight="4.5rem"
            color="brand.light-info"
          >
            {dataContinent.continent}
          </Text>
        </Box>
      </Flex>

      <Flex marginX="8.75rem" flexDirection="column">
        <SimpleGrid
          minChildWidth="400px"
          spacing="4.375rem"
          // marginX="8.75rem"
          marginY="5rem"
          alignItems="center"
        >
          <Text
            fontSize="1.5rem"
            fontWeight="400"
            lineHeight="2.25rem"
            textAlign="justify"
            color="brand.dark-head-text"
          // maxWidth="50%"
          >
            {dataContinent.description}
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <Box fontWeight="600" textAlign="center">
              <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
                {dataContinent.countries}
              </Text>
              <Text
                fontSize="1.5rem"
                lineHeight="2.25rem"
                color="brand.dark-head-text"
              >
                Países
              </Text>
            </Box>
            <Box fontWeight="600" textAlign="center">
              <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
                {dataContinent.languages}
              </Text>
              <Text
                fontSize="1.5rem"
                lineHeight="2.25rem"
                color="brand.dark-head-text"
              >
                Línguas
              </Text>
            </Box>
            <Box fontWeight="600" textAlign="center" minWidth="12rem">
              <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
                {dataContinent.mostVisitedCities.length}
              </Text>
              <Text
                fontSize="1.5rem"
                lineHeight="2.25rem"
                color="brand.dark-head-text"
              >
                cidades +100
                <Tooltip
                  hasArrow
                  arrowSize={15}
                  borderRadius="5px"
                  padding={4}
                  textAlign="justify"
                  label={`Cidades da ${dataContinent.continent} que estão presentes entre as 100 cidades mais visitadas do mundo.`}
                  aria-label="A tooltip"
                  bg="brand.dark-head-text"
                  color="brand.light-info"
                >
                  <InfoOutlineIcon
                    fontSize="1rem"
                    color="brand.dark-half-info"
                    marginLeft="0.625rem"
                  />
                </Tooltip>
              </Text>
            </Box>
          </Grid>
        </SimpleGrid>

        <Box width="100%">
          <Text
            as="h1"
            fontWeight="500"
            fontSize="2.25rem"
            lineHeight="3.375rem"
            color="brand.dark-head-text"
            marginBottom="2.5rem"
          >
            Cidades +100
          </Text>
          <SimpleGrid minChildWidth="16rem" spacing="1.8125rem">
            {dataContinent.mostVisitedCities.map((city) => {
              return (
                <Box width="100%" borderRadius="base" overflow="hidden">
                  <Image
                    width="100%"
                    height="10rem"
                    src={city.photography}
                    alt={city.city}
                    objectFit="cover"
                  />

                  <Box
                    paddingX="1.5rem"
                    paddingY="1.125rem"
                    borderTop="none"
                    borderWidth="1px"
                    borderColor="brand.half-orange"
                    background="white"
                  >
                    <Box display="flex" justifyContent="space-between">
                      <Stack direction="column" spacing="0.75rem">
                        <Text
                          fontFamily="Barlow"
                          fontWeight="600"
                          fontSize="1.25rem"
                          lineHeight="1.5625rem"
                          color="brand.dark-head-text"
                        >
                          {city.city}
                        </Text>
                        <Text
                          fontFamily="Barlow"
                          fontWeight="500"
                          fontSize="1rem"
                          lineHeight="1.625rem"
                          color="brand.dark-info"
                        >
                          {city.country}
                        </Text>
                      </Stack>
                      <CircleFlag
                        width="30"
                        height="30"
                        countryCode={city.countryCode.toLowerCase()}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex >
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data } = await api.get("continents");
  const specificContinent = data.find(
    (eachContinent) => eachContinent.slug === slug
  );

  const continent: Continent = {
    continent: specificContinent.continent,
    countries: specificContinent.countries,
    languages: specificContinent.languages,
    description: specificContinent.description,
    mostVisitedCities: specificContinent.mostVisitedCities,
  };

  return {
    props: { dataContinent: continent },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("continents");

  const paths = data.map((continent) => ({
    params: { slug: continent.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
