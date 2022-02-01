import React from "react";
import { Link } from "gatsby-plugin-react-intl";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { GetSliderImagesQuery } from "../../../../graphql-types";
// @ts-ignore
import t from "@translate";
import { serviceSlugs } from "../../../utils/constantsPlain";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const sliderImgNames = [...serviceSlugs] as const;

const swiperPaginationClass = "swiper-pagination";
const SliderContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  overflow: "hidden",
  backgroundColor: "black", //theme.palette.textDark,

  [`& .${swiperPaginationClass}`]: {
    ".swiper-pagination-bullet": {
      borderRadius: 0,
      width: "1em",
      height: "1em",
      margin: "0 0.3em !important",
      opacity: 1,
      background: "gray",
      boxShadow: "inset 0 0 0.2em black",
      transition: "background 200ms, transform 200ms",
      transformOrigin: "center",
      position: "relative",
      "&-active": {
        background: theme.palette.primary.main,
        transform: "scale(1.2)",
      },
    },
  },
}));

const cardContainerWrapClass = "slide-card__container-wrap";
const cardContainerClass = "slide-card__container";
const slideImgContainerClass = "slide-img__container";
const SlideContent = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [`& .${slideImgContainerClass}`]: {
    height: "78vh",
    width: "100%",
  },
  [`& .${cardContainerWrapClass}`]: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  [`& .${cardContainerClass}`]: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
  },
}));

const slideCardTitleClass = "slide-card__title";
const slideCardTextClass = "slide-card__text";
const slideCardButtonClass = "slide-card__button";
const SlideCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  background: `rgba(255,255,255,0.8)`,
  padding: theme.spacing(3),
  width: "100%",
  marginBottom: "50px",

  [theme.breakpoints.up("md")]: {
    marginBottom: "80px",
    maxWidth: 420,
    padding: theme.spacing(5),
  },

  [`& .${slideCardTitleClass}`]: {
    color: "black",
  },
  [`& .${slideCardTextClass}`]: {
    color: "black",
  },
  [`& .${slideCardButtonClass}`]: {
    alignSelf: "flex-end",
    color: "white",
    textDecoration: "none",
    marginLeft: "auto",
    padding: theme.spacing(1.5),
    background: "rgba(0,0,0,0.7)",
    transition: "background 200ms",
    "&:hover": {
      background: "rgba(0,0,0,1)",
    },
  },
}));

export default function Slider() {
  const data = useStaticQuery<GetSliderImagesQuery>(graphql`
    query getSliderImages {
      allFile(filter: { relativeDirectory: { eq: "slider" } }) {
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
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
          el: `.${swiperPaginationClass}`,
          renderBullet: (_index, className) =>
            `<span class="${className}"></span>`,
        }}
      >
        {sliderImgNames.map((imgName, imgIndex) => (
          <SwiperSlide key={imgName}>
            <SlideContent>
              <GatsbyImage
                className={slideImgContainerClass}
                image={useImgWithName(imgName)}
                alt={imgName}
                objectFit="cover"
                objectPosition="50% 70%"
              />
              <div className={cardContainerWrapClass}>
                <Container className={cardContainerClass}>
                  <SlideCard
                    onClick={(e) => e.stopPropagation()}
                    onDrag={(e) => e.stopPropagation()}
                  >
                    <h3 className={slideCardTitleClass}>
                      {t(`global.services.service${imgIndex}.title`)}
                    </h3>
                    <p className={slideCardTextClass}>
                      {t(`global.services.service${imgIndex}.cardContent`)}
                    </p>
                    <Link
                      to={`/services/${imgName}`}
                      className={slideCardButtonClass}
                    >
                      {t(`pages.home.sliderButton`)}
                    </Link>
                  </SlideCard>
                </Container>
              </div>
            </SlideContent>
          </SwiperSlide>
        ))}

        <div className={swiperPaginationClass} />
      </Swiper>
    </SliderContainer>
  );
}
