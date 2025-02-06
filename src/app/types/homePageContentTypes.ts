type SocialLinks = {
  linkedIn : string;
  instagram: string;
  stackoverflow: string;
  github: string;
}

export type ProfileInfoType = {
  buttonText: string;
  id: string;
  location: string;
  name: string;
  title: string;
  socialLinks: SocialLinks;
};

export type SummaryInfoType = {
  id: string;
  portfolioTitle: string;
  summaryHeading: string[];
  summaryIntro: string[];
  summaryLinks: string[];
};

export type ExternalLinks = {
  id: string;
  linkedIn: string;
  github: string;
  instagram: string;
  stackoverflow: string;
}
