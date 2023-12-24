import { Box, Typography } from "@mui/material"
import React from "react"

interface TagProps {
  text: string
}

export const Tag = ({ text }: TagProps) => {
  return (
    <Box
      className="tag"
      sx={{
        px: "10px",
        py: "4px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1B1B1B",
        borderRadius: "4px",
      }}
    >
      <Typography variant="tag">{text}</Typography>
    </Box>
  )
}
