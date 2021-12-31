import { styled, Container } from "@mui/material";

export const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: "black", // use theme color
  paddingTop: theme.spacing(4),
}));

export const footerAreas = {
  logo: "footer-logo-area",
  address: "footer-address-area",
  links: "footer-links-area",
  hours: "footer-hours-area",
};
export const ContentWrap = styled("main")(({ theme }) => ({
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `"${footerAreas.address}" "${footerAreas.links}" "${footerAreas.hours}" "${footerAreas.logo}"`,
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateAreas: `"${footerAreas.address} ${footerAreas.links}" "${footerAreas.hours} ${footerAreas.hours}" "${footerAreas.logo} ${footerAreas.logo}"`,
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateAreas: `"${footerAreas.address} ${footerAreas.links}" "${footerAreas.logo} ${footerAreas.hours}"`,
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateAreas: `"${footerAreas.logo} ${footerAreas.address} ${footerAreas.links} ${footerAreas.hours}"`,
  },
}));

export const SectionTitleClass = "section__title";
export const Section = styled("section")(({ theme }) => ({
  color: "white", // use theme color
  display: "flex",
  flexDirection: "column",

  [`.${SectionTitleClass}`]: {
    marginBottom: "1rem",
    borderBottom: `0.25rem double ${theme.palette.primary.main}`,
  },
}));

export const LogoWrap = styled("div")(({ theme }) => ({
  "& > div": {
    maxWidth: 400,
    margin: "0 auto",
  },
}));

export const navLinkActiveClass = "navlink--active";
export const Nav = styled("nav")(({ theme }) => ({
  "& ul": {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  "& li": {
    margin: 0,
    width: "100%",
  },
  "& a": {
    width: "100%",
    display: "inline-block",
    textDecoration: "none",
    textTransform: "capitalize",
    color: "white", // use theme color
    "&:hover": {
      color: theme.palette.primary.main,
      "& > p": {
        transform: "skewX(-15deg)",
        "&::before": {
          marginRight: theme.spacing(1),
          width: theme.spacing(1),
        },
      },
    },
    [`&.${navLinkActiveClass}`]: {
      color: theme.palette.primary.main,
      "& > p": {
        transform: "skewX(-15deg)",
        "&::before": {
          marginRight: theme.spacing(1.5),
          width: theme.spacing(1),
          boxShadow: `calc(${theme.spacing(0.5)}) 0 ${
            "black" // theme.palette.secondary.main
          }, calc(${theme.spacing(0.5)} + 2px) 0 ${theme.palette.primary.main}`,
        },
      },
    },
    "& > p": {
      width: "100%",
      transition: "transform 200ms ",
      margin: 0,
      position: "relative",
      "&::before": {
        content: '""',
        display: "inline-block",
        height: "1em",
        background: theme.palette.primary.main,
        width: 0,
        marginRight: 0,
        transition: "width 200ms, margin 200ms",
      },
    },
  },
}));

export const FooterOfFooter = styled("footer")(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
}));
