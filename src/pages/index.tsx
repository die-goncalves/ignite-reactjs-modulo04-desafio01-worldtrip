import { Box, Flex, Divider, Center, Text, VStack, Image } from "@chakra-ui/react"
import TravelTypes from "../components/TravelTypes";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <Flex direction="column">
      <Flex position="relative">
        <Image src="/Background.svg" alt="background" />
        <Box position="absolute" maxWidth="50%" paddingLeft={32} paddingRight={12} top="50%" transform="translateY(-50%)">
          <VStack spacing={5} alignItems="flex-start">
            <Text as="h1" fontSize="2.25rem" fontWeight="500" lineHeight="3.375rem" color="brand.light-info">
              5 Continentes,<br />infinitas possibilidades.
            </Text>
            <Text as="p" fontSize="1.25rem" fontWeight="400" lineHeight="1.875rem" color="brand.light-head-text">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
        </Box>
        <Image src="/Airplane.svg" alt="airplane" position="absolute" maxWidth="50%" paddingLeft={12} paddingRight={32} right="0" top="50%" transform="translateY(-30%)" />
      </Flex >

      <Flex width="100%" marginBottom="2.5rem" marginX="auto" paddingX="8.75rem" direction="column">
        <TravelTypes />

        <Center marginBottom="3.25rem">
          <Divider width="5.625rem" height="0.125rem" background="brand.dark-head-text" />
        </Center>

        <VStack spacing="24px" marginBottom="3.25rem">
          <Text
            fontSize="2.25rem"
            fontWeight="500"
            lineHeight="3.375rem"
            color="brand.dark-head-text"
            textAlign="center"
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </VStack>

        <Box width="100%">
          <Carousel />
        </Box>
      </Flex>
    </Flex >
  )
}
