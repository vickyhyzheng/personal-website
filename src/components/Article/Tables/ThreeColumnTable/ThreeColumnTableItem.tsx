import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"

export interface ThreeColumnTableContent {
  icon: any
  title: string
  description?: string | ReactElement
}

export const ThreeColumnTableItem = ({
  icon,
  title,
  description,
}: ThreeColumnTableContent) => {
  return (
    <Box
      sx={{
        display: "flex",
        px: 2,
        py: 4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        alignSelf: "stretch",
        borderRadius: "16px",
        border: `2px solid #EDEDED`,
        flex: "1 0 0",
        // minWidth: "373px",
        // minHeight: "397px",
      }}
    >
      <img src={icon} alt="icon" style={{ height: 64, width: 64 }} />
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" align="center">
          {description}
        </Typography>
      )}
    </Box>
  )
}
