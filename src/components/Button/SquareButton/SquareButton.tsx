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
        width: isDesktop ? "auto" : "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          px: isDesktop ? "28px" : 0,
          py: "12px",
          borderRadius: isDesktop ? "7px" : "12px",
          background: "#1B1B1B",
          justifyContent: "center",
          width: isDesktop ? "auto" : "100%",
          "&:hover": isDesktop
            ? {
                px: "32px",
                py: "16px",
                borderRadius: "12px",
                m: "-4px",
                transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
              }
            : {},
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
