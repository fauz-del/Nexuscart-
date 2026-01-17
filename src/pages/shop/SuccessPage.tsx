import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-8">
           <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 animate-pulse" />
              <CheckCircle size={64} className="text-cyan-500 relative z-10" />
           </div>
        </div>

        <div className="border-l-2 border-cyan-500 pl-6 mb-8">
          <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em] mb-2">Transaction_Verified // 2026</p>
          <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter">STASH_SECURED</h1>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8 space-y-4">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-[10px] uppercase tracking-widest">
            <Cpu size={14} /> Allocation_Status: Verified
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed font-medium">
            Your hardware has been allocated from the central node. Transit logistics are initiating delivery protocols to your registered coordinates.
          </p>
        </div>

        <button onClick={() => navigate('/shop')} className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer">
          <ArrowLeft size={14} /> Return_to_Matrix
        </button>

        <div className="mt-8 flex justify-center gap-4 opacity-30">
           <ShieldCheck size={16} className="text-white" />
           <p className="text-[8px] font-mono text-white uppercase tracking-[0.3em]">Nexus_Encrypted_Transaction</p>
        </div>
      </div>
    </div>
  );
}
