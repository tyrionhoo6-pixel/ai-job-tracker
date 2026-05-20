import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <main className="max-w-5xl mx-auto pt-24 px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-8">
        <Sparkles className="w-3 h-3 text-yellow-500" />
        AI-Powered Job Tracking
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Stop using spreadsheets.
      </h1>
      <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
        Manage your job applications and automate your career pipeline.
      </p>
    </main>
  );
};