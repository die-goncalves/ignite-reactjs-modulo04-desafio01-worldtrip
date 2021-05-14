import {
  Box,
  Text,
  Tooltip,
  Center,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type ContinentBioProps = {
  continent: string;
  countries: number;
  languages: number;
  description: string;
  mostVisitedCities: number;
};

export default function ContinentBio({
  continent,
  countries,
  languages,
  description,
  mostVisitedCities,
}: ContinentBioProps) {
  return (
    <SimpleGrid
      gap={{ base: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.5rem", xl: "2rem" }}
      minChildWidth={{ base: "100%", lg: "24.4375rem", xl: "35rem" }}
    >
      <Box>
        <Text
          fontWeight="400"
          fontSize={["0.875rem", "1.03125rem", "1.1875rem", "1.34375rem", "1.5rem"]}
          lineHeight={["1.3125rem", "1.546875rem", "1.78125rem", "2.015625rem", "2.25rem"]}
          textAlign="justify"
          color="brand.dark-head-text"
        >
          {description}
        </Text>
      </Box>

      <Center>
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontWeight="600"
            fontSize={["1.5rem", "1.875rem", "2.25rem", "2.625rem", "3rem"]}
            lineHeight={["2.25rem", "2.8125rem", "3.375rem", "3.9375rem", "4.5rem"]}
            color="brand.orange"
          >
            {countries}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={["1.125rem", "1.21875rem", "1.3125rem", "1.40625rem", "1.5rem"]}
            lineHeight={["1.6875rem", "1.828125rem", "1.96875rem", "2.109375rem", "2.25rem"]}
            color="brand.dark-head-text"
          >
            países
          </Text>
        </Box>
        <Spacer />
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontWeight="600"
            fontSize={["1.5rem", "1.875rem", "2.25rem", "2.625rem", "3rem"]}
            lineHeight={["2.25rem", "2.8125rem", "3.375rem", "3.9375rem", "4.5rem"]}
            color="brand.orange"
          >
            {languages}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={["1.125rem", "1.21875rem", "1.3125rem", "1.40625rem", "1.5rem"]}
            lineHeight={["1.6875rem", "1.828125rem", "1.96875rem", "2.109375rem", "2.25rem"]}
            color="brand.dark-head-text"
          >
            línguas
          </Text>
        </Box>
        <Spacer />
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontWeight="600"
            fontSize={["1.5rem", "1.875rem", "2.25rem", "2.625rem", "3rem"]}
            lineHeight={["2.25rem", "2.8125rem", "3.375rem", "3.9375rem", "4.5rem"]}
            color="brand.orange"
          >
            {mostVisitedCities}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={["1.125rem", "1.21875rem", "1.3125rem", "1.40625rem", "1.5rem"]}
            lineHeight={["1.6875rem", "1.828125rem", "1.96875rem", "2.109375rem", "2.25rem"]}
            color="brand.dark-head-text"
          >
            cidades +100
            <Tooltip
              hasArrow
              arrowSize={15}
              maxWidth="240px"
              borderRadius="5px"
              padding={4}
              textAlign="justify"
              label={`Cidades da ${continent} que estão presentes entre as 100 cidades mais visitadas do mundo.`}
              aria-label="A tooltip"
              bg="brand.dark-head-text"
              color="brand.light-info"
            >
              <InfoOutlineIcon
                fontSize={["0.625rem", "0.71875rem", "0.8125rem", "0.90625rem", "1rem"]}
                color="brand.dark-half-info"
                marginLeft={["0.3125rem", "0.390625rem", "0.46875rem", "0.546875rem", "0.625rem"]}
                transform="translateY(-12.5%)"
              />
            </Tooltip>
          </Text>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
