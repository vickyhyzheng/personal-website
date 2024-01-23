import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import { AboutMe, Riot, BeHive, Triyo, Blnd } from "../pages"
import { HomeContainer } from "../pages/Home"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/riot" element={<Riot />} />
        <Route path="/behive" element={<BeHive />} />
        <Route path="/triyo" element={<Triyo />} />
        <Route path="/blnd" element={<Blnd />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
