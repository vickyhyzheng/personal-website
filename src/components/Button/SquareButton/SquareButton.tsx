import { Box, Typography } from "@mui/material"
import React, { useState } from "react"

interface SquareButtonProps {
  text: string
  href: string
}

export const SquareButton = ({ text, href }: SquareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleUnhover = () => {
    setIsHovered(false)
  }
  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      sx={
        {
          // p: "4px",
          // ":hover": {
          //   // padding: 0,
          //   ,
          // },
        }
      }
    >
      <a
        className="noselect"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          padding: 4,
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          gap: "10px",
          flexShrink: 0,
          textDecoration: "none",
          width: "100%",
          height: "100%",
          ...(isHovered && {
            transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
            padding: 0, // Example: Scale effect on hover
            /* Other hover styles */
          }),
          ...(!isHovered && {
            transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
          }),
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
    </Box>
  )
}
