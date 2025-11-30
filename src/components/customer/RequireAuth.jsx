import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  // ❌ If NO session → redirect to login page
  if (!session) return <Navigate to="/login" replace />;

  // ✔ If logged in → show the protected page
  return children;
}
