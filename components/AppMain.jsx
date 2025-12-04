'use client';

import { useState } from 'react';
import SidebarNew from './SidebarNew';

export default function AppMain() {
  const [view, setView] = useState('dashboard');

  // View title mapping
  const viewTitles = {
    dashboard: 'Dashboard View',
    events: 'Events View',
    registrations: 'My Registrations View',
    mentorship: 'Mentorship View',
    gareview: 'GA Review View',
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <SidebarNew currentView={view} setCurrentView={setView} />

      {/* Main Content Area */}
      <main
        className="flex-1 bg-black text-white p-8"
        style={{ marginLeft: '260px' }}
      >
        <h1 className="text-4xl font-bold">{viewTitles[view]}</h1>
      </main>
    </div>
  );
}
