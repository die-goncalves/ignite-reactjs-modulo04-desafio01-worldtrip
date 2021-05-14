import Link from "next/link";
import {
  Box,
  Image,
  Link as ChakraLink,
  Skeleton,
  Text,
} from "@chakra-ui/react";

type SlideProps = {
  link: string;
  src: string;
  alt: string;
  position: string;
  continent: string;
  particularity: string;
};

export default function Slide({
  link,
  src,
  alt,
  position,
  continent,
  particularity,
}: SlideProps) {
  return (
    <Link href={`/continent/${link}`} passHref>
      <ChakraLink role="group">
        <Box position="relative">
          <Image
            src={src}
            alt={alt}
            width="100%"
            height={["15.625rem", "18.75rem", "21.875rem", "25rem", "28.125rem"]}
            objectFit="cover"
            objectPosition={position}
            transition="0.75s"
            _groupHover={{
              transform: "scale(1.025)",
            }}
            fallback={
              <Skeleton
                width="100%"
                height={["15.625rem", "18.75rem", "21.875rem", "25rem", "28.125rem"]}
                speed={1}
                endColor="brand.skeleton-endColor"
                startColor="brand.skeleton-startColor"
              />
            }
          />

          <Box
            width={{ base: "72.5%", sm: "80%" }}
            position="absolute"
            textAlign="center"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text
              as="h1"
              fontSize={["1.5rem", "1.875rem", "2.25rem", "2.625rem", "3rem"]}
              fontWeight="700"
              lineHeight={["2.25rem", "2.8125rem", "3.375rem", "3.9375rem", "4.5rem"]}
              color="brand.light-info"
              transition="0.75s"
              _groupHover={{
                color: "brand.orange",
              }}
            >
              {continent}
            </Text>
            <Text
              as="p"
              fontSize={["0.875rem", "1.03125rem", "1.1875rem", "1.34375rem", "1.5rem"]}
              fontWeight="700"
              lineHeight={["1.3125rem", "1.546875rem", "1.78125rem", "2.015625rem", "2.25rem"]}
              color="brand.light-head-text"
              transition="0.75s"
              _groupHover={{
                color: "brand.orange",
              }}
            >
              {particularity}
            </Text>
          </Box>
        </Box>
      </ChakraLink>
    </Link>
  );
}
