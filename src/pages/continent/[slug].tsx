import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { api } from "../../services/api";
import Cities from "../../components/Cities";
import ContinentBio from "../../components/ContinentBio";

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

      <Flex
        marginX="8.75rem"
        flexDirection="column"
      >
        <Box
          width="100%"
          marginY="5rem"
        >
          <ContinentBio
            description={dataContinent.description}
            countries={dataContinent.countries}
            languages={dataContinent.languages}
            mostVisitedCities={dataContinent.mostVisitedCities.length}
            continent={dataContinent.continent}
          />
        </Box>

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
          <Cities mostVisitedCities={dataContinent.mostVisitedCities} />
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
