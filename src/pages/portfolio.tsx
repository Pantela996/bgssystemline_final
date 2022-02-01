import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { Container, styled } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";
import { GetPortfolioProjectsQuery } from "../../graphql-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const projectImgHeight = 200;
const projectImgClass = "project__img";
const projectTextClass = "project__text";
const ProjectsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: `repeat(auto-fit, minmax(${
    projectImgHeight * 1.78
  }px, 1fr))`,
  gridAutoRows: `minmax(${projectImgHeight * 0.8}px, ${
    projectImgHeight * 1.2
  }px)`,
  marginTop: theme.spacing(7),
}));

const slideTransitionDuration = 1200;
const swiperPaginationClass = "swiper-pagination";
const sliderSwiperClass = "swiper-slider";
const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "white", //theme.palette.textDark,
  [`& .${sliderSwiperClass}`]: {
    width: "100%",
    height: "100%",
  },
  [`& .${projectImgClass}`]: {
    width: "100%",
    height: "100%",
  },
  [`& .${projectTextClass}`]: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 0,
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(1),
    background: `rgba(0,0,0,0.4)`,
    zIndex: 1,
    transform: "translateY(0)",
    transition: "transform 200ms",
  },

  [`& .${swiperPaginationClass}`]: {
    transform: "translateY(200%)",
    transition: "transform 400ms",
    ".swiper-pagination-bullet": {
      zIndex: 2,
      borderRadius: 0,
      width: "0.7em",
      height: "0.7em",
      margin: "0 0.15em !important",
      opacity: 1,
      background: "gray",
      transition: "background 200ms, transform 200ms",
      boxShadow: "inset 0 0 0.1em black",
      transformOrigin: "center",
      position: "relative",
      "&-active": {
        background: theme.palette.primary.main,
        transform: "scale(1.1)",
      },
    },
  },

  "&:hover": {
    [`& .${swiperPaginationClass}`]: {
      transform: "translateY(0)",
    },
    [`& .${projectTextClass}`]: {
      transform: "translateY(100%)",
    },
  },
}));

const SlideContent = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
}));

export const query = graphql`
  query getPortfolioProjects {
    allFile(filter: { relativeDirectory: { glob: "portfolio-projects/*" } }) {
      edges {
        node {
          name
          relativeDirectory
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
          }
        }
      }
    }
  }
`;

export default function Portfolio({
  data,
}: {
  data: GetPortfolioProjectsQuery;
}) {
  const projectsObj = {};
  data.allFile.edges.forEach(({ node }) => {
    const projectsProperty = node.relativeDirectory.split("/")[1];
    const imgData = node.childrenImageSharp[0].gatsbyImageData;
    if (!projectsObj[projectsProperty]) {
      projectsObj[projectsProperty] = [];
    }
    projectsObj[projectsProperty].push(imgData);
  });
  const projects = [];
  for (const key in projectsObj) {
    projects.push(projectsObj[key]);
  }

  return (
    <div>
      <Seo
        pageTitle={t("pages.portfolio.navText")}
        description={t("pages.portfolio.seoDescription")}
      />
      <Container>
        <Title>{t("pages.portfolio.title")}</Title>

        <ProjectsGrid>
          {projects.map((project, projectIndex) => (
            <SliderContainer>
              <Swiper
                className={sliderSwiperClass}
                key={`project ${projectIndex + 1}`}
                centeredSlides={true}
                spaceBetween={3}
                speed={slideTransitionDuration}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                grabCursor={false}
                loop={true}
                pagination={{
                  clickable: true,
                  el: `.${swiperPaginationClass}`,
                  renderBullet: (_index, className) =>
                    `<span class="${className}"></span>`,
                }}
              >
                {project.map((projectImg, projectImgIndex) => (
                  <SwiperSlide key={`projectImgIndex-${projectImgIndex}`}>
                    <SlideContent>
                      <GatsbyImage
                        className={projectImgClass}
                        image={projectImg}
                        alt={`project ${projectIndex} - img ${projectImgIndex}`}
                        objectFit="cover"
                        // objectPosition="50% 70%"
                      />
                    </SlideContent>
                  </SwiperSlide>
                ))}

                <div className={swiperPaginationClass} />
              </Swiper>
              <p className={projectTextClass}>
                {t("pages.portfolio.project")} {projectIndex + 1}
              </p>
            </SliderContainer>
          ))}
        </ProjectsGrid>
      </Container>
    </div>
  );
}
