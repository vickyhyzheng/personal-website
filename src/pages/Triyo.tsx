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

export const Triyo = () => {
  usePageTitle("Vicky Zheng | Triyo")
  const wireframesSection = useRef<HTMLElement | null>(null)
  const teamTableContents = [
    {
      title: "My Role",
      description: "UX/UI Designer",
    },
    {
      title: "My Team",
      description: (
        <>
          <Typography variant="body1">
            <strong>Hanjian Cheng</strong> - UX/UI Designer & Mentor
          </Typography>
          <Typography variant="body1">
            <strong>Kevin Naranjo</strong> - Developer
          </Typography>
        </>
      ),
    },
    {
      title: "Skills & Tools",
      description: (
        <>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            End-To-End user experience design
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Prototyping & interaction design
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Research (Lit. review + user studies)
          </Typography>
          <Typography variant="body1" sx={{ display: "list-item" }}>
            Team management
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
        title={"TRIYO"}
        subtitle={"Redesigning navigational web experiences"}
        bannerImage={TriyoBanner}
      >
        <ArticleSection>
          <ArticleHeader sectionType="Introduction" title="Overview">
            <Typography variant="body2">
              TRIYO is a data intelligence platform that gathers data on the
              communication activities of individuals in an organization. It
              turns this data into actionable insights on resource utilization,
              client engagement, and process efficiencies. I had the opportunity
              to join them in 2022 as a UX/UI Designer for the marketing
              department, where I worked alongside marketers and developers to
              spearhead a website overhaul project.
            </Typography>
          </ArticleHeader>
          <TextTable contents={teamTableContents} />
          <RoundButton
            text="View the prototype"
            icon={FigmaSmall}
            onClick={() => {
              window.open(
                "https://www.figma.com/proto/eZ3W25c7M4eWe6vtpS4VKG/Triyo-artifacts?page-id=412%3A9169&type=design&node-id=412-9170&viewport=488%2C469%2C0.17&t=Y0agMACN14akvxIA-1&scaling=scale-down-width&starting-point-node-id=412%3A9170&show-proto-sidebar=1",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          />
          <ArticleSubsection title="Background">
            <Box>
              <Typography variant="body2">
                When I first joined TRIYO, an issue that the marketing
                department was trying to overcome was that website visitors were
                not interacting with the content. From our Google Analytics, we
                can see that we had extremely high bounce rates, and visitors
                seldom visit other pages to learn more about the product. Why is
                that?
              </Typography>
              <Typography variant="body2">
                <br />
                For this case study, I will discuss the navigation redesign,
                pricing page redesign, and component design activities that I
                did as part of my internship. There were many other screens that
                were made, but were incomplete due to the timeline I had.
              </Typography>
            </Box>
          </ArticleSubsection>
          <RoundButton
            text="Skip to wireframes"
            icon={ArrowDown}
            onClick={() => {
              skipToSection(wireframesSection)
            }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader title="User Interviews" sectionType="Research">
            <Typography variant="body2">
              We didn't have the resources to conduct user interviews formally,
              so in my free time I asked a couple of friends to go through the
              website for me. They would screen share the website, and were
              given general goals such as "Tell me what the product is." and
              "How does the product solve [use case]".
            </Typography>
            <Typography variant="body2">
              <br />
              Through this unstructured interview, I found that all participants
              were confused with what exactly the product was, what it does, who
              this product is for, and why it was important even after combing
              all of the site pages. When asked further, some common themes
              emerged.
            </Typography>
          </ArticleHeader>
          <ThreeColumnTable contents={interviewFindings} />
          <ArticleSubsection title="Card Sorting Task">
            <Typography variant="body2">
              To continue my research, I asked 3 of my friends to do a card
              sorting task on Google Sheets for me. I asked them tell me what
              they were thinking out loud, and to explain their choices when
              they can to me. The reasoning for their sorting was often related
              to how they usually find items on similar websites they are more
              familiar with.
            </Typography>
            <Typography variant="body2">
              <br />
              From the results of this activity, I was able to conclude and
              pitch a website overhaul project.
            </Typography>
          </ArticleSubsection>
          <img
            src={CardSorting}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader title="Sitemap Revamp" sectionType="Design">
            <Typography variant="body2">
              Using the research above, I created a new sitemap that would
              improve the intuitiveness of website navigation, increase the
              quality of information that users can look for, and reducing
              redundant pages across the site. It also serves as a visual
              blueprint for the website revamping plan. The revamped information
              architecture blueprint is still used in Triyo’s current website.
            </Typography>
          </ArticleHeader>
          <img
            src={OldSitemap}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Revamped Sitemap">
            <Typography variant="body2">
              The revamped sitemap removed all of the inaccessible tertiary
              pages and moved them further up. Solutions were also given their
              own individual pages to accommodate a story-telling format on how
              Triyo's product solves the use cases. Impactful interactive
              elements, such as the demo, were moved onto the home page to be
              more accessible to users.
            </Typography>
          </ArticleSubsection>
          <img
            src={NewSitemap}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Navbar Redesign">
            <Typography variant="body2">
              The first task we had to complete as a part of the website revamp
              project was to redesign the navigation bar. To accomplish this, we
              would need to design a desktop and mobile version. Interactions
              such as hover states, hit-box size, and usability heuristics were
              used to ensure the navigation bar was accessible to users. We
              designed multiple iterations and walked through them with our
              stakeholders.
            </Typography>
          </ArticleSubsection>
          <img
            src={NavbarRedesign}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="High-Fidelity Wireframes"
            sectionType="Solution"
            ref={wireframesSection}
          >
            <Box sx={{ mb: 4 }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeZ3W25c7M4eWe6vtpS4VKG%2FTriyo-artifacts%3Fpage-id%3D412%253A9169%26type%3Ddesign%26node-id%3D412-9170%26viewport%3D488%252C469%252C0.17%26t%3DDPOe2q2pCU8XHAvm-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D412%253A9170%26show-proto-sidebar%3D1%26mode%3Ddesign"
                allowFullScreen
              />
            </Box>
            <Typography variant="body2">
              After collecting additional feedback from marketing, development,
              and executive, we were able to design the high fidelity version of
              the desktop and mobile navigation bars for development. Some of
              our low-fidelity ideas did not make it to the final version due to
              technical limitations and we adjusted the designed accordingly.
            </Typography>
          </ArticleHeader>

          <img
            src={HiFi1}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Pricing Page Redesign">
            <Typography variant="body2">
              Another task that was completed for this project was the redesign
              of site pages. Notably, the pricing page was the most challenging
              page to redesign, as it involved designing tables. Learning how to
              deal with tables across mobile and desktop was one of the biggest
              takeaways for me from this project.
            </Typography>
            <Typography variant="body2">
              <br />
              Competitive analysis of the company's competition, Wrike, Asana,
              and Monday, were done to gain a better idea of what is the
              industry standard for plan comparisons.
            </Typography>
          </ArticleSubsection>
          <img
            src={HiFi2}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Slideshow Component design">
            <Typography variant="body2">
              Through HotJar, we found that users weren't interacting with the
              content that was available on slideshows. Upon further research, I
              found that because the slideshow control buttons that are on the
              side required too much effort to navigate, but also because of the
              lack of transparency on whether or not the information on the
              slides is relevant to them.
            </Typography>
            <Typography variant="body2">
              <br />
              Competitive analysis also found that other competitors tries to
              solve this issue by moving the slideshow controls to the center,
              or provide a menu for users to navigate with. We decided to do a
              mix of both to provide users with improved navigational
              convenience and transparency.
            </Typography>
          </ArticleSubsection>
          <img
            src={HiFi3}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Takeaways and Reflection"
            sectionType="Retrospective"
          >
            <Typography variant="body2">
              I did a lot of learning in my time with TRIYO, one of the most
              helpful was being able to work beside product designers and
              observe their process. I learned a lot about design systems,
              component design, but most importantly I learned how to work and
              empathize with the needs of the development team.
            </Typography>
            <Typography variant="body2">
              <br />
              Additional activities such as design QA, running sprints and
              scrum, facilitating sessions to receive and provide feedback, and
              how to defend my design are valuable skills that I picked up and
              hope to further develop in my design journey.
            </Typography>
            <Typography variant="body2">
              <br />A lot of the other components that I worked on for the
              redesign project unfortunately could not be completed due to the
              time constraints of the internship. These included redesigning the
              solutions page, about us, and the interactive demo. However, I am
              still very proud of the work that I was able to complete during my
              time with Triyo.
            </Typography>
          </ArticleHeader>
          <TwoColumnTable contents={learningsContents} />
        </ArticleSection>
      </ArticlePage>
      <ArticleEnd otherArticles={["riot", "behive"]} />
      <HomeButton />
    </>
  )
}
