import { Box, Typography } from "@mui/material"
import React from "react"

interface ArticleSubsectionProps {
  title: string
  children: React.ReactNode
}

export const ArticleSubsection = ({
  title,
  children,
}: ArticleSubsectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {children}
    </Box>
  )
}
