import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

// Swiper
import '../styles/custom-swiper.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
