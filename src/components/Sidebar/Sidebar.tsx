import { Box, Typography } from "@mui/material"
import React from "react"
import { Card } from "../Card"
import ProfileImage from "../../assets/images/face.png"
import { useNavigate } from "react-router-dom"
import { SquareButton } from "../Button/SquareButton"
import { RiotCard } from "../Card/RiotCard"
import { BeHiveCard } from "../Card/BeHiveCard"
import { TriyoCard } from "../Card/TriyoCard"
import CalendarSmall from "../../assets/icons/calendar-small.svg"

export const Sidebar = () => {
  const navigate = useNavigate()
  const intro =
    "I'm a product designer who's passionate about transforming ideas into delightful, user-friendly products that help people achieve their goals. Currently searching for FT roles."
  return (
    <Box
      sx={{
        display: "flex",
        width: "45%",
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
          gap: "22px",
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
        <Typography variant="body1">{intro}</Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          <SquareButton
            text="Contact Me"
            href="mailto:vickyhy.zheng@gmail.com"
          />
          <SquareButton text="Resume" href="" />
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
        <RiotCard />
        <BeHiveCard />
        <TriyoCard />
      </Box>

      <Box
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
      </Box>
    </Box>
  )
}
