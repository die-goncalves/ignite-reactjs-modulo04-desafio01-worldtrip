import { ChakraProvider } from '@chakra-ui/react'
import Header from "../components/Header";
import { theme } from '../styles/theme'

// Swiper
import '../styles/custom-swiper.scss'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
