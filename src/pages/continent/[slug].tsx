import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { api } from "../../services/api";
import Cities from "../../components/Cities";
import ContinentBio from "../../components/ContinentBio";
import ContinentBanner from "../../components/ContinentBanner";

type Cities = {
  country: string;
  city: string;
  countryCode: string;
  photography: string;
};
type Continent = {
  continent: string;
  countries: number;
  languages: number;
  description: string;
  mostVisitedCities: Cities[];
};
type ContinentProps = {
  dataContinent: Continent;
};

export default function Continent({ dataContinent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const chooseBanner =
    dataContinent.mostVisitedCities[
      Math.floor(Math.random() * dataContinent.mostVisitedCities.length)
    ].photography;

  return (
    <Flex
      as="main"
      width="100%"
      maxWidth="1440px"
      marginX="auto"
      flexDirection="column"
      paddingBottom={["1.5rem", "1.75rem", "2rem", "2.25rem", "2.5rem"]}
    >
      <ContinentBanner chooseBanner={chooseBanner} nameContinent={dataContinent.continent} />

      <Flex
        marginX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
        flexDirection="column"
      >
        <Box
          width="100%"
          marginTop={["1.5rem", "2.375rem", "3.25rem", "4.125rem", "5rem"]}
          marginBottom={["2rem", "2.75rem", "3.5rem", "4.25rem", "5rem"]}
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
            fontSize={["1.5rem", "1.6875rem", "1.875rem", "2.0625rem", "2.25rem"]}
            lineHeight={["2.25rem", "2.53125rem", "2.8125rem", "3.09375rem", "3.375rem"]}
            color="brand.dark-head-text"
            marginBottom={["1.25rem", "1.5625rem", "1.875rem", "2.1875rem", "2.5rem"]}
          >
            Cidades +100
          </Text>
          {isWideVersion ? (
            <Cities mostVisitedCities={dataContinent.mostVisitedCities} />
          ) : (
            <Box paddingX={{ base: "2.75rem", sm: "0" }}>
              <Cities mostVisitedCities={dataContinent.mostVisitedCities} />
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
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
