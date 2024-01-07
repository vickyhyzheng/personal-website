import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"
import { Experience } from "../../../constants/experienceConstants"
import { RiotCard } from "../../Card/RiotCard"
import { TriyoCard } from "../../Card/TriyoCard"
import { BeHiveCard } from "../../Card/BeHiveCard"

const EXP_TO_CARD_MAPPING: Record<Experience, ReactElement> = {
  riot: <RiotCard />,
  triyo: <TriyoCard />,
  behive: <BeHiveCard />,
}

interface ArticleEndProps {
  otherArticles: Experience[]
}

export const ArticleEnd = ({ otherArticles }: ArticleEndProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "64px 96px 192px 96px",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        backgroundColor: "grey.light",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 4,
          alignSelf: "stretch",
        }}
      >
        <Typography variant="h5">Thanks For Reading!</Typography>
        <Box>
          <Typography display="inline" variant="body2">
            Want to work together?{" "}
          </Typography>
          <Typography
            display="inline"
            variant="body2"
            sx={{ "&:hover": { cursor: "pointer" } }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/vyzheng/",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          >
            <strong>
              <u>Let's connect 😃</u>
            </strong>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 6,
          alignSelf: "stretch",
          flexWrap: "wrap",
        }}
      >
        {otherArticles.map((article) => (
          <div key={article}>{EXP_TO_CARD_MAPPING[article]}</div>
        ))}
      </Box>
    </Box>
  )
}
