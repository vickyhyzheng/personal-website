import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"
import { Experience } from "../../../constants/experienceConstants"
import { RiotCard } from "../../Card/RiotCard"
import { TriyoCard } from "../../Card/TriyoCard"
import { BeHiveCard } from "../../Card/BeHiveCard"
import { useDesktop } from "../../../utils/useDesktop"
import { ProjectCard } from "../../ProjectCard"
import { BlndCard } from "../../Card/BlndCard"
import { useProjectMapping } from "../../../utils/projectMapping"
import { useNavigate } from "react-router-dom"

const EXP_TO_CARD_MAPPING: Record<Experience, ReactElement> = {
  riot: <RiotCard />,
  triyo: <TriyoCard />,
  behive: <BeHiveCard />,
  blnd: <BlndCard />,
}

interface ArticleEndProps {
  otherArticles: Experience[]
}

const ArticleEndDesktop = ({ otherArticles }: ArticleEndProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "grey.light",
      }}
    >
      <Box
        sx={{
          m: "auto",
          mt: 8,
          mb: "192px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: "900px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
            // alignSelf: "stretch",
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
    </Box>
  )
}

const ArticleEndMobile = ({ otherArticles }: ArticleEndProps) => {
  const navigate = useNavigate()
  const { projectMap } = useProjectMapping()
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "grey.light",
        width: "100%",
      }}
    >
      <Box
        sx={{
          mx: 2,
          mt: 8,
          mb: "192px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          // maxWidth: "900px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          <Typography variant="h3">Thanks For Reading!</Typography>
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
            wordBreak: "break-word",
          }}
        >
          {otherArticles.map((article) => {
            const project = projectMap[article]
            return (
              <ProjectCard
                key={project.title}
                image={project.image}
                startDate={project.startDate}
                endDate={project.endDate}
                title={project.title}
                onClick={() => navigate(project.link)}
                ref={project.ref}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export const ArticleEnd = ({ otherArticles }: ArticleEndProps) => {
  const { isDesktop } = useDesktop()
  return isDesktop ? (
    <ArticleEndDesktop otherArticles={otherArticles} />
  ) : (
    <ArticleEndMobile otherArticles={otherArticles} />
  )
}
