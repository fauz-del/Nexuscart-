import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mode, setMode] = useState("selection");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      let data;
      if (mode === "login") {
        data = await authService.signIn(email, password);
      } else {
        data = await authService.signUp(email, password);
      }
      login(data.user);
      navigate("/");
    } catch (err: any) {
      setErrorMsg(err.message.toUpperCase());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #06b6d4 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
      </div>

      <motion.div
        layout
        className="relative z-10 w-full max-w-sm bg-white/40 dark:bg-neutral-950/40 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[40px] p-10 text-center shadow-2xl overflow-hidden"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-900 dark:bg-white mb-8 shadow-xl">
          <span className="text-white dark:text-black font-black text-2xl">N</span>
        </div>

        <AnimatePresence mode="wait">
          {mode === "selection" && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="flex flex-col gap-4"
            >
              <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none mb-2">
                NEXUS <span className="text-cyan-500">AUTH</span>
              </h1>
              <p className="text-slate-500 dark:text-neutral-400 text-sm mb-8">
                Deploy your credentials to proceed.
              </p>

              <button
                onClick={() => setMode("login")}
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-cyan-500 cursor-pointer"
              >
                Sign In
              </button>

              <button
                onClick={() => setMode("signup")}
                className="w-full py-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
              >
                New Unit / Signup
              </button>
            </motion.div>
          )}

          {(mode === "login" || mode === "signup") && (
            <motion.form
              onSubmit={handleAuth}
              key="form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex flex-col gap-5 text-left"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter text-center">
                {mode === "login" ? "IDENTITY VERIFICATION" : "UNIT REGISTRATION"}
              </h2>

              {errorMsg && (
                <p className="text-[10px] text-red-500 font-mono text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20 uppercase tracking-widest">
                  {errorMsg}
                </p>
              )}

              <div className="space-y-4 mt-2">
                <div>
                  <label className="text-[10px] font-black text-slate-400 dark:text-neutral-600 uppercase tracking-widest ml-1">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="USER@NEXUS.COM"
                    className="w-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/5 px-4 py-3 rounded-xl text-xs font-mono dark:text-white focus:border-cyan-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 dark:text-neutral-600 uppercase tracking-widest ml-1">Password</label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/5 px-4 py-3 rounded-xl text-xs font-mono dark:text-white focus:border-cyan-500 outline-none"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-cyan-500 text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50"
              >
                {loading ? "PROCESSING..." : (mode === "login" ? "Confirm Login" : "Initialize Account")}
              </button>

              <button
                type="button"
                onClick={() => setMode("selection")}
                className="text-center text-[10px] font-bold text-slate-400 dark:text-neutral-600 uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-pointer"
              >
                ← Back to Protocols
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <button
          onClick={() => navigate('/')}
          className="mt-10 text-[10px] font-black text-slate-400 dark:text-neutral-600 hover:text-cyan-500 uppercase tracking-[0.3em] transition-colors cursor-pointer"
        >
          Return to Mainframe
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
