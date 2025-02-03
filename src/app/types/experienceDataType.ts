export type ExperienceDetailsType = {
  title: string;
  startDate: string;
  endDate: null | string;
  company: string;
  companyUrl: string;
  logo: string;
  brief: string;
  tech: string[];
}

export type ExpDataType = {
  id: string;
  experienceData: ExperienceDetailsType[];
};

export type ExperienceLargedataType = {
  id: string;
  clients: {
    count: number;
    desc: string;
  },
  expYears: {
    years: number;
    desc: string;
  },
  projects: {
    count: number;
    desc: string;
  }
}
