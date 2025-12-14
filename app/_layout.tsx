import { Stack, Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Layout() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (session === undefined) return null;

  return session ? <Stack /> : <Redirect href="/login" />;
}
