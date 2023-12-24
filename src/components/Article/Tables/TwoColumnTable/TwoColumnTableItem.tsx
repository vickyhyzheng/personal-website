import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"

export interface TwoColumnTableContent {
  header: string
  title: string
  description: string | ReactElement
}

export const TwoColumnTableItem = ({
  header,
  title,
  description,
}: TwoColumnTableContent) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: 4,
        flexDirection: "column",
        alignItems: "left",
        gap: 4,
        alignSelf: "stretch",
        borderRadius: "16px",
        border: "2px solid #EDEDED",
        background: "white",
        flex: "1 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          // alignSelf: "stretch",
          gap: 1.5,
        }}
      >
        <Typography variant="body1">{header}</Typography>
        <Typography variant="h2">{title}</Typography>
      </Box>
      {typeof description === "string" ? (
        <Typography variant="body2">{description}</Typography>
      ) : (
        description
      )}
    </Box>
  )
}
