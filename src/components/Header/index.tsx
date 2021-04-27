import { Flex, Icon, Image } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'

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
        <Icon as={FiChevronLeft} boxSize={8} position="absolute" left="0" />
      }
      <Image src="/Logo.svg" alt="worldtrip" />
    </Flex>
  )
}