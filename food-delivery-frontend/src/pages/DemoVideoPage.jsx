import React from 'react';
import { ArrowLeft, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoVideoPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to App
        </Link>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Full-Stack Walkthrough</span>
        </div>
      </div>

      {/* Video Container */}
      <div className="w-full max-w-5xl bg-zinc-900/80 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl backdrop-blur-xl">
        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <source src="/FoodieHub_Demo_Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info / Summary */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> FoodieHub Project Walkthrough
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              FoodieHub – Full-Stack Architecture & Live Demo
            </h1>
            <p className="text-zinc-400 text-sm mt-1 max-w-2xl leading-relaxed">
              End-to-end walk-through demonstrating customer ordering, Redux cart state synchronization, role-based authentication, and the Spring Boot Admin Dashboard.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              to="/restaurants"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm transition-all shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95"
            >
              Explore Live App
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-zinc-500 mt-6 text-center">
        Built with React 19, Tailwind CSS, Java Spring Boot & MySQL • Candidate: Brajesh Kumar
      </p>
    </div>
  );
};

export default DemoVideoPage;
