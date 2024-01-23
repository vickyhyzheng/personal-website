import React from "react"
import { Card } from "./Card"
import BlndLogo from "../../assets/images/blnd-logo.png"
import { useNavigate } from "react-router-dom"

interface BlndCard {
  onClick?: () => void
}

export const BlndCard = ({ onClick }: BlndCard) => {
  const navigate = useNavigate()
  const tags = ["Branding", "Graphic Design", "Competition"]
  return (
    <Card
      variant="tags"
      image={BlndLogo}
      title="BLND Redesign"
      tags={tags}
      onClick={() => {
        onClick ? onClick() : navigate("/Blnd")
      }}
    />
  )
}
