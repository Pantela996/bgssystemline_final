interface INavLink {
  route: string;
  text: string;
}

const getPageNavTStringFor = (page: string) => `pages.${page}.navText`;

export const navLinks: INavLink[] = [
  {
    route: "/",
    text: getPageNavTStringFor("home"),
  },
  {
    route: "/services/",
    text: getPageNavTStringFor("services"),
  },
  {
    route: "/portfolio/",
    text: getPageNavTStringFor("portfolio"),
  },
  {
    route: "/about/",
    text: getPageNavTStringFor("about"),
  },
  {
    route: "/contact/",
    text: getPageNavTStringFor("contact"),
  },
];
