import React from "react"
import { Card } from "./Card"
import TriyoLogo from "../../assets/images/triyo.svg"
import { useNavigate } from "react-router-dom"

interface TriyoCard {
  onClick?: () => void
}

export const TriyoCard = ({ onClick }: TriyoCard) => {
  const navigate = useNavigate()
  const tags = ["Web Design", "Design System", "Internship"]
  return (
    <Card
      variant="tags"
      image={TriyoLogo}
      title="TRIYO"
      tags={tags}
      onClick={() => {
        onClick ? onClick() : navigate("/triyo")
      }}
    />
  )
}
