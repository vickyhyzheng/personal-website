import { Box } from "@mui/material"
import React from "react"
import { TextTableItem, TextTableContent } from "./TextTableItem"

export interface TextTableProps {
  contents: TextTableContent[]
}

export const TextTable = ({ contents }: TextTableProps) => {
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
        return <TextTableItem key={content.title} {...content} />
      })}
    </Box>
  )
}
