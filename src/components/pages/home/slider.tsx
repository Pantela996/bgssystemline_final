import React from "react";
import { Link } from "gatsby-plugin-react-intl";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GetSliderImagesQuery } from "../../../../graphql-types";
// @ts-ignore
import t from "@translate";

const sliderImgNames = [
  "facade-solution",
  "interior-design",
  "old-but-gold",
  "furniture",
  "modern-celling",
  "lighting-design",
  "wall-cladding",
] as const;
// NAME: must be the same as route that it's link is pointing to
// ORDER: must be the same as is in translations

const swiperPaginationClass = "swiper-pagination";
const SliderContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  overflowX: "hidden",
  backgroundColor: "black", //theme.palette.textDark,

  [`& .${swiperPaginationClass}`]: {
    ".swiper-pagination-bullet": {
      borderRadius: 0,
      width: "0.7em",
      height: "0.7em",
      opacity: 1,
      background: "gray",
      transition: "background 200ms, transform 200ms",
      transformOrigin: "center",
      position: "relative",
      "&-active": {
        background: theme.palette.primary.main,
        transform: "scale(1.3)",
      },
    },
  },
}));

SwiperCore.use([Autoplay, Pagination, Navigation]);

const containerWrapClass = "slide-container-wrap";
const textContainerClass = "slide-text-container";
const imgContainerClass = "slide-img-container";
const SlideContent = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [`& .${imgContainerClass}`]: {
    height: "80vh",
    width: "100%",
  },
  [`& .${containerWrapClass}`]: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  [`& .${textContainerClass}`]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

const SlideCard = styled("div")(({ theme }) => ({
  position: "relative",
  background: `rgba(255,255,255,0.7)`,
  padding: theme.spacing(3),
  maxWidth: 330,
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
          delay: 5500,
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
                className={imgContainerClass}
                image={useImgWithName(imgName)}
                alt={imgName}
                objectFit="cover"
                objectPosition="50% 65%"
              />
              <div className={containerWrapClass}>
                <Container className={textContainerClass}>
                  <SlideCard
                    onClick={(e) => e.stopPropagation()}
                    onDrag={(e) => e.stopPropagation()}
                  >
                    <h3>
                      {t(`pages.home.slider.cards.card${imgIndex}.title`)}
                    </h3>
                    <p>
                      {t(`pages.home.slider.cards.card${imgIndex}.content`)}
                    </p>
                    <Link to={`/services/${imgName}`}>Discover</Link>
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
