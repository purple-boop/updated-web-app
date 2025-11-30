import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function RequireAdmin({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    async function load() {
      // get current session
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user?.id) {
        // get user role
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (!error) {
          setRole(data.role);
        }
      }

      setLoading(false);
    }

    load();
  }, []);

  if (loading) return null;

  // ❌ If not logged in — redirect to login
  if (!session) return <Navigate to="/login" replace />;

  // ❌ If logged in BUT NOT ADMIN — redirect to homepage
  if (role !== "admin") return <Navigate to="/" replace />;

  // ✅ Admin allowed
  return children;
}
