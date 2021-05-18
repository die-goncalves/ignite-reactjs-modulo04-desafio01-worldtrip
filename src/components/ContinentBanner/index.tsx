import {
  Flex,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";

type ContinentBannerProps = {
  chooseBanner: string;
  nameContinent: string;
}

export default function ContinentBanner({ chooseBanner, nameContinent }: ContinentBannerProps) {
  return (
    <Flex position="relative">
      <Image
        src={chooseBanner}
        alt="background"
        width="100%"
        height={["9.375rem", "14.0625rem", "18.75rem", "23.4375rem", "28.125rem"]}
        objectFit="cover"
        filter="brightness(60%) contrast(125%)"
        fallback={
          <Skeleton
            width="100%"
            height={["9.375rem", "14.0625rem", "18.75rem", "23.4375rem", "28.125rem"]}
            speed={1}
            endColor="brand.skeleton-endColor"
            startColor="brand.skeleton-startColor"
          />
        }
      />
      <Flex
        width="100%"
        height="100%"
        position="absolute"
        paddingX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
        alignItems={["center", "center", "flex-end"]}
        justifyContent={["center", "center", "flex-start"]}
      >
        <Text
          as="h1"
          fontSize={["1.75rem", "2.0625rem", "2.375rem", "2.6875rem", "3rem"]}
          fontWeight="600"
          lineHeight={{ base: "2.625rem", sm: "3.09375rem", md: "3.5625rem", lg: "4.03125rem", xl: "4.5rem" }}
          color="brand.light-info"
          paddingBottom={[0, 0, "2.9593rem", "3.3034rem", "3.6875rem"]}
        >
          {nameContinent}
        </Text>
      </Flex>
    </Flex >
  )
}