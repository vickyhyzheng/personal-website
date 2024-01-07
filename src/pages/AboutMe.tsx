import { Box, Typography } from "@mui/material"
import React from "react"
import AboutImage from "../assets/images/about-image.png"
import { SquareButton } from "../components/Button/SquareButton"
import { IconButton } from "../components/Button/IconButton"
import ArrowLeft from "../assets/icons/arrow-left-small.svg"
import { useNavigate } from "react-router-dom"
import { useDesktop } from "../utils/useDesktop"
import { usePageTitle } from "../utils/usePageTitle"

export const AboutMe = () => {
  usePageTitle("Vicky Zheng | About")
  const navigate = useNavigate()
  const { isDesktop } = useDesktop()
  return (
    <Box
      sx={{
        backgroundColor: "grey.white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "flex-start",
          flexDirection: "column",
          py: 8,
          px: 12,
          maxWidth: "1088px",
        }}
      >
        <IconButton icon={ArrowLeft} onClick={() => navigate("/")} />

        <Box
          sx={{
            gap: 8,
            display: "flex",
            zIndex: 1,
            position: "relative",
            // flexWrap: "wrap",
          }}
        >
          <Box>
            <img
              src={AboutImage}
              style={{
                borderRadius: "16px",
                width: isDesktop ? 394 : 200,
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Box>
                <Typography variant="h1">I'm Vicky.</Typography>
                <Typography variant="h1">Nice to meet you!</Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  I'm a product designer based in Toronto, Canada currently
                  studying UX design at the University of Waterloo.
                </Typography>
                <Typography variant="body1">
                  Previously I have worked at Riot Games as a UX design intern
                  🤠 and a freelance illustrator.
                </Typography>
              </Box>
              <Typography variant="body1">
                I first encountered UX design in university, and it just
                instantly clicked with me as a career I wanted to pursue.
              </Typography>
              <Typography variant="body1">
                In my free time you can find me bot-fragging in Valorant, doing
                something silly, and enjoying life with my dog.
              </Typography>
              {/* <Typography variant="body1">
              In my free time you can find me bot-fragging in Valorant, doing
              something silly, and enjoying life with my dog. In my free time
              you can find me bot-fragging in Valorant, doing something silly,
              and enjoying life with my dog. In my free time you can find me
              bot-fragging in Valorant, doing something silly, and enjoying life
              with my dog. In my free time you can find me bot-fragging in
              Valorant, doing something silly, and enjoying life with my dog. In
              my free time you can find me bot-fragging in Valorant, doing
              something silly, and enjoying life with my dog. In my free time
              you can find me bot-fragging in Valorant, doing something silly,
              and enjoying life with my dog. In my free time you can find me
              bot-fragging in Valorant, doing something silly, and enjoying life
              with my dog. In my free time you can find me bot-fragging in
              Valorant, doing something silly, and enjoying life with my dog. In
              my free time you can find me bot-fragging in Valorant, doing
              something silly, and enjoying life with my dog. In my free time
              you can find me bot-fragging in Valorant, doing something silly,
              and enjoying life with my dog. In my free time you can find me
              bot-fragging in Valorant, doing something silly, and enjoying life
              with my dog.
            </Typography> */}

              <Box
                sx={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "grey.black",
                }}
              />
              <Typography variant="h3">Let's connect</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "19px",
                }}
              >
                <SquareButton text="Resume" href="/Vicky_Zheng_Resume.pdf" />
                <SquareButton
                  text="LinkedIn"
                  href="https://www.linkedin.com/in/vyzheng/"
                />
                <SquareButton
                  text="Email"
                  href="mailto:vickyhy.zheng@gmail.com"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "200px",
          backgroundColor: "transparent",
          zIndex: 0,
        }}
      >
        <Box
          className="semicircle"
          sx={{
            m: "auto",
            width: "1010px",
            height: "1010px",
            backgroundColor: "yellow.light",
            borderRadius: "50%",
          }}
        />
      </Box> */}
    </Box>
  )
}
