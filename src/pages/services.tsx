import React from "react";
import Seo from "../components/seo";
import { Link } from "gatsby-plugin-react-intl";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Title from "../components/title";
// @ts-ignore
import t from "@translate";
import { serviceSlugs } from "../utils/constantsPlain";
import FullScreen from "../components/fullScreen";
import SplitScreen from "../components/splitScreen";
import SideContainer from "../components/sideContainer";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const sliderImgNames = [...serviceSlugs] as const;

const slideTransitionDuration = 1200;
const swiperPaginationClass = "services-swiper-pagination";
const SliderContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  overflow: "hidden",
  backgroundColor: "black", //theme.palette.textDark,

  [`& .${swiperPaginationClass}`]: {
    bottom: `${theme.spacing(7)} !important`,
    left: "auto !important",
    right: "auto !important",
    top: "auto !important",
    [theme.breakpoints.up("md")]: {
      bottom: "auto !important",
      left: "auto !important",
      right: "24px !important",
      top: `${theme.spacing(7)} !important`,
    },
    display: "flex",
    flexDirection: "column",

    ".services-swiper-pagination-bullet": {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: `translate(-50%, -${theme.spacing(7)})`,

      [theme.breakpoints.up("md")]: {
        transform: `translate(${theme.spacing(7)})`,
        left: "auto",
        bottom: "auto",
        top: 0,
        right: 0,
      },
      borderRadius: 0,
      display: "flex",
      justifContent: "center",
      alignItems: "center",
      background: "transparent",
      border: "none",
      padding: 0,
      width: "auto",
      height: "auto",
      margin: "0 !important",
      fontSize: "2.25rem",
      color: "white",
      fontWeight: "bold",
      textRendering: "optimizeLegibility",
      lineHeight: 1.1,
      pointerEvents: "none",
      textShadow:
        "1px 1px 1px black, -1px 1px 1px black, 1px -1px 1px black, -1px -1px 1px black",
      opacity: 0,
      transition: `opacity 200ms, transform ${slideTransitionDuration}ms`,
      "&-active": {
        opacity: 1,
        transform: `translate(-50%, 0)`,
        [theme.breakpoints.up("md")]: {
          transform: "translateY(0)",
        },
      },
    },
  },
}));

const slideImgContainerClass = "slide-img__container";
const SlideContent = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [`& .${slideImgContainerClass}`]: {
    height: "100vw",
    maxHeight: "30vh",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "70vh",
      maxHeight: "70vh",
    },
  },
}));

function Slider({ servicesTitles }) {
  // <GetServicesImagesQuery>
  const data = useStaticQuery(graphql`
    query getServicesImages {
      allFile(filter: { relativeDirectory: { eq: "services" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
            name
          }
        }
      }
    }
  `);

  const useImgWithName = (slideTitleSlug: string) => {
    const targetEdge = data.allFile.edges.find(
      (edge) => edge.node.name === slideTitleSlug
    );
    return targetEdge.node.childImageSharp.gatsbyImageData;
  };

  return (
    <SliderContainer>
      <Swiper
        centeredSlides={true}
        spaceBetween={33}
        speed={slideTransitionDuration}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: false,
          el: `.${swiperPaginationClass}`,
          renderBullet: (bulletIndex, className) =>
            `<span class="${className}">${servicesTitles[bulletIndex]}</span>`,
        }}
      >
        {sliderImgNames.map((imgName) => (
          <SwiperSlide key={imgName}>
            <SlideContent>
              <GatsbyImage
                className={slideImgContainerClass}
                image={useImgWithName(imgName)}
                alt={imgName}
                objectFit="cover"
                objectPosition="50% 70%"
              />
            </SlideContent>
          </SwiperSlide>
        ))}

        <div className={swiperPaginationClass} />
      </Swiper>
    </SliderContainer>
  );
}

const ServiceLinksWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {},
  "& a": {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(1),
    border: "1px solid black",
    color: "black",
    marginBottom: theme.spacing(2),
    transition: "background 200ms, color 200ms",
    "&:hover": {
      background: "black",
      color: theme.palette.primary.main,
    },
  },
}));

function ServicesContent({ left = false }: { left?: boolean }) {
  return (
    <>
      <Title left={left}>{t("pages.services.title")}</Title>
      <ServiceLinksWrap>
        {serviceSlugs.map((serviceSlug, slugIndex) => (
          <Link to={`/services/${serviceSlug}`} key={serviceSlug}>
            {t(`global.services.service${slugIndex}.title`)}
          </Link>
        ))}
      </ServiceLinksWrap>
    </>
  );
}

export default function Services() {
  const servicesTitles = [];
  sliderImgNames.forEach((_, imgIndex) => {
    servicesTitles.push(t(`global.services.service${imgIndex}.title`));
  });
  return (
    <>
      <Seo
        pageTitle={t("pages.services.navText")}
        description={t("pages.services.seoDescription")}
      />
      {/* mobile */}
      <FullScreen>
        <Slider servicesTitles={servicesTitles} />
        <Container>
          <ServicesContent />
        </Container>
      </FullScreen>
      {/* desktop */}
      <SplitScreen gridTemplateColumns="calc(50% + 200px) calc(50% - 200px)">
        <Slider servicesTitles={servicesTitles} />
        <SideContainer vwRatio={1 / 3}>
          <ServicesContent left />
        </SideContainer>
      </SplitScreen>
    </>
  );
}
