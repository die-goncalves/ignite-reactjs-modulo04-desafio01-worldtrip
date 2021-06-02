import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Collection, Documents, query as q } from "faunadb";
import { fauna } from "../../services/fauna";
import { Box, Flex, Text } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import ContinentBio from "../../components/ContinentBio";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

type FaunaDBDataCities = {
  country: string;
  city: string;
  countryCode: string;
  photography: string;
};
type FaunaDBDataContinent = {
  slug?: string;
  continent: string;
  countries: number;
  languages: number;
  description: string;
  mostVisitedCities: FaunaDBDataCities[];
};
type FaunaDBContinent = {
  data: FaunaDBDataContinent;
}
type FaunaDBData = {
  data: FaunaDBContinent[];
}
type ContinentProps = {
  dataContinent: FaunaDBDataContinent;
};

export default function Continent({ dataContinent }: ContinentProps) {
  const chooseBanner =
    dataContinent.mostVisitedCities[
      Math.floor(Math.random() * dataContinent.mostVisitedCities.length)
    ].photography;

  return (
    <>
      <Head>
        <title>{dataContinent.continent} | worldtrip</title>
      </Head>

      <Header goBackLink="/" />
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
            <Cities mostVisitedCities={dataContinent.mostVisitedCities} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const specificContinent = await fauna.query<FaunaDBContinent>(
    q.Get(q.Match(q.Index("continents_by_slug"), `${slug}`))
  )

  const continent: FaunaDBDataContinent = {
    continent: specificContinent.data.continent,
    countries: specificContinent.data.countries,
    languages: specificContinent.data.languages,
    description: specificContinent.data.description,
    mostVisitedCities: specificContinent.data.mostVisitedCities,
  };

  return {
    props: { dataContinent: continent },
    revalidate: 7 * 24 * 60 * 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fauna.query<FaunaDBData>(
    q.Map(
      q.Paginate(Documents(Collection('continents'))),
      q.Lambda(x => q.Get(x))
    ))

  const paths = response.data.map((continent) => ({
    params: { slug: continent.data.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
