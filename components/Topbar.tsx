'use client';

import { CURRENT_USER } from '@/lib/mockData';

export default function Topbar() {
  return (
    <header className="h-16 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6
                       bg-[#121212]/95 border-b border-[#2a2a2a] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
      {/* Search bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events, people..."
            className="w-full px-4 py-2 pl-10 rounded-lg
                       bg-[#1a1a1a] border border-[#2a2a2a]
                       text-white placeholder:text-[#707070]
                       focus:outline-none focus:ring-2 focus:ring-aggie-maroon focus:border-transparent"
          />
          <span className="absolute left-3 top-2.5 text-[#707070]">🔍</span>
        </div>
      </div>

      {/* User profile */}
      <div className="flex items-center gap-3 ml-6">
        <div className="text-right">
          <p className="text-sm font-medium text-white">
            {CURRENT_USER.name}
          </p>
          <p className="text-xs text-[#b0b0b0]">
            {CURRENT_USER.email}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold
                        bg-aggie-maroon">
          {CURRENT_USER.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      </div>
    </header>
  );
}
