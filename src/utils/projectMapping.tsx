import { Experience } from "../constants/experienceConstants"
import RiotInternshipBanner from "../assets/images/riot-internship-banner.png"
import BeHiveBanner from "../assets/images/behive-banner.png"
import TriyoBanner from "../assets/images/triyo-banner.png"
import BlndBanner from "../assets/images/blnd-banner.png"
import { useRef } from "react"

export const useProjectMapping = () => {
  const riotRef = useRef<HTMLElement | null>(null)
  const behiveRef = useRef<HTMLElement | null>(null)
  const triyoRef = useRef<HTMLElement | null>(null)
  const blndRef = useRef<HTMLElement | null>(null)

  const articleToProjectMapping: Record<Experience, Record<string, any>> = {
    riot: {
      title: "Riot Games Internship",
      image: RiotInternshipBanner,
      startDate: "May 2023",
      endDate: "August 2023",
      link: "/riot",
      ref: riotRef,
    },
    behive: {
      title: "BeHIVE: Designing Accountability",
      image: BeHiveBanner,
      startDate: "September 2022",
      endDate: "December 2022",
      link: "/behive",
      ref: behiveRef,
    },
    triyo: {
      title: "Triyosoft Analytics Internship",
      image: TriyoBanner,
      startDate: "January 2022",
      endDate: "August 2022",
      link: "/triyo",
      ref: triyoRef,
    },
    blnd: {
      title: "BLND Brand Redesign",
      image: BlndBanner,
      startDate: "December 2021",
      endDate: "January 2022",
      link: "/blnd",
      ref: blndRef,
    },
  }

  return { projectMap: articleToProjectMapping }
}
