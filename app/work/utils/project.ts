import ecommerceimg from "@/static/images/projects/ecommerce-home-page.jpg";
import portfolioimg from "@/static/images/projects/portfolio-home-page.jpg";

export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Simple eCommerce Site",
    description:
      "A basic eCommerce website built with React and TypeScript, featuring product listings and basic shopping cart functionality",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
    ],
    image: ecommerceimg,
    live: "https://destined-ecommerce-site.vercel.app/",
    github: "https://github.com/SirDest/simple-e-commerce-site",
  },
  {
    num: "02",
    category: "frontend",
    title: "Personal Portfolio",
    description:
      "This repository hosts my personal portfolio, showcasing my frontend development skills. It also reflects my expertise in building responsive web applications with modern technologies.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: portfolioimg,
    live: "https://destined-ecommerce-site.vercel.app/",
    github: "https://github.com/SirDest/Portfolio-Website",
  },
  // {
  //   num: "03",
  //   category: "frontend",
  //   title: "eCommerce Website",
  //   description:
  //     "A basic eCommerce website built with React and TypeScript, featuring product listings and basic shopping cart functionality",
  //   stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
  //   image: ecommerceimg,
  //   live: "https://destined-ecommerce-site.vercel.app/",
  //   github: "https://github.com/SirDest/simple-e-commerce-site",
  // },
];
