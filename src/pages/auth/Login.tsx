import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GOOGLE_PATH = '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.1 2.38 29.36 0 24 0 16.51 0 9.8 4.48 6.46 11.16l6.85 5.33C14.71 11.73 19.04 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.1h12.46c-.56 2.92-2.1 5.39-4.43 7.0v5.99h7.79c4.54-4.18 7.15-10.35 7.15-17.54z"/><path fill="#FBBC05" d="M6.46 11.16v5.33H0C1.73 20.81 4.54 24.55 6.46 24.55c.9 1.09 1.86 2.05 2.76 2.91v6.26H0v6.01c3.45-6.82 8.35-11.52 14.73-14.73C12.19 19.36 9.11 15.04 6.46 11.16z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.79-5.99c-2.18 1.46-5.02 2.3-8.1 2.3-4.94 0-9.26-2.62-11.51-6.59l-6.85 5.33C9.8 43.52 16.51 48 24 48z"/>';

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("selection"); // selection, login, signup

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 relative overflow-hidden transition-colors duration-500">
      {/* Background Tech Decor */}
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
              <p className="text-slate-500 dark:text-neutral-400 text-sm mb-8">Deploy your credentials to proceed.</p>
              
              <button className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer">
                 <svg className="w-5 h-5" viewBox="0 0 48 48" dangerouslySetInnerHTML={{ __html: GOOGLE_PATH }} />
                 Google Protocol
              </button>

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
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex flex-col gap-5 text-left"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter text-center">
                {mode === "login" ? "IDENTITY VERIFICATION" : "UNIT REGISTRATION"}
              </h2>

              <div className="space-y-4 mt-2">
                <div>
                  <label className="text-[10px] font-black text-slate-400 dark:text-neutral-600 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" placeholder="USER@NEXUS.COM" className="w-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/5 px-4 py-3 rounded-xl text-xs font-mono text-white focus:border-cyan-500 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 dark:text-neutral-600 uppercase tracking-widest ml-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/5 px-4 py-3 rounded-xl text-xs font-mono text-white focus:border-cyan-500 outline-none" />
                </div>
              </div>

              <button className="w-full bg-cyan-500 text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-cyan-500/20 cursor-pointer">
                {mode === "login" ? "Confirm Login" : "Initialize Account"}
              </button>

              <button 
                onClick={() => setMode("selection")}
                className="text-center text-[10px] font-bold text-slate-400 dark:text-neutral-600 uppercase tracking-widest hover:text-cyan-500 transition-colors cursor-pointer"
              >
                ← Back to Protocols
              </button>
            </motion.div>
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
