import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"
import { useDesktop } from "../../../utils/useDesktop"

interface HighlightProps {
  icon: any
  title: string
  content: ReactElement
}

export const Highlight = ({ icon, title, content }: HighlightProps) => {
  const { isDesktop } = useDesktop()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: [4],
        gap: [2, 8],
        border: "4px solid black",
        borderRadius: "12px",
        backgroundColor: "white",
        flexWrap: ["wrap", "nowrap"],
      }}
    >
      <img
        src={icon}
        alt="icon"
        width={isDesktop ? 116 : 96}
        height={isDesktop ? 116 : 96}
        style={{ borderRadius: "50%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
          overflowWrap: "break-word",
        }}
      >
        <Typography variant="h5" sx={{ wordBreak: "break-word" }}>
          {title}
        </Typography>
        {content}
      </Box>
    </Box>
  )
}
