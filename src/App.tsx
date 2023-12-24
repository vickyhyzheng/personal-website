import React from "react"

import "./App.css"

import { ThemeProvider, createTheme } from "@mui/material/styles"

import { muiTheme } from "./theme/muiTheme"
import { RouterProvider } from "react-router-dom"
import { router } from "./routers/Router"

// const App = () => {
//   return (
//     <div>
//       <Typography variant="body1">Hello world</Typography>
//       <Typography variant="h1">Test</Typography>
//       <Typography variant="h2">Test</Typography>
//       <Typography variant="tag">Test</Typography>
//       <Typography variant="h5">Test</Typography>
//     </div>
//   )
// }

export const AppContainer = () => {
  const theme = createTheme(muiTheme())
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
  )
}

export default AppContainer
