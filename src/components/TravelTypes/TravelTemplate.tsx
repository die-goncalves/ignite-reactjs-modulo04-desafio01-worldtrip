import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

type TravelTemplateProps = {
  src: string;
  alt: string;
  text: string;
  justify?: string;
};

export default function TravelTemplate({
  src,
  alt,
  text,
  justify,
}: TravelTemplateProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            src={src}
            alt={alt}
            boxSize={{ sm: "3.0625rem", md: "3.8125rem", lg: "4.5625rem", xl: "5.3125rem" }}
          />
          <Text
            marginTop={{ base: "0.75rem", md: "1rem", lg: "1.25rem", xl: "1.5rem" }}
            fontWeight="600"
            fontSize={{ base: "1.21875rem", md: "1.3125rem", lg: "1.40625rem", xl: "1.5rem" }}
            lineHeight={{ base: "1.828125rem", md: "1.96875rem", lg: "2.109375rem", xl: "2.25rem" }}
            color="brand.dark-head-text"
          >
            {text}
          </Text>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent={justify}>
          <Box
            boxSize="0.5rem"
            borderRadius="full"
            bg="brand.orange"
            marginRight="0.5rem"
            transform="translateY(25%)"
          />
          <Text
            fontWeight="500"
            fontSize="1.125rem"
            lineHeight="1.6875rem"
            color="brand.dark-head-text"
          >
            {text}
          </Text>
        </Flex>
      )}
    </>
  );
}
