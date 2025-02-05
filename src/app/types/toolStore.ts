type ExpertiseType = {
  value: string;
  desc: string;
};
export type ToolsType = {
  id: string;
  tech: Array<string>;
  expertise: ExpertiseType[];
};

export type CertificationsType = {
  logo: string;
  status: string;
  name: string;
};

export type WhatsBrewingType = {
  id: string;
  certifications: CertificationsType[];
  title: string[];
};

export type HeadingTitleType = {
  id: string;
  title: string[];
}
