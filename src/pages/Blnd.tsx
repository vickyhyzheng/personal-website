import { ArticlePage } from "../components/Article/ArticlePage"
import { ArticleSection } from "../components/Article/ArticleSection"
import { ArticleHeader } from "../components/Article/ArticleHeader"
import EyeSmall from "../assets/icons/eye-small.svg"
import QuestionMedium from "../assets/icons/question-mark-medium.svg"
import MuteMedium from "../assets/icons/mute-medium.svg"
import SearchMedium from "../assets/icons/search-medium.svg"
import ArrowDown from "../assets/icons/arrow-down-small.svg"
import FigmaSmall from "../assets/icons/figma-small.svg"

import CardSorting from "../assets/images/triyo-card-sorting.png"
import OldSitemap from "../assets/images/triyo-sitemap-old.png"
import NewSitemap from "../assets/images/triyo-sitemap-new.png"
import NavbarRedesign from "../assets/images/triyo-navbar-redesign.png"
import HiFi1 from "../assets/images/triyo-hifi-1.png"
import HiFi2 from "../assets/images/triyo-hifi-2.png"
import HiFi3 from "../assets/images/triyo-hifi-3.png"

import { Box, Typography } from "@mui/material"
import { ThreeColumnTable } from "../components/Article/Tables/ThreeColumnTable"
import { TextTable } from "../components/Article/Tables/TextTable"
import { RoundButton } from "../components/Button/RoundButton"
import { ArticleSubsection } from "../components/ArticleSubsection"
import { TwoColumnTable } from "../components/Article/Tables/TwoColumnTable"
import { ArticleEnd } from "../components/Article/ArticleEnd"

import TriyoBanner from "../assets/images/triyo-banner-2.png"
import { HomeButton } from "../components/HomeButton"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"
import { useRef } from "react"
import { skipToSection } from "../utils/skipToSection"
import { usePageTitle } from "../utils/usePageTitle"
import BlndBanner from "../assets/images/blnd-banner.png"
import BlndLogoFull from "../assets/images/blnd-logo-full.png"
import BlndLogoExplanation from "../assets/images/blnd-logo-explanation.png"
import BlndAlternatives from "../assets/images/blnd-alternatives.png"
import BlndAccessibleAlternates from "../assets/images/blnd-accessible-alternates.png"
import BlndRajdhani from "../assets/images/blnd-rajdhani.png"
import BlndLato from "../assets/images/blnd-lato.png"

export const Blnd = () => {
  usePageTitle("Vicky Zheng | BLND")
  const wireframesSection = useRef<HTMLElement | null>(null)
  const teamTableContents = [
    {
      title: "My Role",
      description: "Graphic Designer",
    },
    {
      title: "My Team",
      description: (
        <Typography variant="body1">
          <strong>Stephanie Xiang</strong> - Graphic Designer
        </Typography>
      ),
    },
    {
      title: "Skills & Tools",
      description: (
        <>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Illustrator, Figma
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Adobe After Effects
          </Typography>
        </>
      ),
    },
  ]
  const interviewFindings = [
    {
      icon: MuteMedium,
      title: "Inaccessible language",
      description:
        "TRIYO loses a lot of users who may not understand the language used to describe the product and its features",
    },
    {
      icon: QuestionMedium,
      title: "Irrelevant pages",
      description:
        "The use cases page was a missed opportunity to better convince users through storytelling, and was a very claustrophobic experience",
    },
    {
      icon: SearchMedium,
      title: "Hidden info",
      description:
        "Important information were inaccessible through the menu. They existed in tertiary pages and were very challenging to find",
    },
  ]

  const learningsContents = [
    {
      header: "01",
      title: "Take initiative",
      description:
        "Because I was the only UX/UI designer on my team, I had to constantly look for opportunities to grow and learn from the designers outside of my team. I was able to do independent skill development, as well as sought out mentorship from more senior designers.",
    },
    {
      header: "02",
      title: "Engaging with stakeholders",
      description:
        "Learning about the different needs and objectives of each role, and what I can do for to make working with me more fun, was one of the most important activities I learned to do.",
    },
  ]

  return (
    <>
      <ScrollToTopOnMount />
      <ArticlePage
        title={"BLND"}
        subtitle={"Rethinking brand identity"}
        bannerImage={BlndBanner}
      >
        <ArticleSection>
          <ArticleHeader sectionType="Introduction" title="Overview">
            <Typography variant="body2">
              Our goal for this project was to help BLND (pronounced “blend”)
              address their concerns with their branding and help them rethink
              their logo and design language to help better connect with their
              audiences. They had listed several issues that they have with
              their current logo, such as outdated font, looks dull, boring, and
              most importantly, viewers did not know how to pronounce the name
              (was it blind? bland? blond?... etc). We wanted to help rethink
              BLND to be an exciting and modern conference for students and
              young professionals to attend to strengthen their early career
              success, and we especially wanted to focus on accessibility and
              cross platform experiences.
            </Typography>
          </ArticleHeader>
          <TextTable contents={teamTableContents} />
          {/* <RoundButton
            text="View the prototype"
            icon={FigmaSmall}
            onClick={() => {
              window.open(
                "https://www.figma.com/proto/eZ3W25c7M4eWe6vtpS4VKG/Triyo-artifacts?page-id=412%3A9169&type=design&node-id=412-9170&viewport=488%2C469%2C0.17&t=Y0agMACN14akvxIA-1&scaling=scale-down-width&starting-point-node-id=412%3A9170&show-proto-sidebar=1",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          /> */}
          <img
            src={BlndLogoFull}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>

        <ArticleSection>
          <ArticleHeader sectionType="Design" title="Logo Design">
            <Typography variant="body2">
              The logo was designed with a few key principles in mind. We wanted
              to communicate both combinations of the "techy" and "creative"
              attitudes of the brand, while maintaining a balance of
              professional with approachability.
            </Typography>
            <Typography variant="body2">
              <br />
              The gradient of colour on the "E" glyph is also modified depending
              on background for better accessibility and flexibility, which will
              be further explained in the colours section.
            </Typography>
          </ArticleHeader>
          <img
            src={BlndLogoExplanation}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Colours">
            <Box>
              <Typography variant="body2">
                We wanted to provide BLND with colour options for both light and
                dark mode users. This is due to how we perceive relative
                saturation of objects on white and black backgrounds. Saturated
                colours may appear fine on white backgrounds, but starkly
                contrast on black. Where less saturated colours appear bright on
                black backgrounds, but appear dark and muted on white.
              </Typography>
              <Typography variant="body2">
                <br />
                By controlling the versions, we are able to guarantee the best
                viewing experience for the user as well as provide more
                flexibility with marketing materials.
              </Typography>
            </Box>
            <img
              src={BlndAlternatives}
              width="100%"
              style={{ borderRadius: "16px", marginBottom: "64px" }}
            />
            <Box>
              <Typography variant="body2">
                Our colours were picked from BLND’s existing tones, with a warm
                version contrasting to a cool version. We especially liked the
                idea of using blues and pinks together, but found red to be the
                most compelling option on white backgrounds.We also sent out
                surveys to our peers to determine which colours they found the
                most appealing.
              </Typography>
              <Typography variant="body2">
                <br />
                The results of the surveys (that favoured red and blue/pink
                options) also encouraged us to design variants for light and
                dark mode rather than 1 all encompassing colour scheme.
              </Typography>
            </Box>
            <img
              src={BlndAccessibleAlternates}
              width="100%"
              style={{ borderRadius: "16px", marginBottom: "64px" }}
            />
          </ArticleSubsection>
        </ArticleSection>

        {/*  */}
        <ArticleSection>
          <ArticleHeader title="Typeface" sectionType="Typography">
            <Typography variant="body2">
              Rajdhani Bold is the chosen typeface for this project with Lato
              for paragraph text. These fonts were picked for their bold, clean
              and futuristic appearance, with Rajdhani specifically chosen for
              its blockier than usual characters. The pairing really adheres to
              the original goal of this redesign, which is to create something
              that is bold, minimal, and accessible.
            </Typography>
          </ArticleHeader>
          <img
            src={BlndRajdhani}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <img
            src={BlndLato}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>

        <ArticleSection>
          <ArticleHeader title="Conclusion" sectionType="Retrospective">
            <Typography variant="body2">
              Overall I am very pleased and proud of this redesign and had fun
              throughout the competition. Throughout the process I was very
              inspired by the design guidelines provided by tech companies
              (Netflix, Slack, etc) and wanted to create a presentation that
              also reflected the amount of work and care put into the logo.
            </Typography>
            <Typography variant="body2">
              <br />
              The most difficult part of the process was ideating and planning,
              as there were so many avenues to explore and so many direction to
              take the design. However, in the future I would like to give the
              brand more of a background and story telling aspects, as well as
              stronger ties towards how the design reiterates the company's
              values, instead of just aiming for something that is aesthetically
              pleasing.
            </Typography>
          </ArticleHeader>
        </ArticleSection>
      </ArticlePage>
      <ArticleEnd otherArticles={["riot", "behive"]} />
      <HomeButton />
    </>
  )
}
