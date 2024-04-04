import { Box, Link, Typography } from "@mui/material";
import React from "react";
import AboutImage from "../assets/images/about-image.png";
import { SquareButton } from "../components/Button/SquareButton";
import { useDesktop } from "../utils/useDesktop";
import { usePageTitle } from "../utils/usePageTitle";
import { HomeButton } from "../components/HomeButton";
import GroupPic from "../assets/images/group-pic.png";
import Dog from "../assets/images/dog.png";
import Plants from "../assets/images/plants.png";
import Coding from "../assets/images/code.png";
import { ArticleEnd } from "../components/Article/ArticleEnd";

export const AboutMe = () => {
  usePageTitle("About Me");
  const { isDesktop } = useDesktop();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "grey.white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "auto",
          mb: ["160px", "128px"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
            flexDirection: "column",
            py: [4, 8],
            px: [2, 12],
            maxWidth: "1088px",
          }}
        >
          <Box
            sx={{
              gap: 8,
              display: "flex",
              zIndex: 1,
              position: "relative",
              mb: 8,
            }}
          >
            {isDesktop && (
              <Box>
                <img
                  src={AboutImage}
                  style={{
                    borderRadius: "16px",
                    width: isDesktop ? 394 : 200,
                  }}
                />
              </Box>
            )}

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ["30px", 4],
                }}
              >
                <Box>
                  <Typography variant={isDesktop ? "h1" : "h3"}>
                    I'm Vicky.
                  </Typography>
                  <Typography variant={isDesktop ? "h1" : "h3"}>
                    Nice to meet you!
                  </Typography>
                </Box>
                {!isDesktop && (
                  <Box>
                    <img
                      src={AboutImage}
                      style={{
                        borderRadius: "16px",
                        width: "100%",
                      }}
                    />
                  </Box>
                )}
                <Box>
                  <Typography variant="body2">
                    I’m a product designer based in Toronto, Canada whose
                    passionate about good food, big fonts, and jiggling
                    animations. Previously I have worked at Riot Games as a UX
                    design intern.
                  </Typography>
                </Box>
                <Typography variant="body2">
                  In my free time you can find me bot-fragging in Valorant,
                  making doodles, doing something silly, and enjoying life with
                  my dog.
                </Typography>

                <Box
                  sx={{
                    width: ["60%", "50%"],
                    height: "1px",
                    backgroundColor: "grey.black",
                  }}
                />
                <Typography variant="h3">Let's connect!</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: ["column", "row"],
                    gap: [4, "19px"],
                  }}
                >
                  <SquareButton text="Resume" href="/Vicky_Zheng_Resume.pdf" />
                  <SquareButton
                    text="LinkedIn"
                    href="https://www.linkedin.com/in/vyzheng/"
                  />
                  <SquareButton
                    text="Contact Me"
                    href="mailto:vickyhy.zheng@gmail.com"
                  />
                </Box>
              </Box>
            </Box>
            <HomeButton />
          </Box>
          <Box
            sx={{
              gap: 4,
            }}
          >
            <Typography variant="h6" sx={{ color: "grey.dark" }}>
              Working with me
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <img
                src={GroupPic}
                width="50%"
                style={{ borderRadius: "16px", marginBottom: "64px" }}
              />
              <Box sx={{ width: "50%" }}>
                <Typography variant="body2">
                  Collaboration is part of my design DNA and I’ve made my best
                  work when working with a multidisciplinary team. I love
                  talking and I’m always looking for opportunities to learn
                  about the world so I can infodump at the watercooler.
                </Typography>
                <Typography variant="body2">
                  <br />I believe that any problem is an interesting problem
                  when you start asking questions and making an effort to
                  understand the problem space. I collect interesting tidbits of
                  knowledge that cover an ever expanding list from logistics
                  service design, healthcare solutions, enterprise products,
                  developer tools, and many many more.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              gap: 4,
              mb: 8,
            }}
          >
            <Typography variant="h6" sx={{ color: "grey.dark" }}>
              Experience
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <Typography variant="h2" sx={{ width: "50%" }}>
                Sunlife X GBDA Capstone
              </Typography>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h3">Product Manager</Typography>
                <Typography variant="h6" sx={{ color: "grey.dark" }}>
                  <br />
                  January 2024 - Present
                </Typography>
                <Typography display="inline" variant="body2">
                  <br />
                  Researching and designing a B2B2C EHR software aimed to enable
                  collaborative care models in the fertility treatment space.
                  Led an in person workshop on{" "}
                </Typography>
                <Typography
                  display="inline"
                  variant="body2"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  onClick={() => {
                    window.open(
                      "https://www.figma.com/proto/frfw9yw7gP3hc1jsbHeDXv/Variables-Workshop?type=design&node-id=1-122&t=lAc33t6RPNb5c7X5-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A122&mode=design",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <strong>
                    <u>designing with variables.</u>
                  </strong>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <Link
                href="https://riotgames.com/"
                variant="h2"
                sx={{ width: "50%", textDecoration: "none", color: "black" }}
              >
                Riot Games
              </Link>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h3">UX Design Intern</Typography>
                <Typography variant="h6" sx={{ color: "grey.dark" }}>
                  <br />
                  May 2023 - August 2023
                </Typography>
                <Typography display="inline" variant="body2">
                  <br />
                  Spearheaded the design process of a B2B SAAS application and a
                  B2C transaction history feature, impacting over 200 million
                  players and projected to save $50 million.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <Link
                href="https://itstechnova.org/"
                variant="h2"
                sx={{ width: "50%", textDecoration: "none", color: "black" }}
              >
                TechNova
              </Link>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h3">Design Lead</Typography>
                <Typography variant="h6" sx={{ color: "grey.dark" }}>
                  <br />
                  May 2023 - August 2023
                </Typography>
                <Typography display="inline" variant="body2">
                  <br />
                  Led a team of 4 designers through 2 projects. Created workshop
                  materials for design skill development.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <Link
                href="https://triyo.io/"
                variant="h2"
                sx={{ width: "50%", textDecoration: "none", color: "black" }}
              >
                Triyosoft Analytics
              </Link>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h3">Graphic & UX/UI Designer</Typography>
                <Typography variant="h6" sx={{ color: "grey.dark" }}>
                  <br />
                  January 2022 - August 2022
                </Typography>
                <Typography display="inline" variant="body2">
                  <br />
                  Initiated website revamp project - conducted investigations
                  into information architecture and content redesign.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                mt: 8,
              }}
            >
              <Link
                href="https://www.techplusuw.com/"
                variant="h2"
                sx={{ width: "50%", textDecoration: "none", color: "black" }}
              >
                Tech+ Waterloo
              </Link>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h3">Product Designer</Typography>
                <Typography variant="h6" sx={{ color: "grey.dark" }}>
                  <br />
                  January 2022 - May 2022
                </Typography>
                <Typography display="inline" variant="body2">
                  <br />
                  Created design system components and consolidated design
                  frames to improve the consistency and quality of prototypes
                  for connecting mentors and mentees.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              gap: 4,
            }}
          >
            <Typography variant="h6" sx={{ color: "grey.dark" }}>
              Outside of Design
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // flexWrap: "wrap",
                mt: 8,
                gap: 4,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <img src={Dog} width="100%" style={{ borderRadius: "16px" }} />
                <Typography variant="h3">Art & Illustration</Typography>
                <Typography variant="body1">
                  Art has been foundational to cultivating my understanding of
                  color and form. I’m always grinding away at a backlog of
                  commissions and always striving to improve my technique and
                  creative output.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <img
                  src={Plants}
                  width="100%"
                  style={{ borderRadius: "16px" }}
                />
                <Typography variant="h3">Plant Hoarding</Typography>
                <Typography variant="body1">
                  I fell into the plant collecting hobby at some point during
                  Covid lockdowns. Currently I am obsessed with picking up
                  fragrant orchid species, but I won’t turn down a monstera or
                  two.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <img
                  src={Coding}
                  width="100%"
                  style={{ borderRadius: "16px" }}
                />
                <Typography variant="h3">Self-Learning Code</Typography>
                <Typography variant="body1">
                  Learning about coding fundamentals, algorithms, and frameworks
                  have given me a great appreciation for what is done by
                  developers. I hope to one day be able to build out my own
                  designs end to end.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ArticleEnd otherArticles={["behive", "triyo"]} />
    </>
  );
};
