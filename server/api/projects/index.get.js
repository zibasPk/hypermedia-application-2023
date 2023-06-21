import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("projects")
    .select(
      "project_code, name, description,relevance, supervisor (member_code,name,surname)"
    )
    .neq("relevance", 0);

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  return data;
});
