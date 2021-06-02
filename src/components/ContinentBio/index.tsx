import {
  Box,
  Center,
  Text,
  Tooltip,
  SimpleGrid,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  CloseButton,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import React from "react";

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
  const initialFocusRef = React.useRef();

  return (
    <SimpleGrid
      gap={{ base: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.5rem", xl: "2rem" }}
      minChildWidth={{ base: "100%", lg: "23.75rem", xl: "34.5rem" }}
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
            fontSize={["1.75rem", "2.0625rem", "2.375rem", "2.6875rem", "3rem"]}
            lineHeight={["2.625rem", "3.09375rem", "3.5625rem", "4.03125rem", "4.5rem"]}
            color="brand.orange"
          >
            {countries}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={["0.875rem", "1.03125rem", "1.1875rem", "1.34375rem", "1.5rem"]}
            lineHeight={["1.3125rem", "1.546875rem", "1.78125rem", "2.015625rem", "2.25rem"]}
            color="brand.dark-head-text"
          >
            países
          </Text>
        </Box>
        <Spacer />
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontWeight="600"
            fontSize={["1.75rem", "2.0625rem", "2.375rem", "2.6875rem", "3rem"]}
            lineHeight={["2.625rem", "3.09375rem", "3.5625rem", "4.03125rem", "4.5rem"]}
            color="brand.orange"
          >
            {languages}
          </Text>
          <Text
            fontWeight={{ base: "400", md: "600" }}
            fontSize={["0.875rem", "1.03125rem", "1.1875rem", "1.34375rem", "1.5rem"]}
            lineHeight={["1.3125rem", "1.546875rem", "1.78125rem", "2.015625rem", "2.25rem"]}
            color="brand.dark-head-text"
          >
            línguas
          </Text>
        </Box>
        <Spacer />
        <Box textAlign={{ base: "left", md: "center" }}>
          <Text
            fontWeight="600"
            fontSize={["1.75rem", "2.0625rem", "2.375rem", "2.6875rem", "3rem"]}
            lineHeight={["2.625rem", "3.09375rem", "3.5625rem", "4.03125rem", "4.5rem"]}
            color="brand.orange"
          >
            {mostVisitedCities}
          </Text>
          <Box display="flex" alignItems="center">
            <Text
              fontWeight={{ base: "400", md: "600" }}
              fontSize={["0.875rem", "1.03125rem", "1.1875rem", "1.34375rem", "1.5rem"]}
              lineHeight={["1.3125rem", "1.546875rem", "1.78125rem", "2.015625rem", "2.25rem"]}
              color="brand.dark-head-text"
            >
              cidades +100
            </Text>
            <Center display={["none", "initial"]}>
              <Tooltip
                borderRadius="0px"
                padding={4}
                fontWeight="400"
                fontSize={["0.875rem", "0.825rem", "0.95rem", "1.075rem", "1.2rem"]}
                lineHeight={["1.3125rem", "1.2375rem", "1.425rem", "1.6125rem", "1.8rem"]}
                textAlign="justify"
                label={`Cidades da ${continent} que estão presentes entre as 100 cidades mais visitadas do mundo.`}
                placement="bottom-end"
                aria-label="A tooltip"
                bg="#41494A"
                color="brand.light-info"
                arrowPadding={0}
              >
                <InfoOutlineIcon
                  fontSize={["0.625rem", "0.71875rem", "0.8125rem", "0.90625rem", "1rem"]}
                  color="brand.dark-half-info"
                  marginLeft={["0.3125rem", "0.390625rem", "0.46875rem", "0.546875rem", "0.625rem"]}
                  marginBottom="0.1rem"
                />
              </Tooltip>
            </Center>
            <Center display={["initial", "none"]}>
              <Popover
                initialFocusRef={initialFocusRef}
                placement="bottom"
                strategy="fixed"
                preventOverflow={true}
                closeOnBlur={false}
              >
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <InfoOutlineIcon
                        fontSize="0.625rem"
                        color="brand.dark-half-info"
                        marginLeft="0.3125rem"
                        marginBottom="0.15rem"
                      />
                    </PopoverTrigger>
                    <PopoverContent
                      maxWidth="240px"
                      borderRadius="5px"
                      border="none"
                      textAlign="justify"
                      bg="#41494A"
                      color="brand.light-info"
                      fontSize="0.875rem"
                      lineHeight="1.3125rem"
                      _focus={{ boxShadow: "0 0 0 1.5px rgba(66, 153, 225, 0.6)" }}
                    >
                      <PopoverArrow bg="#41494A" />
                      <PopoverHeader
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="0.6rem"
                      >
                        <Text fontWeight="600">Cidades +100</Text>
                        <CloseButton
                          size="sm"
                          borderRadius="full"
                          ref={initialFocusRef}
                          onClick={onClose}
                          _focus={{ boxShadow: "0 0 0 1.5px rgba(66, 153, 225, 0.6)" }}
                        />
                      </PopoverHeader>
                      <PopoverBody padding="0.6rem">{`Cidades da ${continent} que estão presentes entre as 100 cidades mais visitadas do mundo.`}</PopoverBody>
                    </PopoverContent>
                  </>
                )}
              </Popover>
            </Center>
          </Box>
        </Box>

      </Center>
    </SimpleGrid >
  );
}
