import React, { forwardRef, ForwardedRef } from "react"
import { Box, Typography } from "@mui/material"

interface ArticleHeaderProps {
  sectionType: string
  title: string
  children: React.ReactNode
}

export const ArticleHeader = forwardRef(
  (
    { sectionType, title, children }: ArticleHeaderProps,
    ref: ForwardedRef<any>
  ) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
        }}
        ref={ref}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography variant="h6" sx={{ color: "grey.dark" }}>
            {sectionType}
          </Typography>
          <Typography variant="h4" sx={{ wordBreak: "break-word" }}>
            {title}
          </Typography>
        </Box>
        <Box>{children}</Box>
      </Box>
    )
  }
)
