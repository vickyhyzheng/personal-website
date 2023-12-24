import React from "react"
import { Card } from "./Card"
import BeHiveLogo from "../../assets/images/behive.svg"
import { useNavigate } from "react-router-dom"

export const BeHiveCard = () => {
  const navigate = useNavigate()
  const tags = ["Mobile App", "Design System", "End to End"]
  return (
    <Card
      variant="tags"
      image={BeHiveLogo}
      title="BeHIVE"
      tags={tags}
      onClick={() => navigate("/behive")}
    />
  )
}
