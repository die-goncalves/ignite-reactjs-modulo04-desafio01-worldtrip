import Link from 'next/link'
import { Flex, Text, Image, Box } from "@chakra-ui/react"

type SlideProps = {
  link: string;
  src: string;
  alt: string;
  position?: string;
  continent: string;
  particularity: string;
}

export default function Slide({
  link,
  src,
  alt,
  position,
  continent,
  particularity
}: SlideProps) {
  return (
    <Flex position="relative">
      <Link href={link}>
        <a role="group">
          <Image
            src={src}
            alt={alt}
            width="100%"
            height="28.125rem"
            objectFit="cover"
            objectPosition={position}
            transition="0.75s"
            _groupHover={{
              transform: "scale(1.025)",
            }}
          />

          <Box
            position="absolute"
            textAlign="center"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text
              as="h1"
              fontSize="3rem"
              fontWeight="700"
              lineHeight="4.5rem"
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
              fontSize="1.5rem"
              fontWeight="700"
              lineHeight="2.25rem"
              color="brand.light-head-text"
              transition="0.75s"
              _groupHover={{
                color: "brand.orange",
              }}
            >
              {particularity}
            </Text>
          </Box>
        </a>
      </Link>
    </Flex>
  )
}
