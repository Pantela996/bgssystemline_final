interface INavLink {
  route: string;
  text: string;
}

export const navLinks: INavLink[] = [
  {
    route: "/",
    text: "pages.home.navText",
  },
  {
    route: "/services/",
    text: "pages.services.navText",
  },
  {
    route: "/portfolio/",
    text: "pages.portfolio.navText",
  },
  {
    route: "/about/",
    text: "pages.about.navText",
  },
  {
    route: "/contact/",
    text: "pages.contact.navText",
  },
];
