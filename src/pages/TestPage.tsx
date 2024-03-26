import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Highlight } from "../components/Article/Highlight";
import { Box, Typography } from "@mui/material";
import { ThreeColumnTableContent } from "../components/Article/Tables/ThreeColumnTable/ThreeColumnTableItem";
import { ThreeColumnTable } from "../components/Article/Tables/ThreeColumnTable/ThreeColumnTable";
import { Card } from "../components/Card/Card";
import RiotLogo from "../assets/images/riot-logo.png";
import { SquareButton } from "../components/Button/SquareButton";
import { RoundButton } from "../components/Button/RoundButton";
import ArrowDown from "../assets/icons/arrow-down-small.svg";
import { IconButton } from "../components/Button/IconButton";
import HomeIcon from "../assets/icons/house-small.svg";
import { ProjectCard } from "../components/ProjectCard";
import RiotInternshipBanner from "../assets/images/riot-internship-banner.png";
import { ArticleEnd } from "../components/Article/ArticleEnd";

export const TestPage = () => {
  // const tableContents: ThreeColumnTableContent[] = [
  //   {
  //     icon: "01",
  //     title: "title",
  //     description: "lorem ipsum",
  //   },
  //   {
  //     icon: "02",
  //     title: "title",
  //     description: "lorem ipsum", ppp
  //   },
  // ]
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey.dark",
      }}
    >
      <Card
        variant="text"
        image={RiotLogo}
        title="Hi, I'm Vicky"
        description="Learn more about me"
        onClick={() => console.log("card clicked")}
      />
      <Card
        variant="tags"
        image={RiotLogo}
        title="Project name"
        tags={["Internal Tools", "Global UX", "Internship"]}
        onClick={() => console.log("card clicked")}
      />
      <SquareButton text={"Click me"} href="google.com" />
      <RoundButton
        text={"View the prototype"}
        icon={ArrowDown}
        onClick={() => console.log("button clicked")}
      />
      <IconButton
        icon={HomeIcon}
        onClick={() => console.log("icon button clicked")}
      />
      <Box sx={{ m: 5 }}>
        <ProjectCard
          image={RiotInternshipBanner}
          startDate="May 2023"
          endDate="August 2023"
          title="Riot Games Internship"
          onClick={() => console.log("clicked banner")}
        />
      </Box>
      <ArticleEnd otherArticles={["riot", "behive"]} />
      {/* <Sidebar /> */}
      {/* <Highlight
        icon={RiotIcon}
        title="Title"
        content={<Typography variant="body2">Content</Typography>}
      /> */}
      {/* <ThreeColumnTable contents={tableContents} /> */}
      {/* <>this is the home page</> */}
    </Box>
  );
};
