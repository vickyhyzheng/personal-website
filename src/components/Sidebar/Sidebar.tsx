import { Box, Typography } from "@mui/material"
import React from "react"
import { Card } from "../Card"
import ProfileImage from "../../assets/images/pfp.png"
import { useNavigate } from "react-router-dom"
import { SquareButton } from "../Button/SquareButton"
import { RiotCard } from "../Card/RiotCard"
import { BeHiveCard } from "../Card/BeHiveCard"
import { TriyoCard } from "../Card/TriyoCard"
import { skipToSection } from "../../utils/skipToSection"
import { BlndCard } from "../Card/BlndCard"
import ArrowDown from "../../assets/icons/arrow-down-small.svg"

interface Sidebar {
  projectMap: Record<string, Record<string, any>>
}

export const Sidebar = ({ projectMap }: Sidebar) => {
  const navigate = useNavigate()
  const intro =
    "I’m a Canadian product designer who’s passionate about transforming ideas into delightful and inclusive products."

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
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        <Card
          variant="text"
          image={ProfileImage}
          title="Hi, I'm Vicky"
          description="Learn more about me"
          onClick={() => navigate("/about")}
        />
        <Box>
          <Typography variant="body1">{intro}</Typography>
          <Typography variant="body1">
            Previously UX at{" "}
            <a href="https://riotgames.com/">
              <strong>Riot Games</strong>
            </a>
          </Typography>
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
          gap: "8px",
          alignSelf: "stretch",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Typography variant="h6">Selected Projects</Typography>
          <img src={ArrowDown} style={{ width: 24, height: 24 }} />
        </Box>
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
