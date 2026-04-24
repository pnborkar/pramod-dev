import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Pramod Borkar - Solutions Architect",
  author: "Pramod Borkar",
  description:
    "Solutions Architect at Neo4j. 15+ years in pre&post-sales across data, identity, and ops. I write about what I'm seeing in the field and build demos that show graph + AI working together.",
  lang: "en",
  siteLogo: "/pramod1.jpg",
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
      company: "Neo4j",
      position: "Solutions Architect",
      startDate: "January 2024",
      endDate: "Present",
      summary: [
        
        "Pre-sales architect for strategic accounts positioning Neo4j's graph platform as a knowledge layer. Work alongside data platforms like Databricks, Snowflake, and Google Cloud with a focus on GraphRAG and AI-era workloads.",
        "Build customer demos and internal enablement assets — most recently a multi-agent supply chain tool combining Neo4j AuraDB and Databricks Delta with Claude-powered natural language routing.",
      ],
    },
    {
      company: "MongoDB",
      position: "Manager, Products & Solutions",
      startDate: "May 2021",
      endDate: "Jan 2024",
      summary: [
        "Partnered with field SAs on high-stakes POCs and discovery calls, bringing trenches-level context back into enablement content.",
        "Built enablement assets on modern MongoDB patterns — aggregation frameworks, Atlas Search, vector search — used by 100+ field SAs.",
      ],
    },
    {
    
      company: "Okta",
      position: "Principal Client Architect",
      startDate: "Jan 2012",
      endDate: "Jan 2016",
      summary: [
      "Designed enterprise-scale IAM architectures for strategic customers including Intel, Adobe, and Varian Medical.",
      "Led architecture reviews across complex identity environments, partnering with CIOs and security teams on SSO, lifecycle management, and adaptive MFA.",
      "Built custom integrations that extended Okta's platform and contributed to $25M+ in upsell revenue,",
     ],
    }
 ],
  projects: [
    {
      name: "Graph-Augmented Supply Chain Optimizer on Databricks",
      summary: "An AI-powered supply chain risk and disruption analysis tool built on Databricks and Neo4j",
      linkSource: "https://github.com/pnborkar/supply-chain-optimizer",
      image: "/supply_chain.png",
    },
    {
      name: "Pattern Matching Kit",
      summary: "A reusable Neo4j Cypher pattern library for fraud rings, recommendations, supply chain risk, and customer behavior — built to accelerate SA discovery conversations.",
      linkSource: "https://neo4j.com/blog/graph-database/what-is-pattern-matching",
      image: "/route2.png",
    },
    {
      name: "TennisPOD",
      summary: "Computer-vision tennis serve analyzer. Tracks pose keypoints and mechanics across sessions",
      linkSource: "https://github.com/pnborkar/tennis-pod",
      image: "/tennis.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Pramod Borkar, a Senior Solutions Architect based in the Bay Area. I spend my days helping enterprise teams solve connected-data problems with Neo4j, Databricks, and the modern AI stack — and my evenings building demos that explore where those stacks are heading.
Before Neo4j, 
\n I spent 15+ years in pre-sales and technical enablement across MongoDB, Okta, Exabeam, and BMC. My sweet spot is the part of the job where a customer walks in thinking they have one problem, and walks out realizing they actually have a different, more solvable one.
I write occasionally about graph, lakehouses, and the evolving data stack. If any of that is interesting, <a href="pnborkar@gmail.com">let's talk</a> 
    `,
    image: "/pramod2.jpg",
  },
};

// #1f1caf
