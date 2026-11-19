export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  kind: "internship" | "role" | "project";
  points: string[];
  stack: string[];
};