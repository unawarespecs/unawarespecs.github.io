export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  year: string;
  featured?: boolean;
};