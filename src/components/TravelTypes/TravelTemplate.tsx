import { Box, Flex, Image, Text } from "@chakra-ui/react"

type TravelTemplateProps = {
  src: string;
  alt: string;
  text: string;
}

export default function TravelTemplate({ src, alt, text }: TravelTemplateProps) {
  return (
    <Box>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Image src={src} alt={alt} boxSize="5.3125rem" />
        <Text marginTop="6" fontWeight="600" fontSize="2xl" lineHeight="9" color="brand.dark-head-text">{text}</Text>
      </Flex>
    </Box>
  )
}