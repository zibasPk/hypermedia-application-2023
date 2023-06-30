import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("project")
    .select(
      "slug, supervisor (slug, name, surname, age, role, short_description,image), descriptive_image,data1,description,name,top_project,section_1_title,section_1_description,section_2_title,section_2_description,section_1_image,section_2_image"
    )
    .eq("slug", id)
    .limit(1)
    .single();

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});
