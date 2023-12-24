import { Box, Typography } from "@mui/material"
import React from "react"

interface ArticlePageProps {
  title: string
  subtitle: string
  bannerImage: string
  children: React.ReactNode
}

export const ArticlePage = ({
  title,
  subtitle,
  bannerImage,
  children,
}: ArticlePageProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.white",
      }}
    >
      <Box
        sx={{
          px: 12,
          py: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body2">{subtitle}</Typography>
        </Box>
        <img
          src={bannerImage}
          alt="banner"
          width="100%"
          style={{ borderRadius: "16px" }}
        />
        {children}
      </Box>
    </Box>
  )
}
