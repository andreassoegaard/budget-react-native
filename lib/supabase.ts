import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } from "@env";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = REACT_APP_SUPABASE_URL || "";
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
