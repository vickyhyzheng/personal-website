import { Box, Typography } from "@mui/material"
import React from "react"

interface RoundButtonProps {
  text: string
  icon: string
  onClick: () => void
}

export const RoundButton = ({ text, icon, onClick }: RoundButtonProps) => {
  return (
    <Box
      className="noselect"
      onClick={onClick}
      sx={{
        display: "flex",
        py: "16px",
        px: "44px",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        // flex: "1 0 0",
        alignSelf: "flex-start",
        borderRadius: "32px",
        border: "1px solid #1B1B1B",
        background: "white",
        maxHeight: "64px",
        ":hover": {
          cursor: "pointer",
          maxHeight: "68px",
          borderRadius: "16px",
          borderColor: "yellow.dark",
          backgroundColor: "yellow.light",
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
