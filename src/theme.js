import { Playfair_Display } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "@next/font/google";
import { Zen_Antique } from "@next/font/google";

export const playfair_Display = Playfair_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: playfair_Display.style.fontFamily,
  },
});

export default theme;
