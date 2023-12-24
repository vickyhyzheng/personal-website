import { Box, Typography } from "@mui/material"
import React from "react"
import ArrowRight from "../../assets/icons/arrow-right-small.svg"

interface ProjectCardProps {
  image: string
  startDate: string
  endDate: string
  title: string
  onClick: () => void
}

export const ProjectCard = ({
  image,
  startDate,
  endDate,
  title,
  onClick,
}: ProjectCardProps) => {
  const dateString = `${startDate} - ${endDate}`
  return (
    <Box
      className="noselect"
      onClick={onClick}
      sx={{
        display: "flex",
        borderRadius: "16px",
        backgroundColor: "grey.white",
        width: "100%",
        ":hover": {
          cursor: "pointer",
          boxShadow: "0px 10px 32px 0px #FFF",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: "10px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1.5,
          width: "100%",
        }}
      >
        <img
          src={image}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "10px",
            backgroundColor: "grey.light",
            width: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            py: 1.5,
            px: 2,
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <Typography variant="body1" sx={{ color: "grey.dark" }}>
              {dateString}
            </Typography>
            <Typography variant="h2">{title}</Typography>
          </Box>
          <img src={ArrowRight} style={{ width: 32, height: 32 }} />
        </Box>
      </Box>
    </Box>
  )
}
