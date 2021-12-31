import { styled, Container as ContainerMui, Button } from "@mui/material";

export const HeaderRoot = styled("header")(({ theme }) => ({
  backgroundColor: "black", //theme.palette.textDark,
}));

const headerHeight = "80px";
export const Container = styled(ContainerMui)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 80,
}));

export const rootLockedClass = "root--locked";
export const navLinkActiveClass = "navlink--active";
export const navOpenClass = "nav--open";
export const Nav = styled("nav")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    zIndex: 100,
    top: headerHeight,
    right: "100%",
    width: "100%",
    bottom: 0,
    // background: theme.palette.secondary.main,
    backgroundColor: "black", //theme.palette.textDark,
    transition: "transform 400ms",
    [`&.${navOpenClass}`]: {
      transform: "translateX(100%)",
    },
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
      textTransform: "uppercase",
      color: "white", //theme.palette.textDark,
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
              theme.palette.secondary.main
            }, calc(${theme.spacing(0.5)} + 2px) 0 ${
              theme.palette.primary.main
            }`,
          },
        },
      },
      "& > p": {
        width: "100%",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        [theme.breakpoints.up("sm")]: {
          padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
        },
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
  },
  [theme.breakpoints.up("md")]: {
    position: "relative",
    transform: "unset",
    top: "unset",
    right: "unset",
    width: "unset",
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "row",
      margin: 0,
      padding: 0,
    },
    "& li": {
      margin: 0,
    },
    "& a": {
      display: "inline-block",
      textDecoration: "none",
      textTransform: "uppercase",
      color: "white", //theme.palette.textDark,
      "&:hover": {
        color: theme.palette.primary.main,
        "& > p::before": {
          background: theme.palette.primary.main,
          opacity: 1,
          transform: "translate(-50%, 0) scale(1)",
        },
      },
      [`&.${navLinkActiveClass}`]: {
        color: theme.palette.primary.main,
        "& > p::before": {
          background: theme.palette.primary.main,
          opacity: 1,
          transform: "translate(-50%, 0) scale(1)",
          height: 1,
        },
        "& > p::after": {
          background: theme.palette.primary.main,
          opacity: 1,
          transform: "translate(-50%, 0) scale(1)",
          height: 1,
        },
      },
      "& > p": {
        padding: theme.spacing(1),
        margin: 0,
        position: "relative",
        "&::before": {
          position: "absolute",
          content: '""',
          bottom: theme.spacing(1),
          left: "50%",
          width: `calc(100% - 2 * ${theme.spacing(1)})`,
          height: 1,
          opacity: 0,
          transform: "translate(-50%, 0.5rem) scale(0.6)",
          transition: "opacity 200ms, transform 200ms",
          background: "white", //theme.palette.textDark,
        },
        "&::after": {
          position: "absolute",
          content: '""',
          bottom: `calc(${theme.spacing(1)} - 3px)`,
          left: "50%",
          width: `calc(100% - 2 * ${theme.spacing(1)})`,
          height: 1,
          opacity: 0,
          transform: "translate(-50%, 0.5rem) scale(0.6)",
          transition: "opacity 200ms, transform 200ms",
          background: "white", //theme.palette.textDark,
        },
      },
    },
  },
}));

export const hamburgerClass = "hamburger";
export const hamburgerOpenClass = "hamburger--open";
const hamburgerTransitionDur = "400ms";
const burgerLineHeight = 4;
export const MobileMenuBtn = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 60,
  width: 60,

  [`& .${hamburgerClass}`]: {
    position: "relative",
    width: "100%",
    height: burgerLineHeight,
    overflow: "visible",
    backgroundColor: "white", //theme.palette.textDark,
    transition: `background-color ${hamburgerTransitionDur}, transform ${hamburgerTransitionDur}`,
    "&::before, &::after": {
      position: "absolute",
      content: '""',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      transition: `transform ${hamburgerTransitionDur}, height ${hamburgerTransitionDur}, background-color ${hamburgerTransitionDur}`,
      backgroundColor: "white", //theme.palette.textDark,
    },
    "&::before": {
      transform: `translateY(-${burgerLineHeight * 2}px)`,
    },
    "&::after": {
      transform: `translateY(${burgerLineHeight * 2}px) rotate(0deg)`,
    },
    [`&.${hamburgerOpenClass}`]: {
      backgroundColor: theme.palette.primary.main,
      transform: `translateY(0px) rotate(${45 * 3}deg)`,
      "&::before": {
        backgroundColor: theme.palette.primary.main,
        transform: `translateY(0px) rotate(90deg)`,
      },
      "&::after": {
        backgroundColor: theme.palette.primary.main,
        transform: `translateY(-${burgerLineHeight}px)`,
        height: 1,
      },
    },
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
