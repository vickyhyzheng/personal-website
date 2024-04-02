import React from "react";
import { Card } from "./Card";
import RiotLogo from "../../assets/images/riot-logo.png";
import { useNavigate } from "react-router-dom";

interface RiotCard {
  onClick?: () => void;
}

export const RiotCard = ({ onClick }: RiotCard) => {
  const navigate = useNavigate();
  const tags = ["Product Design", "NDA", "Internship"];
  return (
    <Card
      variant="tags"
      image={RiotLogo}
      title="Riot Games"
      tags={tags}
      onClick={() => {
        onClick ? onClick() : navigate("/riot");
      }}
    />
  );
};
