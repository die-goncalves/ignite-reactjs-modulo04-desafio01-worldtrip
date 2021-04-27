import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      "orange": "#FFBA08",
      "half-orange": "rgba(255, 186, 8, 0.5)",
      "dark-head-text": "#47585B",
      "dark-info": "#999999",
      "dark-half-info": "rgba(153, 153, 153, 0.5)",
      "light-head-text": "#DADADA",
      "light-info": "#F5F8FA",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.light-info',
      }
    }
  }
})