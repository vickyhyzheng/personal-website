import { ArticlePage } from "../components/Article/ArticlePage"
import BeHiveBanner from "../assets/images/behive-banner.png"
import { ArticleSection } from "../components/Article/ArticleSection"
import { ArticleHeader } from "../components/Article/ArticleHeader"
import ShoppingLarge from "../assets/icons/shopping-large.svg"
import FigmaSmall from "../assets/icons/figma-small.svg"
import UsersLarge from "../assets/icons/users-large.svg"
import FileSearchLarge from "../assets/icons/file-medium.svg"
import GearLarge from "../assets/icons/gear-large.svg"
import ArrowDown from "../assets/icons/arrow-down-small.svg"
import GroupLarge from "../assets/icons/group-large.svg"
import EyeSmall from "../assets/icons/eye-small.svg"
import LightBulbLarge from "../assets/icons/lightbulb-large.svg"
import DialogueMedium from "../assets/icons/dialogue-medium.svg"
import UserVoiceMedium from "../assets/icons/user-voice-medium.svg"
import GroupMedium from "../assets/icons/group-medium.svg"
import CheckO from "../assets/icons/check-o-green.svg"
import CloseO from "../assets/icons/close-o-red.svg"

import { Box, Typography } from "@mui/material"
import { ThreeColumnTable } from "../components/Article/Tables/ThreeColumnTable"
import { TextTable } from "../components/Article/Tables/TextTable"
import { RoundButton } from "../components/Button/RoundButton"
import { ArticleSubsection } from "../components/ArticleSubsection"
import { TwoColumnTable } from "../components/Article/Tables/TwoColumnTable"
import { Highlight } from "../components/Article/Highlight"
import { ArticleEnd } from "../components/Article/ArticleEnd"
import BeHiveChart from "../assets/images/behive-chart.png"
import BeHiveCompAnalysis from "../assets/images/behive-comp-analysis.png"
import BeHiveFindings from "../assets/images/behive-findings.png"
import BeHiveDesignSystem from "../assets/images/behive-design-system.png"
import BeHiveLoFi1 from "../assets/images/behive-lofi-1.png"
import BeHiveLoFi2 from "../assets/images/behive-lofi-2.png"
import BeHiveLoFi3 from "../assets/images/behive-lofi-3.png"
import BeHiveFinal from "../assets/images/behive-final-product.gif"
import BeHiveNudge from "../assets/images/behive-nudge.gif"
import BeHiveDisappear from "../assets/images/behive-disappear.gif"
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"
import { HomeButton } from "../components/HomeButton"
import { useRef } from "react"
import { skipToSection } from "../utils/skipToSection"
import { usePageTitle } from "../utils/usePageTitle"

export const BeHive = () => {
  usePageTitle("Vicky Zheng | BeHive")
  const takeawaysSection = useRef<HTMLElement | null>(null)
  const wireframesSection = useRef<HTMLElement | null>(null)
  const headerBody = (
    <>
      <Typography variant="body2">
        Achieving personal goals is difficult because many of us lack meaningful
        systems in place to hold ourselves accountable to the goals we set.
        There are many in-market solutions but they provide{" "}
        <strong>
          weak internal motivation, or heavily rely an individual's discipline
          to help users achieve their goals and build good habits.
        </strong>
      </Typography>
      <Typography variant="body2">
        <br />
        It becomes especially challenging for international Chinese students to
        find support systems that they can use to also hold themselves
        accountable when balancing opportunities to explore their new
        environment, stay on top of school work, and take care of their personal
        lives.
      </Typography>
    </>
  )
  const teamTableContents = [
    {
      title: "My Role",
      description: "Project Manager / Lead Product Designer",
    },
    {
      title: "My Team",
      description: (
        <>
          <Typography variant="body1">
            <strong>Eric Yam</strong> - Graphic Designer
          </Typography>
          <Typography variant="body1">
            <strong>Lowell Basa</strong> - Product Designer
          </Typography>
          <Typography variant="body1">
            <strong>Jason Nhan</strong> - Product Designer
          </Typography>
          <Typography variant="body1">
            <strong>Christopher Lee</strong> - Product Designer
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
      icon: DialogueMedium,
      title: "Goal Sharing",
      description:
        "43% of survey respondents reported occasionally sharing goals with friends",
    },
    {
      icon: UserVoiceMedium,
      title: "Publicity",
      description:
        "93% felt more motivated when they publicly share their goals",
    },
    {
      icon: GroupMedium,
      title: "Motivation",
      description:
        "71% of respondents felt motivated when helping their friends complete their own personal goals.",
    },
  ]

  const usabilityTestingContent = [
    {
      icon: CheckO,
      title: "Adding a task",
      description:
        "The participants were able to complete this task and found it intuitive and easy to use.",
    },
    {
      icon: CheckO,
      title: "Making a post",
      description:
        "Also intuitive, would like a warning about 24hr expiration to be more visible",
    },
    {
      icon: CloseO,
      title: "Sending a nudge",
      description:
        "Participants had a lot of challenges finding where the nudge button would be",
    },
  ]
  const learningsContents1 = [
    {
      header: "01",
      title: "Make nudging intuitive",
      description:
        "Some solutions we came up with post usability-testing was to draw more inspiration from existing frameworks, such as Instagram stories to make it more intuitive to get started with.",
    },
    {
      header: "02",
      title: "Take a bigger bite",
      description:
        "Going into future products, I definitely feel more confident in my management abilities and more comfortable taking on projects with bigger scopes.",
    },
  ]
  const learningsContents2 = [
    {
      header: "03",
      title: "Improving visual design",
      description: (
        <>
          <Typography variant="body2">
            Another thing I would've liked the opportunity to improve on was my
            expressive design capabilities. I felt that our app could have
            definitely been more vibrant, and I definitely focused on function
            over aesthetics with this project. If I had more time to sit down
            with this project again, I would definitely want to try and breathe
            more life and personality into the branding.
          </Typography>
        </>
      ),
    },
  ]
  return (
    <>
      <ScrollToTopOnMount />
      <ArticlePage
        title={"BeHIVE"}
        subtitle={
          "Designing a community focused mobile application for helping international students stay accountable"
        }
        bannerImage={BeHiveBanner}
      >
        <ArticleSection>
          <ArticleHeader sectionType="Introduction" title="Overview">
            {headerBody}
          </ArticleHeader>
          <TextTable contents={teamTableContents} />
          <RoundButton
            text="View the prototype"
            icon={FigmaSmall}
            onClick={() => {
              window.open(
                "https://www.figma.com/proto/EgMfeAKtzf70Oh2BFEqChT/GBDA301---Product-Build?kind=proto&node-id=1300-9570&page-id=0%3A1&scaling=scale-down&starting-point-node-id=1300%3A9570&viewport=868%2C335%2C0.27",
                "_blank",
                "noopener,noreferrer"
              )
            }}
          />
          <Highlight
            icon={LightBulbLarge}
            title="Problem Statement"
            content={
              <>
                <Typography variant="body2">
                  <i>
                    Building good habits is something every student wants to do,
                    but succeeding long-term is where everyone finds challenges.
                    Part of the reason is that they can't find the motivation to
                    complete their chores one day and eventually forget about
                    it, preferring activities with more instant gratification.
                  </i>
                </Typography>
                <Typography variant="body2">
                  <br />
                  <i>
                    Informed by Cialdini's 6 principals of influence,{" "}
                    <strong>
                      how can we rethink social media as an accountability tool?
                    </strong>
                  </i>
                </Typography>
              </>
            }
          />
          <RoundButton
            text="Skip to wireframes"
            icon={ArrowDown}
            onClick={() => {
              skipToSection(wireframesSection)
            }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="User Interviews and Surveys"
            sectionType="Research"
          >
            <>
              <Typography variant="body2">
                To gain a better understanding of the cultural nuances as well
                as general factors relating to motivation in students, we
                conducted interviews with 3 Chinese international students,
                created user journey maps, and sent out surveys to the general
                student populace.
              </Typography>
              <Typography variant="body2">
                <br />
                These were our findings.
              </Typography>
            </>
          </ArticleHeader>
          <img
            src={BeHiveFindings}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="User Journey mapping">
            <Typography variant="body2">
              User journey mapping was also used to identify touch points our
              product could have with users. We agreed that the "trying" stage
              should be our area of focus, as that is when users begin to lose
              motivation but could still be convinced to stay committed to the
              goal.
            </Typography>
            <Typography variant="body2">
              <br />
              We hypothesized that{" "}
              <strong>
                by providing users with praise and external validation would
                make their efforts feel more rewarding
              </strong>
              , and encourage them to keep trying or try a new strategy.
              Providing emotional support as well as offering advice when users
              start to struggle was the reason we wanted to allow other users to
              interact with each others' posts.
            </Typography>
          </ArticleSubsection>
          <img
            src={BeHiveChart}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Competitive Analysis">
            <Typography variant="body2">
              We also conducted competitive analysis on popular to-do list
              applications available on the market, such as Notion, Google
              Tasks, and Microsoft To Do to get a better understanding of what
              gaps exist in the market. We saw that a lot of existing
              applications lack fleshed out accountability tools and heavily
              depended on users' internal motivations. These applications were
              also primarily designed for tracking and completing one-time
              tasks, rather than encouraging and building habits.
            </Typography>
          </ArticleSubsection>
          <img
            src={BeHiveCompAnalysis}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <ArticleSubsection title="Research Insights">
            <Typography variant="body2">
              From all of our research, we got big 3 insights for our design
              solution. These were the takeaways that we definitely want our
              product to address.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mt: 4,
                mb: 8,
                gap: 2,
              }}
            >
              <Highlight
                icon={GroupLarge}
                title="Peer Pressure"
                content={
                  <Typography variant="body2">
                    <i>
                      Students in general felt more motivated to start and
                      complete a task if it involved a friend. Respondents also
                      indicated that the closer the friend, the more they will
                      feel compelled to do a good job.
                    </i>
                  </Typography>
                }
              />
              <Highlight
                icon={ShoppingLarge}
                title="Market Solutions"
                content={
                  <Typography variant="body2">
                    <i>
                      78% of survey respondents reported challenges with feeling
                      motivated to use existing habit-building apps
                      consistently. Forgetting about the app often resulted in
                      forgetting about the habit they were trying to build.
                    </i>
                  </Typography>
                }
              />
              <Highlight
                icon={UsersLarge}
                title="Familial accountability"
                content={
                  <Typography variant="body2">
                    <i>
                      Pressure from family to build good habits was a common
                      theme among the international students we interviewed.
                      Students also reported challenges with finding replacement
                      support systems once they moved abroad.
                    </i>
                  </Typography>
                }
              />
            </Box>
          </ArticleSubsection>
          <ArticleSubsection title="Cultural Insights">
            <Typography variant="body2">
              To make our product accessible to Chinese students, gaining an
              understanding of East Asian design choices was crucial. Our team
              canvassed the information architecture, visual design, and
              application features of popular Chinese social media apps, such as
              Bilibili and WeChat to gain a better grasp of how we should
              approach our design.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mt: 4,
                mb: 8,
                gap: 4,
              }}
            >
              <Highlight
                icon={GearLarge}
                title="Multifunctional"
                content={
                  <Typography variant="body2">
                    <i>
                      Many Chinese social media apps are multipurpose. WeChat
                      for example can allow users to send money on the platform,
                      social media browsing, and file transfer. Versions outside
                      of mainland China have significantly more restricted
                      functions.
                    </i>
                  </Typography>
                }
              />
              <Highlight
                icon={FileSearchLarge}
                title="Information Density"
                content={
                  <Typography variant="body2">
                    <i>
                      Users prefer interfaces that allow them to preview content
                      and expand on the content that they want to interact
                      further with. Chinese social media applications use a
                      variety of compact preview methods for photos and videos
                      for browsing.
                    </i>
                  </Typography>
                }
              />
            </Box>
          </ArticleSubsection>
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Designing for Scalability"
            sectionType="Design System"
          >
            <Typography variant="body2">
              An extensive design system was built to support scalable design in
              our solution. An emphasis was put on designing components that
              could accommodate lists of items of 0 to infinite. This is
              especially important in features such as our discovery, friends
              list, and chat functionality.
            </Typography>
            <Typography variant="body2">
              <br />
              Google's Material Design system was referenced to ensure our app
              meets accessibility requirements in our typography, colour, and
              element sizing choices.
            </Typography>
          </ArticleHeader>
          <img
            src={BeHiveDesignSystem}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Low-Fidelity Wireframes"
            sectionType="Wireframing"
          >
            <Typography variant="body2">
              We created several low fidelity wireframes to do early usability
              testing with users to measure the intuitiveness of our designs and
              features. Primarily, we wanted to focus on the task setting,
              nudging, and sharing aspects of our app.
            </Typography>
          </ArticleHeader>
          <img
            src={BeHiveLoFi1}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body2">
              Through the early usability testing, we received feedback that
              resulted in some quality of life changes made to the design to
              give users a more seamless experience. One of these changes
              includes adding a suggested users section so that friends can find
              mutual friends easily without exposing our users to public
              searches.
            </Typography>
            <Typography variant="body2">
              <br />
              Additional keyboard functions was something we noticed with
              WeChat, allowing users to send each other stickers, call, share
              location, documents, and even sending money to each other. We
              wanted to implement something similar so that users have wide
              freedom to express themselves.
            </Typography>
          </Box>
          <img
            src={BeHiveLoFi2}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
          <img
            src={BeHiveLoFi3}
            width="100%"
            style={{ borderRadius: "16px", marginBottom: "64px" }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Final Product"
            sectionType="Solution"
            ref={wireframesSection}
          >
            <Box sx={{ mb: 4 }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEgMfeAKtzf70Oh2BFEqChT%2FGBDA301---Product-Build%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1300-9570%26viewport%3D459%252C293%252C0.13%26t%3DDsDkknJNsL1xS6kJ-1%26scaling%3Dscale-down%26starting-point-node-id%3D1300%253A9570%26mode%3Ddesign"
                allowFullScreen
              />
            </Box>
            <Typography variant="body2">
              The goal of BeHIVE is to turn friends into a system for helping
              individuals build good routines and achieve self-success. We
              thought about ways in which users may abuse the system and looked
              towards social media applications for inspiration on how to
              protect user privacy, as well as promote authenticity of posts.
            </Typography>
            <Typography variant="body2">
              <br />
              Our product is based around the basic core functions of a to do
              list (add task, mark as complete) and some core features of social
              media adds (groupchats, posting, and friends). We also took
              inspiration from the roster of applications most commonly used by
              Chinese international students; Instagram, WeChat, iMessage, and
              Bilibili.
            </Typography>
            <Typography variant="body2">
              <br />
              We have also taken into consideration safety features, such as
              reporting posts, blocking users, and visibility controls for more
              intimate tasks. Profiles are also not randomly available for
              others to browse, and a unique username must be searched for the
              account to show up to send friend requests to. This is to protect
              the users' privacy and protect them from strangers and malicious
              actors.
            </Typography>
          </ArticleHeader>

          <img
            src={BeHiveFinal}
            width="358px"
            style={{
              borderRadius: "16px",
              marginBottom: "64px",
              alignSelf: "center",
            }}
          />
          <ArticleSubsection title="Send A Nudge To Friends">
            <Typography variant="body2">
              By adjusting sharing permissions, friends can see tasks that users
              were supposed to be completing, but may have potentially forgotten
              about. This feature is further empowered through our
              accountability group chats, where multiple people within a group
              can send reminders for forgotten tasks with group visibility
              settings.
            </Typography>
          </ArticleSubsection>
          <img
            src={BeHiveNudge}
            width="358px"
            style={{
              borderRadius: "16px",
              marginBottom: "16px",
              alignSelf: "center",
            }}
          />
          <ArticleSubsection title="Disappearing Posts">
            <Typography variant="body2">
              Users have the option to upload photos when completing a goal to
              share with friends. The posts disappear after 24 hours, designed
              to disincentivize creating fake posts to farm post statistics and
              cheating to create content. Users can interact with posts through
              commenting and liking, as well as through messages when posts are
              made. We want to help users enjoy and celebrate the small wins in
              life with their friends.
            </Typography>
          </ArticleSubsection>
          <img
            src={BeHiveDisappear}
            width="358px"
            style={{
              borderRadius: "16px",
              marginBottom: "16px",
              alignSelf: "center",
            }}
          />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Think aloud protocol"
            sectionType="Usability testing"
          >
            <Typography variant="body2">
              Using our final solution prototype, we called back the
              international students from our user interviews from our research
              phase for usability testing. We provided them tasks and goals to
              complete and asked them to tell us their thoughts out loud. There
              were 3 tasks that we asked them that tested the bread and butter
              functionalities of our application.
            </Typography>
          </ArticleHeader>
          <ThreeColumnTable contents={usabilityTestingContent} />
        </ArticleSection>
        <ArticleSection>
          <ArticleHeader
            title="Takeaways and Reflection"
            sectionType="Retrospective"
            ref={takeawaysSection}
          >
            <Typography variant="body2">
              The scope of the project, as well as the duration really helped me
              reflect on my experience with managing a team with various skill
              levels in product design. The biggest takeaway I had from this
              experience was that empowering others makes me feel good — I
              really enjoyed being able to work with a team that was receptive
              to what I had to offer.
            </Typography>
            <Typography variant="body2">
              <br />
              Because of my previous internship experience and background in
              business, I was well rounded for helping everyone overcome tasks
              they had difficulty with and supported group members who expressed
              interest with designing, researching, and pitching. I also gained
              confidence in my skills and ability and was able to solidify my
              experience through mentoring my peers.
            </Typography>
          </ArticleHeader>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TwoColumnTable contents={learningsContents1} />
            <TwoColumnTable contents={learningsContents2} />
          </Box>
        </ArticleSection>
      </ArticlePage>
      <ArticleEnd otherArticles={["riot", "triyo"]} />
      <HomeButton />
    </>
  )
}
