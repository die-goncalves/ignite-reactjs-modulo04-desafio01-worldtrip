import {
  Box,
  Text,
  Tooltip,
  Flex,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type ContinentBioProps = {
  continent: string;
  countries: number;
  languages: number;
  description: string;
  mostVisitedCities: number;
}

export default function ContinentBio({ continent, countries, languages, description, mostVisitedCities }: ContinentBioProps) {
  return (
    <Flex>
      <Box
        maxWidth="50%"
      >
        <Text
          fontSize="1.5rem"
          fontWeight="400"
          lineHeight="2.25rem"
          textAlign="justify"
          color="brand.dark-head-text"
        >
          {description}
        </Text>
      </Box>

      <Center
        flex="1"
      >
        <Spacer />
        <Box fontWeight="600" textAlign="center">
          <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
            {countries}
          </Text>
          <Text
            fontSize="1.5rem"
            lineHeight="2.25rem"
            color="brand.dark-head-text"
          >
            Países
          </Text>
        </Box>
        <Spacer />
        <Box fontWeight="600" textAlign="center">
          <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
            {languages}
          </Text>
          <Text
            fontSize="1.5rem"
            lineHeight="2.25rem"
            color="brand.dark-head-text"
          >
            Línguas
          </Text>
        </Box>
        <Spacer />
        <Box fontWeight="600" textAlign="center">
          <Text fontSize="3rem" lineHeight="4.5rem" color="brand.orange">
            {mostVisitedCities}
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
              label={`Cidades da ${continent} que estão presentes entre as 100 cidades mais visitadas do mundo.`}
              aria-label="A tooltip"
              bg="brand.dark-head-text"
              color="brand.light-info"
            >
              <InfoOutlineIcon
                fontSize="1rem"
                color="brand.dark-half-info"
                marginLeft="0.625rem"
                transform="translateY(-12.5%)"
              />
            </Tooltip>
          </Text>
        </Box>
      </Center>
    </Flex >
  )
}