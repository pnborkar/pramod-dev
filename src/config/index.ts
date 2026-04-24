import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pramod Borkar - Solutions Architect",
  author: "Pramod Borkar",
  description:
    "Solutions Architect at Neo4j. 15+ years in pre&post-sales across data, identity, and ops. I write about what I'm seeing in the field and build demos that show graph + AI working together.",
  lang: "en",
  siteLogo: "/pramod2.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/pramodborkar" },
    { text: "Github", href: "https://github.com/pnborkar" },
   
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Pramod Borkar",
    specialty: "Solutions Architect",
    summary:
      "Solutions Architect at Neo4j. 15+ years in pre-sales across data, identity, and ops. I write about what I'm seeing in the field and build demos that show graph + AI working together.",
    email: "pnborkar@email.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Graph-Augmented Supply Chain Optimizer on Databricks",
      summary: "An AI-powered supply chain risk and disruption analysis tool built on Databricks and Neo4j",
      linkSource: "https://github.com/pnborkar/supply-chain-optimizer",
      image: "/supply_chain.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Pramod Borkar, a Senior Solutions Architect based in the Bay Area. I spend my days helping enterprise teams solve connected-data problems with Neo4j, Databricks, and the modern AI stack — and my evenings building demos that explore where those stacks are heading.
Before Neo4j, I spent 15+ years in pre-sales and technical enablement across MongoDB, Okta, Exabeam, and BMC. My sweet spot is the part of the job where a customer walks in thinking they have one problem, and walks out realizing they actually have a different — more solvable — one.
I write occasionally about graph, lakehouses, and the evolving data stack. If any of that is interesting, let's talk.
    `,
    image: "/pramod2.jpg",
  },
};

// #5755ff
