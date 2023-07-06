import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("projects")
    .select(
      "slug, supervisor (slug, name, surname, age, role, short_description,image),description,name,top_project,section_1_title,section_1_description,section_2_title,section_2_description,section_1_image,section_2_image"
    );

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  return data;
});
