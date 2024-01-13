import { Box, Typography } from "@mui/material"
import React, { useState } from "react"
import { useDesktop } from "../../../utils/useDesktop"

interface SquareButtonProps {
  text: string
  href: string
}

export const SquareButton = ({ text, href }: SquareButtonProps) => {
  const { isDesktop } = useDesktop()
  return (
    <a
      className="noselect"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        // width: isDesktop ? "auto" : "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          px: "28px",
          py: "12px",
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
  )
}
