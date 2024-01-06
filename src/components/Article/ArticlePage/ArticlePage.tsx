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
          mt: [12, 16],
          mx: "auto",
          // width: "50%",
          px: [2, "auto"],
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 12,
          // maxWidth: "1280px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
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
