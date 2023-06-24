import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("projects")
    .select(
      "project_code, supervisor (member_code, name, surname, age, role, short_description,image),data1,description,name,top_project,section_1_title,section_1_description,section_2_title,section_2_description,section_1_image,section_2_image"
    )
    .neq("relevance", 0);

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  return data;
});
