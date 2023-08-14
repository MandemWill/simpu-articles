import { theme } from "@chakra-ui/react";

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
      teal: "#008080",
      red: "#FF0000",
      orange: "#FFA500",
      yellow: "#FFFF00",
      green: "#00FF00",
      black: "#111111",
      // Add more colors here
    },
    // Other theme settings
  };
  
  export default customTheme;