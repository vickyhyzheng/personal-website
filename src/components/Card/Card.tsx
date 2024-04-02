import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowRight from "../../assets/icons/arrow-right-small.svg";
import { Tag } from "../Tag";
import hoversfx from "../../assets/misc/hoversfx.mp3";

interface CardProps {
  variant: "tags" | "text";
  image: string;
  title: string;
  description?: string;
  tags?: string[];
  isIcon?: boolean;
  large?: boolean;
  onClick?: () => void;
}

function play() {
  new Audio(hoversfx).play();
}

export const Card = ({
  variant,
  image,
  title,
  description,
  tags,
  isIcon,
  large,
  onClick,
}: CardProps) => {
  return (
    <Box
      onClick={onClick}
      onMouseEnter={play}
      sx={{
        borderRadius: "16px",
        background: "white",
        border: "1px solid transparent",
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: large ? "776px" : null,
        width: "100%",
        transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        "&:hover": {
          cursor: "pointer",
          border:
            variant === "text" ? "1px solid #FFCA42" : "1px solid #1B1B1B",
          backgroundColor: variant === "text" ? "yellow.light" : "white",
          "& .tag": {
            opacity: 1,
          },
          "& #circle": {
            backgroundColor: "yellow.dark",
            transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
          },
          "#arrow_icon": {
            // pr: 0,
            transform: "translateX(16px)",
            // transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
          },
          "#card_image": {
            height: variant === "tags" ? "72px !important" : 72,
            width: variant === "tags" ? "72px !important" : 72,
            transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
          },
          transition: "all 0.4s cubic-bezier(0.41, -1, 0.5, 2)",
        },
        // TODO: add animation
      }}
    >
      <Box
        sx={{ display: "flex", px: 2, py: "2px", gap: 2, alignItems: "center" }}
      >
        {isIcon ? (
          <Box
            id="circle"
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "grey.light",
            }}
          >
            <img
              id="card_image"
              src={image}
              alt="card icon"
              style={{
                width: "32px",
                height: "32px",
                padding: "16px",
                transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
              }}
            />
          </Box>
        ) : (
          <img
            id="card_image"
            src={image}
            alt="card icon"
            style={{
              height: 64,
              width: 64,
              borderRadius: "50%",
              backgroundColor: "grey.light",
              transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            p: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 0.5,
            flex: "1 0 0",
          }}
        >
          <Typography variant="h3">{title}</Typography>
          {variant === "text" && (
            <Typography variant="body1">{description}</Typography>
          )}
          {variant === "tags" && (
            <Box
              sx={{
                gap: "10px",
                display: "flex",
                alignItems: "center",
                "& .tag": {
                  opacity: 0.6,
                },
                "& .tag:first-of-type": {
                  opacity: 1,
                },
              }}
            >
              {tags?.map((text) => (
                <Tag key={text} text={text} />
              ))}
            </Box>
          )}
        </Box>
        {variant === "text" && (
          <img
            id="arrow_icon"
            src={ArrowRight}
            alt="right icon"
            style={{
              width: 32,
              height: 32,
              paddingRight: 16,
              transition: "all 0.3s cubic-bezier(0.41, -1, 0.5, 2)",
            }}
          />
        )}
      </Box>
    </Box>
  );
};
