import React from "react"
import { Card } from "./Card"
import RiotLogo from "../../assets/images/riot-logo.png"
import { useNavigate } from "react-router-dom"

export const RiotCard = () => {
  const navigate = useNavigate()
  const tags = ["Internal Tools", "Global UX", "Internship"]
  return (
    <Card
      variant="tags"
      image={RiotLogo}
      title="Riot Games"
      tags={tags}
      onClick={() => navigate("/riot")}
    />
  )
}
