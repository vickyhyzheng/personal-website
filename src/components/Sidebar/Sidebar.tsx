import { Box, Typography } from "@mui/material"
import React from "react"
import { Card } from "../Card"
import ProfileImage from "../../assets/images/face.png"
import { useNavigate } from "react-router-dom"
import { SquareButton } from "../Button/SquareButton"
import { RiotCard } from "../Card/RiotCard"
import { BeHiveCard } from "../Card/BeHiveCard"
import { TriyoCard } from "../Card/TriyoCard"
import { skipToSection } from "../../utils/skipToSection"
import { BlndCard } from "../Card/BlndCard"

interface Sidebar {
  projectMap: Record<string, Record<string, any>>
}

export const Sidebar = ({ projectMap }: Sidebar) => {
  const navigate = useNavigate()
  const intro =
    "I'm a product designer who is passionate about creating experiences that delight the user. 🇨🇦"

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "432px",
        width: "432px",
        p: 4,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignSelf: "stretch",
        backgroundColor: "grey.white",
        position: "sticky",
        maxHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
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
        <Box>
          <Typography variant="body1">{intro}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
          <SquareButton
            text="Contact Me"
            href="mailto:vickyhy.zheng@gmail.com"
          />
          <SquareButton text="Resume" href="/Vicky_Zheng_Resume.pdf" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        <Typography variant="h6">My Best Work 👇</Typography>
        <RiotCard
          onClick={() => {
            skipToSection(projectMap["riot"].ref)
          }}
        />
        <BeHiveCard
          onClick={() => {
            skipToSection(projectMap["behive"].ref)
          }}
        />
        <TriyoCard
          onClick={() => {
            skipToSection(projectMap["triyo"].ref)
          }}
        />
        <BlndCard
          onClick={() => {
            skipToSection(projectMap["blnd"].ref)
          }}
        />
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        <Typography variant="body1">
          Want to learn more about my experiences? Let's connect!
        </Typography>
        <Card
          variant="text"
          image={CalendarSmall}
          title="Schedule a call"
          description="Via Calendly"
          isIcon
          onClick={() => {
            window.open(
              "https://calendly.com/vyzhng/vicky-zheng-1-1",
              "_blank",
              "noopener,noreferrer"
            )
          }}
        />
      </Box> */}
    </Box>
  )
}
