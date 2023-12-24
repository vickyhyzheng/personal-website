import { Box } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { IconButton } from "../Button/IconButton"
import HouseIcon from "../../assets/icons/house-small.svg"

export const HomeButton = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: "fixed",
        left: "50%",
        ml: "-32px",
        bottom: "10%",
      }}
    >
      <IconButton icon={HouseIcon} onClick={() => navigate("/")} />
    </Box>
  )
}
