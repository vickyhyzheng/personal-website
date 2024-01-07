import React from "react"

import "./App.css"

import { ThemeProvider, createTheme } from "@mui/material/styles"

import { muiTheme } from "./theme/muiTheme"
import { Router } from "./routers/Router"

const App = () => {
  return <Router />
}

export const AppContainer = () => {
  const theme = createTheme(muiTheme())
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default AppContainer
