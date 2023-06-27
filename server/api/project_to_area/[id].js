import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id.split("-")[1];

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("project_to_area")
    .select(
      "area (slug, name, area_code)" // questo si può cambiare a "area_code" se non vogliamo usare il nome
    )
    .eq("project_code", id);

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});
