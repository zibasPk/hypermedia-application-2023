export interface Area {
  area_code: number; // BigInt is typically represented as a number in JavaScript/TypeScript
  name: string | null;
  description: string | null;
  data1: number | null; // BigInt is typically represented as a number in JavaScript/TypeScript
  short_description: string | null;
  image: string;
}

export interface TeamMember {
  member_code: number; // BigInt is typically represented as a number in JavaScript/TypeScript
  name: string | null;
  surname: string | null;
  age: number | null;
  role: string | null;
  short_description: string | null;
}
