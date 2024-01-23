import React from "react"

import { Box } from "@mui/material"
import { Sidebar } from "../../components/Sidebar"
import { ProjectCard } from "../../components/ProjectCard"
import { useNavigate } from "react-router-dom"
import { usePageTitle } from "../../utils/usePageTitle"
import { useProjectMapping } from "../../utils/projectMapping"
import { Experience } from "../../constants/experienceConstants"

export const Home = () => {
  usePageTitle("Vicky Zheng | Home")
  const navigate = useNavigate()
  const { projectMap } = useProjectMapping()
  const projects: Experience[] = ["riot", "behive", "triyo", "blnd"]

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar projectMap={projectMap} />
      <Box
        sx={{
          flex: "1 1 auto",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 4,
            pt: "128px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "64px",
            alignSelf: "stretch",
            backgroundColor: "grey.light",
          }}
        >
          {projects.map((projectString) => {
            const project = projectMap[projectString]
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
