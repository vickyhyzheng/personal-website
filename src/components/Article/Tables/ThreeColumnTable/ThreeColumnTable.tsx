import { Box } from "@mui/material"
import React from "react"
import {
  ThreeColumnTableContent,
  ThreeColumnTableItem,
} from "./ThreeColumnTableItem"

export interface ThreeColumnTableProps {
  contents: ThreeColumnTableContent[]
}

export const ThreeColumnTable = ({ contents }: ThreeColumnTableProps) => {
  if (!contents) {
    return <></>
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        // m: "20px",
        gap: 8,
        width: "100%",
        flexShrink: 0,
        // justifyContent: "space-between",
      }}
    >
      {contents.map((content) => {
        return <ThreeColumnTableItem key={content.title} {...content} />
      })}
    </Box>
  )
}
