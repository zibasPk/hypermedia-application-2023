import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from("team_member")
    .select(
      "member_code, name, surname, age, role, short_description,image, project (project_code, supervisor, description, name, top_project)"
    )
    .eq("member_code", id)
    .limit(1)
    .single();

  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }

  return data;
});
