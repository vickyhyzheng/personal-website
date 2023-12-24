import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"

export interface TextTableContent {
  title: string
  description: string | ReactElement
}

export const TextTableItem = ({ title, description }: TextTableContent) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: 4,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        flex: "1 0 0",
      }}
    >
      <Typography variant="body2">{title}</Typography>
      {typeof description === "string" ? (
        <Typography variant="body1">{description}</Typography>
      ) : (
        description
      )}
    </Box>
  )
}
