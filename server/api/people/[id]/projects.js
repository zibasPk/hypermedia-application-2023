import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const id = event.context.params.id;

  let { data, error } = await client
    .from("project")
    .select("*")
    .eq("supervisor", id);

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  return data;
});
