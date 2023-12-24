import { TypographyStyleOptions } from "@mui/material/styles/createTypography"
import { fonts } from "./fonts"
import { PaletteColorOptions, ThemeOptions } from "@mui/material/styles"

declare module "@mui/material" {
  interface Color {
    light: string
    dark: string
    black: string
    white: string
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    tag: TypographyStyleOptions
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tag?: TypographyStyleOptions
  }

  interface PaletteOptions {
    yellow: PaletteColorOptions
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tag: true
  }
}

export function muiTheme(): ThemeOptions {
  const typography = fonts
  return {
    typography,
    palette: {
      grey: {
        light: "#F1F1F1",
        dark: "#8D8D8D",
        black: "#1B1B1B",
        white: "#FFFFFF",
      },
      yellow: {
        dark: "#FFCA42",
        light: "#FFF1CC",
      },
    },
  }
}
