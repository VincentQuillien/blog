import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.unfocused.blog/",
  author: "Vincent Quillien",
  desc: "Posts about functional programming and the web.",
  title: "Unfocused",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/VincentQuillien",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vincent-quillien-b596b1105/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:vincentquillien01@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
