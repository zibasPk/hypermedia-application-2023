import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  let { data, error } = await client.from("team_member").select("*");

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  return data;
});
