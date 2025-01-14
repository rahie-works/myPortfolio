type ProjectDataType = {
  name: string;
  repo: string;
  images?: Array<string>;
  desc: string;
  video?: string;
};

export const MainProjects: ProjectDataType[] = [
  {
    name: "Adharva Institute of Commerce",
    repo: "https://rahie-works.github.io/adharva/",
    video: "/projects/adharva.mov",
    desc: `A React web app for Corbiz Solutions' commerce institute, featuring course listings and a contact form powered by EmailJS. 
    Content is dynamically managed via Contentful, ensuring easy updates. Built for scalability, it lays the groundwork for future features like online classes.`,
  },
  {
    name: "My Portfolio",
    video: "/projects/portfolio.mov",
    repo: "https://github.com/rahie-works/myPortfolio",
    desc: `A Next.js portfolio app leveraging Cloudflare Workers for fast, serverless API endpoints. 
    It dynamically fetches projects, skills, and contact details, ensuring high performance and scalability with minimal latency.`,
  },
];
