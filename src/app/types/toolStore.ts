type ExpertiseType = {
  value: string;
  desc: string;
};
export type ToolsType = {
  tech: Array<string>;
  expertise: ExpertiseType[];
};

type CertificationsType = {
  logo: string;
  status: string;
  name: string;
};

export type WhatsBrewingType = {
  certifications: CertificationsType[];
};
