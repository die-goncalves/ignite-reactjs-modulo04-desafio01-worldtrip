import { Box, Flex, SimpleGrid, Divider, Center, Text, VStack, Image } from "@chakra-ui/react"

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination]);

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
        <SimpleGrid marginY="5rem" flex="1" gap="4" minChildWidth={160} alignItems="flex-start">
          <Box>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Image src="/cocktail.svg" alt="cocktail" boxSize="5.3125rem" />
              <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">vida noturna</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Image src="/surf.svg" alt="surf" boxSize="5.3125rem" />
              <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">praia</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Image src="/building.svg" alt="building" boxSize="5.3125rem" />
              <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">moderno</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Image src="/museum.svg" alt="museum" boxSize="5.3125rem" />
              <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">clássico</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" alignItems="center" justifyContent="center">
              <Image src="/earth.svg" alt="earth" boxSize="5.3125rem" />
              <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">e mais...</Text>
            </Flex>
          </Box>
        </SimpleGrid>

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
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="prague" width="100%" height="28.125rem" objectFit="cover" objectPosition="0% 40%" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">Europa</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente mais antigo</Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" alt="kenya" width="100%" height="28.125rem" objectFit="cover" objectPosition="0% 60%" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">África</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente considerado o berço da humanidade</Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80" alt="new-zealand" width="100%" height="28.125rem" objectFit="cover" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">Oceania</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente com a maior concentração de ilhas</Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1551829714-729df766a145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1429&q=80" alt="yellow-mountains" width="100%" height="28.125rem" objectFit="cover" objectPosition="0% 80%" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">Ásia</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente considerado o berço das civilizações</Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1617426778252-70fde8950b32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="grand-canyon" width="100%" height="28.125rem" objectFit="cover" objectPosition="0% 20%" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">América do norte</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente com a maior ilha do mundo</Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex position="relative">
                <Image src="https://images.unsplash.com/photo-1530999811698-221aa9eb1739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80" alt="machu-picchu" width="100%" height="28.125rem" objectFit="cover" />
                <Box position="absolute" textAlign="center" top="50%" left="50%" transform="translate(-50%, -50%)">
                  <Text as="h1" fontSize="3rem" fontWeight="700" lineHeight="4.5rem" color="brand.light-info">América do sul</Text>
                  <Text as="p" fontSize="1.5rem" fontWeight="700" lineHeight="2.25rem" color="brand.light-head-text">O continente com uma das maiores bacias hidrográficas do mundo</Text>
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Flex >
  )
}
