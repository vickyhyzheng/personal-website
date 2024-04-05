import { Box, Typography } from "@mui/material"
import React from "react"
import { useDesktop } from "../../../utils/useDesktop"
import hoversfx from "../../../assets/misc/hoversfx.mp3"

interface RoundButtonProps {
  text: string
  icon: string
  onClick: () => void
}

function play() {
  new Audio(hoversfx).play()
}

export const RoundButton = ({ text, icon, onClick }: RoundButtonProps) => {
  const { isDesktop } = useDesktop()
  return (
    <Box
      className="noselect"
      onClick={onClick}
      onMouseEnter={play}
      sx={{
        display: "flex",
        py: "16px",
        px: isDesktop ? "44px" : "auto",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        // flex: "1 0 0",
        alignSelf: "flex-start",
        borderRadius: "32px",
        border: "1px solid #1B1B1B",
        background: "white",
        maxHeight: "64px",
        width: isDesktop ? "352px" : "100%",
        transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        ":hover": {
          cursor: "pointer",
          width: "368px",
          maxHeight: "68px",
          borderRadius: "16px",
          borderColor: "yellow.dark",
          backgroundColor: "yellow.light",
          transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        },
      }}
    >
      <Typography variant="button">{text}</Typography>
      <img
        src={icon}
        alt="icon"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
        }}
      />
    </Box>
  )
}
