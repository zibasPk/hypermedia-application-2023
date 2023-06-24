export interface Area {
  area_code: number; // BigInt is typically represented as a number in JavaScript/TypeScript
  name: string | null;
  description: string | null;
  data1: number | null;
  short_description: string | null;
  image: string;
  projects: Project[] | null;
}

export interface TeamMember {
  member_code: number;
  name: string | null;
  surname: string | null;
  age: number | null;
  role: string | null;
  short_description: string | null;
  image: string | null;
  projects: Project[] | null;
}

export interface Project {
  project_code: number;
  supervisor: string | null;
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
  areas: Area[] | null;
}
