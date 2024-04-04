import React, { useRef } from "react"

import { Box, Typography } from "@mui/material"
import { Sidebar } from "../../components/Sidebar"
import { ProjectCard } from "../../components/ProjectCard"
import RiotInternshipBanner from "../../assets/images/riot-internship-banner.png"
import BeHiveBanner from "../../assets/images/behive-banner.png"
import TriyoBanner from "../../assets/images/triyo-banner.png"
import BlndBanner from "../../assets/images/blnd-banner.png"
import { useNavigate } from "react-router-dom"
import { usePageTitle } from "../../utils/usePageTitle"
import { Card } from "../../components/Card"
import ProfileImage from "../../assets/images/face.png"
import { SquareButton } from "../../components/Button/SquareButton"

export const HomeMobile = () => {
  usePageTitle("Vicky Zheng | Mobile")
  const navigate = useNavigate()
  const riotRef = useRef<HTMLElement | null>(null)
  const behiveRef = useRef<HTMLElement | null>(null)
  const triyoRef = useRef<HTMLElement | null>(null)
  const blndRef = useRef<HTMLElement | null>(null)
  const projects = [
    {
      title: "Riot Games Internship",
      image: RiotInternshipBanner,
      startDate: "May 2023",
      endDate: "August 2023",
      link: "/riot",
      ref: riotRef,
    },
    {
      title: "BeHIVE: Designing Accountability",
      image: BeHiveBanner,
      startDate: "September 2022",
      endDate: "December 2022",
      link: "/behive",
      ref: behiveRef,
    },
    {
      title: "Triyosoft Analytics Internship",
      image: TriyoBanner,
      startDate: "January 2022",
      endDate: "August 2022",
      link: "/triyo",
      ref: triyoRef,
    },
    {
      title: "BLND Brand Redesign",
      image: BlndBanner,
      startDate: "December 2021",
      endDate: "January 2022",
      link: "/blnd",
      ref: blndRef,
    },
  ]
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: "32px 16px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "30px",
          alignSelf: "stretch",
        }}
      >
        <Card
          variant="text"
          image={ProfileImage}
          title="Hi 👋 I'm Vicky"
          description="Learn more about me"
          onClick={() => navigate("/about")}
        />
        <Box sx={{ gap: 1 }}>
          <Typography variant="body1">
            I'm a product designer who is passionate about creating experiences
            that delight the user. 🇨🇦
          </Typography>
          <Typography variant="body1">
            <strong>
              Previously @ <u>Riot Games</u>
            </strong>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            gap: 3,
          }}
        >
          <SquareButton text="Resume" href="/Vicky_Zheng_Resume.pdf" />
          <SquareButton
            text="Contact Me"
            href="mailto:vickyhy.zheng@gmail.com"
          />
        </Box>
        <Typography variant="h6">My Best Work 👇</Typography>
      </Box>
      <Box
        sx={{
          flex: "1 1 auto",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            pt: 4,
            px: "10px",
            pb: 8,
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
                ref={project.ref}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
