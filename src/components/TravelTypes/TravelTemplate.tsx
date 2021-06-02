import { Box, Flex, Image, Text } from "@chakra-ui/react";

type TravelTemplateProps = {
  src: string;
  alt: string;
  text: string;
};

export default function TravelTemplate({
  src,
  alt,
  text,
}: TravelTemplateProps) {
  return (
    <Flex direction={[null, "column"]} alignItems="center" justifyContent={[null, "center"]}>
      <Image
        display={["none", "initial"]}
        src={src}
        alt={alt}
        boxSize={{ sm: "3.0625rem", md: "3.8125rem", lg: "4.5625rem", xl: "5.3125rem" }}
        ignoreFallback
      />
      <Box
        display={["initial", "none"]}
        boxSize="0.5rem"
        borderRadius="full"
        bg="brand.orange"
        marginRight="0.5rem"
        transform="translateY(25%)"
      />
      <Text
        textAlign={[null, "center"]}
        marginTop={[null, "0.75rem", "1rem", "1.25rem", "1.5rem"]}
        fontWeight={["500", "600"]}
        fontSize={["1.125rem", "1.17rem", "1.3125rem", "1.40625rem", "1.5rem"]}
        lineHeight={["1.6875rem", "1.828125rem", "1.96875rem", "2.109375rem", "2.25rem"]}
        color="brand.dark-head-text"
      >
        {text}
      </Text>
    </Flex>
  );
}
