import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import { AboutMe, Home, Riot, BeHive, Triyo } from "../pages"
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/riot" element={<Riot />} />
        <Route path="/behive" element={<BeHive />} />
        <Route path="/triyo" element={<Triyo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
