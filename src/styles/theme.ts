import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "90em",
});

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
      "skeleton-endColor": "rgba(45, 45, 45, 1)",
      "skeleton-startColor": "rgba(45, 45, 45, 0.75)",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "brand.light-info",
      },
    },
  },
  breakpoints,
});
