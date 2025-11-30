import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../lib/supabaseClient";

// Slider Images
import landing2 from "../elements/redvv.jpg";
import landing3 from "../elements/truffle.jpg";
import landing4 from "../elements/cheesecake.jpg";

function Login({ session, setSession }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sliderImages = [landing2, landing3, landing4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // ⭐ AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ⭐ REDIRECT BASED ON USER ROLE
  async function redirectBasedOnRole(userId) {
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (error || !data) return;

    if (data.role === "admin") {
      navigate("/admin", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }

  // ⭐ SESSION LISTENER
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);

        if (event === "SIGNED_IN" && session?.user) {
          redirectBasedOnRole(session.user.id);
        }
      }
    );

    // Check session on refresh
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session?.user) {
        redirectBasedOnRole(data.session.user.id);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // ⭐ GOOGLE LOGIN
  const signUpWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: { access_type: "offline", prompt: "consent" },
      },
    });
  };

  // ⭐ MAGIC LINK LOGIN
  const signInWithEmail = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setOtpSent(true);
  };

  // ⭐ SIGN OUT
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div
      className="min-h-screen flex bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/8c/07/b5/8c07b5ea7123187f23cfb1fcb9561a47.jpg')",
      }}
    >
      {/* LEFT SIDE — SLIDER */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="relative w-[70%] h-[98%] overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm opacity-80">
          <img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            alt="slide"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />
        </div>
      </div>

      {/* RIGHT SIDE — LOGIN FORM */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-2xl shadow-2xl p-10 w-80 text-white">
          {!session ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

              {/* GOOGLE LOGIN */}
              <button
                onClick={signUpWithGoogle}
                className="w-full py-3 rounded-xl text-lg font-semibold bg-pink-500 hover:bg-pink-600 transition mb-8"
              >
                Sign In with Google
              </button>

              {/* EMAIL LOGIN */}
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 rounded-xl bg-white/30 text-center placeholder-black text-black"
                />

                <button
                  onClick={signInWithEmail}
                  className="w-full py-3 rounded-xl text-lg bg-pink-300 hover:bg-pink-400 text-pink-900 transition"
                >
                  Send Login Link
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
    </div>
  );
}

export default Login;
