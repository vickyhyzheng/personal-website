import { Box, Typography } from "@mui/material"
import React, { useState } from "react"

interface SquareButtonProps {
  text: string
  href: string
}

export const SquareButton = ({ text, href }: SquareButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
      }}
    >
      <a
        className="noselect"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          gap: "10px",
          flexShrink: 0,
          textDecoration: "none",
          height: "100%",
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
            "&:hover": {
              px: "32px",
              py: "16px",
              borderRadius: "12px",
              m: "-4px",
              transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
            },
            transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
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
