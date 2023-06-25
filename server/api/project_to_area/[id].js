import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("project_to_area")
    .select(
      "area (area_code, name)" // questo si può cambiare a "area_code" se non vogliamo usare il nome
    )
    .eq("project_code", id)

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});
