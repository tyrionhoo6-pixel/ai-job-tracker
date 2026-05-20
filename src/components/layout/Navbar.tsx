import { useState, useEffect } from "react";
import { BriefcaseBusiness, LogOut, User } from "lucide-react";
import { supabase } from "../../lib/supabase"; 

export const Navbar = () => {
  const [session, setSession] = useState<any>(null);

  // 监听登录状态改变
  useEffect(() => {
    // 1. 初始获取状态
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. 监听后续状态改变 (登录/登出)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    const email = window.prompt("Enter your email to sign in:");
    if (!email) return;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin }
    });
    if (error) alert(error.message);
    else alert("Check your email!");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-zinc-950">
      <div className="flex items-center gap-2 font-bold text-xl text-white">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <BriefcaseBusiness className="text-black w-5 h-5" />
        </div>
        Applied.ai
      </div>
      
      <div className="flex items-center gap-4">
        {session ? (
          // 如果已登录，显示用户邮箱和登出按钮
          <>
            <span className="text-sm text-zinc-400 flex items-center gap-2">
              <User className="w-4 h-4" />
              {session.user.email}
            </span>
            <button 
              onClick={handleSignOut}
              className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </>
        ) : (
          // 如果未登录，显示 Sign In 按钮
          <button 
            onClick={handleLogin}
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};