import { GetStaticProps } from "next";
import Head from "next/head";
import { Collection, Documents, query as q } from "faunadb";
import { fauna } from "../services/fauna";
import { Box, Flex, Divider, Center, Text } from "@chakra-ui/react";
import TravelTypes from "../components/TravelTypes";
import Carousel from "../components/Carousel";
import HomeBanner from "../components/HomeBanner";
import Header from "../components/Header";

type FaunaDBDataContinent = {
  slug: string;
  continent: string;
  particularity: string;
  postcard: string;
  postcardInfo: string;
  postcardPosition: string;
};
type FaunaDBContinent = {
  ref: object;
  ts: number;
  data: FaunaDBDataContinent;
}
type FaunaDBData = {
  data: FaunaDBContinent[];
}
type HomeProps = {
  continents: FaunaDBDataContinent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />
      <Flex direction="column">
        <HomeBanner />
        <Flex
          width="100%"
          maxW="1440px"
          marginX="auto"
          marginBottom={{ base: "1.5rem", sm: "1.834rem", md: "2.167rem", lg: "2.5rem" }}
          direction="column"
        >
          <TravelTypes />
          <Center
            marginBottom={["1.25rem", "1.75rem", "2.25rem", "2.75rem", "3.25rem"]}
            marginX="auto"
          >
            <Divider
              width={["3.75rem", "4.21875rem", "4.6875rem", "5.15625rem", "5.625rem"]}
              height="0.125rem"
              background="brand.dark-head-text"
            />
          </Center>

          <Box
            marginBottom={["1.25rem", "1.75rem", "2.25rem", "2.75rem", "3.25rem"]}
            marginX="auto"
          >
            <Text
              fontSize={["1.21rem", "1.47rem", "1.73rem", "1.99rem", "2.25rem"]}
              fontWeight="500"
              lineHeight={["1.875rem", "2.25rem", "2.625rem", "3rem", "3.375rem"]}
              color="brand.dark-head-text"
              textAlign="center"
            >
              Vamos nessa? <br /> Então escolha seu continente
          </Text>
          </Box>

          <Box marginX={{ lg: "4.8660715rem", xl: "6.25rem" }}>
            <Carousel continents={continents} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allContinents = await fauna.query<FaunaDBData>(
    q.Map(
      q.Paginate(Documents(Collection('continents'))),
      q.Lambda(x => q.Get(x))
    ))

  const continents = allContinents.data.map((el) => {
    return {
      slug: el.data.slug,
      continent: el.data.continent,
      particularity: el.data.particularity,
      postcard: el.data.postcard,
      postcardInfo: el.data.postcardInfo,
      postcardPosition: el.data.postcardPosition
    }
  })

  return {
    props: { continents },
  };
};
