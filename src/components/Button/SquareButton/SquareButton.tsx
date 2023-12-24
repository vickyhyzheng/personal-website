import { Box, Typography } from "@mui/material"
import React from "react"

interface SquareButtonProps {
  text: string
  href: string
}

export const SquareButton = ({ text, href }: SquareButtonProps) => {
  return (
    <a
      className="noselect"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        padding: 0.5,
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "flex-start",
        gap: "10px",
        flexShrink: 0,
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          px: "28px",
          py: "12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flex: "1 0 0",
          alignSelf: "stretch",
          borderRadius: "7px",
          background: "#1B1B1B",
        }}
      >
        <Typography variant="body1" sx={{ color: "grey.white" }}>
          {text}
        </Typography>
      </Box>
    </a>
  )
}
