import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"

interface HighlightProps {
  icon: any
  title: string
  content: ReactElement
}

export const Highlight = ({ icon, title, content }: HighlightProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 8,
        gap: 8,
        border: "4px solid black",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <img
        src={icon}
        alt="icon"
        width={116}
        height={116}
        style={{ borderRadius: "50%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        {content}
      </Box>
    </Box>
  )
}
