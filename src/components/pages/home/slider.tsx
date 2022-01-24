import React from "react";
import { Link } from "gatsby-plugin-react-intl";
// import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "@mui/material";
import slug from "slug";
// import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SlideDataType = {
  title: string;
  text: string;
  src: string;
};

const sliderData: SlideDataType[] = [
  {
    title: "Facade Solution",
    text: "When it comes to getting the best return on your investment",
    src: "../assets/images/slider/facade-solution.jpg",
  },
  {
    title: "Interior Design",
    text: "We bring to the table years of experience in implementing various types of interior design solutions in Qatar and abroad",
    src: "../assets/images/slider/interior-design.jpg",
  },
  {
    title: "Old But Gold",
    text: "Based on the highest standards of planning and execution excellence",
    src: "../assets/images/slider/old-but-gold.jpg",
  },
  {
    title: "Furniture",
    text: "Our purchasing and logistics team goes the extra mile – quite literally – to provide your space with materials obtained from our partners located at various parts of the world",
    src: "../assets/images/slider/furniture.jpg",
  },
  {
    title: "Modern Celling",
    text: "Translating concepts of landscape architecture into actual spaces with the highest level of professionalism is our team’s primary objective",
    src: "../assets/images/slider/modern-celling.jpg",
  },
  {
    title: "Lighting Design",
    text: "Many professionals in the interior design world believe that 75% of great design is attributed to great lighting design",
    src: "../assets/images/slider/lighting-design.jpg",
  },
  {
    title: "Wall Cladding",
    text: "The inspiration for our latest creations comes from purely geometric to the most fluid organic forms, touching upon everything in between",
    src: "../assets/images/slider/wall-cladding.png",
  },
];

const swiperPaginationClass = "swiper-pagination";
const SliderContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  overflowX: "hidden",

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

const TextContainer = styled(Container)(({ theme }) => ({
  marginBottom: 40,
}));

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Slider() {
  // const logoQuery = graphql`
  //   query headerLogoQuery {
  //     file(name: { eq: "logo-title" }) {
  //       childImageSharp {
  //         fixed(traceSVG: { blackOnWhite: false }) {
  //           src
  //         }
  //       }
  //     }
  //   }
  // `;
  // const data = useStaticQuery(logoQuery);

  return (
    <SliderContainer>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
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
        {sliderData.map((slide) => (
          <SwiperSlide key={slug(slide.title)}>
            {/* <div>
          <GatsbyImage 
            image={image} 
            // formats={["auto", "webp", "avif"]}
            alt={`Demo image for: ${slide.title}`}
            // placeholder="blurred"
          />
        </div> */}
            <TextContainer>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <Link to={`/services/${slug(slide.title)}`}>Discover</Link>
              </div>
            </TextContainer>
          </SwiperSlide>
        ))}

        <div className={swiperPaginationClass} />
      </Swiper>
    </SliderContainer>
  );
}
