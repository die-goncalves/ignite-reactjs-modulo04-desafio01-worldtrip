import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function Header() {
  const { asPath } = useRouter();

  const onHomePage = asPath === "/" ? true : false;

  return (
    <Box as="header" maxWidth="1440px" marginX="auto">
      <Flex
        paddingY={["1rem", "1.1875rem", "1.375rem", "1.5625rem", "1.75rem"]}
        marginX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {!onHomePage && (
          <Link href="/" passHref>
            <ChakraLink
              display="flex"
              position="absolute"
              left="0"
              top="50%"
              boxSize={["1rem", "1.25rem", "1.5rem", "1.75rem", "2rem"]}
              transform="translateY(-50%)"
            >
              <ChevronLeftIcon boxSize="full" />
            </ChakraLink>
          </Link>
        )}
        <Image
          src="/Logo.svg"
          alt="worldtrip"
          width={["5rem", "6.625rem", "8.25rem", "9.875rem", "11.5rem"]}
        />
      </Flex>
    </Box>
  );
}
