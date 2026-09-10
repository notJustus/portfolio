export interface IUrl {
  url: string;
}

export interface IText {
  text: string;
}

export interface IJobs {
  id: string;
  company: string;
  designation: string;
  companyLinkedin: string;
  companyUrl: string;
  from: string;
  to: string;
  logo: IUrl;
}

export interface IProjects {
  id: string;
  title: string;
  uniqueId: number;
  description: string;
  demoLink: string;
  videoUrl?: string;
  githubLink: string;
  techStack: Array<IText>;
  image: IUrl;
}

export interface INavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export interface ICmsApiResponse {
  jobs: IJobs[];
  projects: IProjects[];
}

export interface IHomePageLayoutProps {
  cmsApiResponse: ICmsApiResponse;
}

export interface IProjectsSectionProps {
  projects: IProjects[];
}

export interface IJobsSectionProps {
  jobs: IJobs[];
}

export interface IProjectCardProps {
  project: IProjects;
}

export interface IJobCardProps {
  job: IJobs;
}

// IContactFormProps removed with Contact feature deletion
