import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("area")
    .select(
      "area_code, name, description, short_description, image, section_1_title, section_1_description, section_1_image, section_2_title, section_2_description, section_2_image, section_3_title, section_3_description, section_3_image, project (slug)"
    )
    .eq("slug", id)
    .limit(1)
    .single();

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});
