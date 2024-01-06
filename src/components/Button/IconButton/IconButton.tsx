import { Box } from "@mui/material"
import React from "react"

interface IconButtonProps {
  icon: string
  onClick: () => void
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "63px",
        opacity: 0.5,
        backgroundColor: "grey.black",
        boxShadow: "3px 2px 4px 0px rgba(0, 0, 0, 0.15)",
        transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        ":hover": {
          cursor: "pointer",
          opacity: 1,
          transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        },
      }}
    >
      <img
        src={icon}
        alt="icon"
        style={{
          height: 32,
          width: 32,
          filter: "brightness(0) invert(1)",
        }}
      />
    </Box>
  )
}
