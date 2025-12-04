'use client';

import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Heart,
  CheckSquare
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'registrations', label: 'My Registrations', icon: ClipboardList },
  { id: 'mentorship', label: 'Mentorship', icon: Heart },
  { id: 'gareview', label: 'GA Review', icon: CheckSquare },
];

export default function SidebarNew({ currentView, setCurrentView }) {
  return (
    <aside
      className="fixed left-0 top-0 h-screen flex flex-col"
      style={{
        width: '260px',
        background: 'linear-gradient(to bottom, #500000, #000000)'
      }}
    >
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold">
          Aggie2Aggie <span className="text-[#D6D3C4]">Connect</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive
                      ? 'bg-[#D6D3C4] text-black font-semibold'
                      : 'bg-transparent text-[#D1D1D1] hover:bg-[#500000]'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
