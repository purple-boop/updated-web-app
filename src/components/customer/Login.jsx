import React, { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

function Login({ session, setSession }) {
  // const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUpWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        scopes: "profile email",
      },
    });
  };

  const signInWithEmail = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email: email });
    if (error) {
      console.error("Error sending OTP:", error.message);
    } else {
      setOtpSent(true);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/8c/07/b5/8c07b5ea7123187f23cfb1fcb9561a47.jpg')",
      }}
    >
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-2xl shadow-2xl p-10 w-80 text-white">
        {!session ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

            {/* GOOGLE BUTTON */}
            <button
              onClick={signUpWithGoogle}
              className="w-full py-3 rounded-xl text-lg font-semibold bg-pink-500 hover:bg-pink-600 transition mb-8"
            >
              Sign In with Google
            </button>

            {/* EMAIL + MAGIC LINK */}
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 rounded-xl bg-white/30 text-center placeholder-white text-white"
              />

              <button
                onClick={signInWithEmail}
                className="w-full py-3 rounded-xl text-lg bg-pink-300 hover:bg-pink-400 text-pink-900 transition"
              >
                Sign In
              </button>
            </div>

            {otpSent && (
              <p className="text-center mt-3 text-green-200">
                💌 Check your email!
              </p>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <img
              src={session?.user?.user_metadata?.avatar_url}
              alt="profile"
              className="w-20 h-20 rounded-full border-2 border-pink-400"
            />
            <p className="font-semibold">
              {session?.user?.user_metadata?.full_name}
            </p>
            <p>{session?.user?.email}</p>

            <button
              onClick={signOut}
              className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
