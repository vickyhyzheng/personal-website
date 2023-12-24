import { Box } from "@mui/material"
import React from "react"
import { TwoColumnTableContent, TwoColumnTableItem } from "./TwoColumnTableItem"

export interface TwoColumnTableProps {
  contents: TwoColumnTableContent[]
}

export const TwoColumnTable = ({ contents }: TwoColumnTableProps) => {
  if (!contents) {
    return <></>
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        // m: "20px",
        gap: 4,
        width: "100%",
        flexShrink: 0,

        // justifyContent: "space-between",
      }}
    >
      {contents.map((content) => {
        return <TwoColumnTableItem key={content.title} {...content} />
      })}
    </Box>
  )
}
