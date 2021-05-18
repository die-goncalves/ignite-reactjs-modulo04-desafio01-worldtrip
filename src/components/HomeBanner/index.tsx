import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export default function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex position="relative" width="100%" maxW="1440px" marginX="auto">
      <Image
        width="100%"
        height={["10.25rem", "12.921875rem", "15.59375rem", "18.265625rem", "20.9375rem"]}
        src="/Background.svg"
        alt="background"
        objectFit="cover"
        ignoreFallback
      />
      <Flex
        width="100%"
        height="100%"
        position="absolute"
        paddingX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
        justifyContent="space-between"
      >
        <Flex marginY="auto">
          <VStack
            spacing={["0.5rem", "0.6875rem", "0.875rem", "1.0625rem", "1.25rem"]}
            alignItems="flex-start"
            maxWidth={{ base: "100%", xl: "35rem" }}
          >
            <Text
              as="h1"
              fontSize={["1.25rem", "1.5rem", "1.75rem", "2rem", "2.25rem"]}
              fontWeight="500"
              lineHeight={["1.875rem", "2.25rem", "2.625rem", "3rem", "3.375rem"]}
              color="brand.light-info"
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Text>
            <Text
              as="p"
              fontSize={["0.875rem", "0.96875rem", "1.0625rem", "1.15625rem", "1.25rem"]}
              fontWeight="400"
              lineHeight={["1.3125rem", "1.453125rem", "1.59375rem", "1.734375rem", "1.875rem"]}
              color="brand.light-head-text"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
          </VStack>
        </Flex>
        {isWideVersion &&
          <Flex
            position="relative"
            minWidth={{ base: "13.0625rem", lg: "19.59375rem", xl: "26.125rem" }}
            alignItems="flex-end"
          >
            <Image
              src="/Airplane.svg"
              alt="airplane"
              position="absolute"
              bottom="0"
              transform="translateY(15%)"
              ignoreFallback
            />
          </Flex>
        }
      </Flex>
    </Flex>
  );
}
