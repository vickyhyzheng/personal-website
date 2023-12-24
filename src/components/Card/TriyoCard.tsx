import React from "react"
import { Card } from "./Card"
import TriyoLogo from "../../assets/images/triyo.svg"
import { useNavigate } from "react-router-dom"

export const TriyoCard = () => {
  const navigate = useNavigate()
  const tags = ["Web Design", "Design System", "Internship"]
  return (
    <Card
      variant="tags"
      image={TriyoLogo}
      title="TRIYO"
      tags={tags}
      onClick={() => navigate("/triyo")}
    />
  )
}
