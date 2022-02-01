import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { Container, styled } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";
import { GetPortfolioProjectsQuery } from "../../graphql-types";
import { GatsbyImage } from "gatsby-plugin-image";

const projectImgHeight = 200;
const projectWrapClass = "project__wrap";
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
  [`& .${projectWrapClass}`]: {
    position: "relative",
    overflow: "hidden",
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
  },
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
            <div
              className={projectWrapClass}
              key={`project ${projectIndex + 1}`}
            >
              <GatsbyImage
                alt={`project ${projectIndex + 1}`}
                className={projectImgClass}
                image={project[0]}
                objectFit="cover"
                // objectPosition="50% 70%"
              />
              <p className={projectTextClass}>
                {t("pages.portfolio.project")} {projectIndex + 1}
              </p>
            </div>
          ))}
        </ProjectsGrid>
      </Container>
    </div>
  );
}
