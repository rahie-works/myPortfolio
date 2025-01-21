import { ToolsType, WhatsBrewingType } from "@/app/types/toolStore";

export const MajorTools: ToolsType = {
  tech: [
    "React",
    "TypeScript",
    "Javascript",
    "Node",
    "NextJs",
    "Tailwind",
    "CSS3",
    "HTML5",
    "AWS",
  ],
  expertise: [
    {
      value: "+4",
      desc: "Hands on experience",
    },
    {
      value: "+12",
      desc: "Project Contributions",
    },
    {
      value: "+4",
      desc: "Enterprise Contributions",
    },
    {
      value: "+5",
      desc: "Peer mentorship",
    },
  ],
};

export const MinorTools: ToolsType = {
  tech: ["Java", "Swift", "Python", "SQL", "C", "Firebase"],
  expertise: [
    {
      value: "+4",
      desc: "Hands on experience since 2020",
    },
    {
      value: "+3",
      desc: "Project Contributions",
    },
    {
      value: "+3",
      desc: "Top-notch Enterprise Contributions",
    },
  ],
};

export const WhatsBrewingItemsConstants: WhatsBrewingType = {
  certifications: [
    {
      logo: "/logos/AWS_cert_practitioner.png",
      status: "brewing",
      name: "AWS Cloud Practitioner",
    },
    {
      logo: "/logos/AWS_solutions_arch.png",
      status: "upcoming",
      name: "AWS Solutions Architect Ast",
    },
    {
      logo: "/logos/AWS_solutions_pro.png",
      status: "upcoming",
      name: "AWS Solutions Aechitect Pro",
    },
    {
      logo: "/logos/AWS_cert_dev.png",
      status: "upcoming",
      name: "AWS Cloud Developer",
    },
  ],
};
