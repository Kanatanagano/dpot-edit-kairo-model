export type Navitem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  descreption: string;
  url: string;
  ogImg: string;
  links: {
    x: string;
    github: string;
  };
};

export type MarketingConfig = {
  mainNav: Navitem[];
};
