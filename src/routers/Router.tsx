import { createBrowserRouter } from "react-router-dom"
import { AboutMe, Home, Riot, BeHive, Triyo } from "../pages"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/riot",
    element: <Riot />,
  },
  {
    path: "/behive",
    element: <BeHive />,
  },
  {
    path: "/triyo",
    element: <Triyo />,
  },
])
