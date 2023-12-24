import React from "react"

import { Box } from "@mui/material"
import { Sidebar } from "../components/Sidebar"
import { ProjectCard } from "../components/ProjectCard"
import RiotInternshipBanner from "../assets/images/riot-internship-banner.png"
import BeHiveBanner from "../assets/images/behive-banner.png"
import TriyoBanner from "../assets/images/triyo-banner.png"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  const projects = [
    {
      title: "Riot Games Internship",
      image: RiotInternshipBanner,
      startDate: "May 2023",
      endDate: "August 2023",
      link: "/riot",
    },
    {
      title: "BeHIVE: Designing Accountability",
      image: BeHiveBanner,
      startDate: "September 2022",
      endDate: "December 2022",
      link: "/behive",
    },
    {
      title: "Triyosoft Analytics Internship",
      image: TriyoBanner,
      startDate: "January 2022",
      endDate: "August 2022",
      link: "/triyo",
    },
  ]
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar />
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
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "64px",
            alignSelf: "stretch",
            backgroundColor: "grey.light",
          }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                image={project.image}
                startDate={project.startDate}
                endDate={project.endDate}
                title={project.title}
                onClick={() => navigate(project.link)}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
