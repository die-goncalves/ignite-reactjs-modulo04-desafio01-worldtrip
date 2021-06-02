import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";

type HeaderProps = {
  goBackLink?: string;
}

export default function Header({ goBackLink }: HeaderProps) {
  const hasPath = (typeof goBackLink !== 'undefined');

  return (
    <Box as="header" maxWidth="1440px" marginX="auto">
      <Flex
        paddingY={["1rem", "1.1875rem", "1.375rem", "1.5625rem", "1.75rem"]}
        marginX={["1rem", "2.9375rem", "4.875rem", "6.8125rem", "8.75rem"]}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {hasPath && (
          <Link href={goBackLink} passHref>
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
          width={["5rem", "6.625rem", "8.25rem", "9.875rem", "11.5rem"]}
          height={["1.243125rem", "1.64625rem", "2.050625rem", "2.455rem", "2.859375rem"]}
          src="/Logo.svg"
          alt="worldtrip"
          ignoreFallback
        />
      </Flex>
    </Box>
  );
}
