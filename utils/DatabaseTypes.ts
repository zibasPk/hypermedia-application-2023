export interface Area {
  slug: string; // BigInt is typically represented as a number in JavaScript/TypeScript
  name: string | null;
  description: string | null;
  data1: number | null;
  short_description: string | null;
  image: string | null;
  project: Project[];
  section_1_title: string | null;
  section_2_title: string | null;
  section_3_title: string | null;
  section_1_description: string | null;
  section_2_description: string | null;
  section_3_description: string | null;
  section_1_image: string | null;
  section_2_image: string | null;
  section_3_image: string | null;
}

export interface TeamMember {
  slug: string;
  name: string | null;
  surname: string | null;
  age: number | null;
  role: string | null;
  short_description: string | null;
  image: string | null;
  project: Project[] | null;
}

export interface Project {
  slug: string;
  supervisor: TeamMember | null;
  descriptive_image: string | null;
  data1: number | null;
  description: string | null;
  name: string | null;
  top_project: number | null;
  section_1_title: string | null;
  section_1_description: string | null;
  section_2_title: string | null;
  section_2_description: string | null;
  section_1_image: string | null;
  section_2_image: string | null;
  area: Area[] | null;
}
