import { styled } from "@mui/material";

export const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: "black", // use theme color
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(3),
}));

export const footerAreas = {
  logo: "footer-logo-area",
  address: "footer-address-area",
  links: "footer-links-area",
  hours: "footer-hours-area",
};

const maxLogoWidth = "200px";
export const ContentWrap = styled("main")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `"${footerAreas.address}" "${footerAreas.links}" "${footerAreas.hours}" "${footerAreas.logo}"`,
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateAreas: `"${footerAreas.address} ${footerAreas.links}" "${footerAreas.logo} ${footerAreas.hours}"`,
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: `${maxLogoWidth} repeat(3, 1fr)`,
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
  "& > img": {
    display: "block",
    margin: "0 auto",
    width: "100%",
    maxWidth: maxLogoWidth,
    [theme.breakpoints.up("sm")]: {
      margin: "0",
    },
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

const externalLinkSquareSize = 44;
export const ExternalLinksWrap = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  margin: `${theme.spacing(4)} 0`,
  padding: `${theme.spacing(4)} 0`,
  borderTop: `0.25rem double ${theme.palette.primary.main}`,
  borderBottom: `0.25rem double ${theme.palette.primary.main}`,
  listStyle: "none",

  "& > li": {
    display: "inline-block",
    width: externalLinkSquareSize,
    height: externalLinkSquareSize,
    margin: 0,
    padding: 0,
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
    "& > a": {
      display: "inline-block",
      width: "100%",
      height: "100%",
      transition: "background 200ms, color 200ms",
      background: theme.palette.primary.main,
      color: "black",
      border: `1px solid ${theme.palette.primary.main}`,

      "&:hover": {
        background: "black",
        color: theme.palette.primary.main,
      },
      "& > svg": {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

export const FooterOfFooter = styled("footer")(({ theme }) => ({
  color: "gray" || theme.palette.primary.main,
  textAlign: "center",
  padding: `${theme.spacing(3)} 0`,
}));
