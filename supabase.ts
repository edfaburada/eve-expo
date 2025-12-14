import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

const supabaseUrl = 'https://lhcpgngnujeegggkfwyf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoY3BnbmdudWplZWdnZ2tmd3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTk1OTcsImV4cCI6MjA4MDk3NTU5N30.wvCc3FLmC9ukJvahQuf0kPbc5FovQsxnlFCckOzD4ww';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: {
        getItem: SecureStore.getItemAsync,
        setItem: SecureStore.setItemAsync,
        removeItem: SecureStore.deleteItemAsync,
      },
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
