import React from "react"
import { Card } from "./Card"
import BeHiveLogo from "../../assets/images/behive.svg"
import { useNavigate } from "react-router-dom"

interface BeHiveCard {
  onClick?: () => void
}

export const BeHiveCard = ({ onClick }: BeHiveCard) => {
  const navigate = useNavigate()
  const tags = ["Mobile App", "Design System", "End to End"]
  return (
    <Card
      variant="tags"
      image={BeHiveLogo}
      title="BeHIVE"
      tags={tags}
      onClick={() => {
        onClick ? onClick() : navigate("/behive")
      }}
    />
  )
}
