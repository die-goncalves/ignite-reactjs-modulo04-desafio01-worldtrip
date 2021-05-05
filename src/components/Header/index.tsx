import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function Header() {
  const { asPath } = useRouter();

  const onHomePage = asPath === "/"
    ? true
    : false;

  return (
    <Flex
      as="header"
      paddingY="1.75rem"
      margin="0 8.75rem"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      { !onHomePage &&
        <Link href="/" passHref>
          <ChakraLink
            position="absolute"
            left="0"
            top="50%"
            boxSize={8}
            transform="translateY(-50%)"
          >
            <ChevronLeftIcon
              boxSize="full"
            />
          </ChakraLink>
        </Link>
      }
      <Image src="/Logo.svg" alt="worldtrip" />
    </Flex>
  )
}