import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // 🚨 FIX: NEVER redirect while loading!
  if (loading) return null; // or loading spinner

  // ❌ Only redirect AFTER session finished loading
  if (!session) return <Navigate to="/login" replace />;

  return children;
}
