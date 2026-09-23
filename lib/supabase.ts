import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Null when env vars are missing — forms then fall back to demo mode. */
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;

export type SignupResult = { ok: true; duplicate: boolean } | { ok: false; message: string };

/** Stores a Dreamlist / newsletter signup. Duplicate emails count as success. */
export async function saveSignup(entry: {
  name?: string;
  email: string;
  source: "dreamlist" | "newsletter";
}): Promise<SignupResult> {
  if (!supabase) return { ok: true, duplicate: false };

  const { error } = await supabase.from("dreamlist_signups").insert(entry);
  if (!error) return { ok: true, duplicate: false };
  if (error.code === "23505") return { ok: true, duplicate: true };
  console.error("Dreamlist signup failed:", error.message);
  return { ok: false, message: "Couldn't reach the Dreamlist right now — try again in a moment." };
}
