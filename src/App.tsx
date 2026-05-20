import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Dashboard } from "./components/home/Dashboard"; // 导入新组件

function App() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      {/* 核心逻辑：登录了看 Dashboard，没登录看 Hero */}
      {session ? <Dashboard /> : <Hero />}
    </div>
  );
}

export default App;