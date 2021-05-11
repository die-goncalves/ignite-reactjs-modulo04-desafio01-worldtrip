import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex width="100%" position="relative">
      <Image
        width="100%"
        height={{ base: "10.25rem", sm: "20.9375rem" }}
        src="/Background.svg"
        alt="background"
        objectFit="cover"
      />
      <Box
        display="flex"
        position="absolute"
        maxWidth={{ sm: "50%" }}
        paddingLeft={{ base: "1rem", sm: "8.75rem" }}
        paddingRight={{ base: "1rem" }}
        top="50%"
        transform="translateY(-50%)"
      >
        <VStack
          spacing={{ base: "0.5rem", sm: "1.25rem" }}
          alignItems="flex-start"
        >
          <Text
            as="h1"
            fontSize={{ base: "1.25rem", sm: "2.25rem" }}
            fontWeight="500"
            lineHeight={{ base: "1.875rem", sm: "3.375rem" }}
            color="brand.light-info"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text
            as="p"
            fontSize={{ base: "0.875rem", sm: "1.25rem" }}
            fontWeight="400"
            lineHeight={{ base: "1.3125rem", sm: "1.875rem" }}
            color="brand.light-head-text"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
      </Box>

      {isWideVersion && (
        <Image
          src="/Airplane.svg"
          alt="airplane"
          position="absolute"
          maxWidth="50%"
          paddingLeft={12}
          paddingRight={32}
          right="0"
          top="50%"
          transform="translateY(-30%)"
        />
      )}
    </Flex>
  );
}
