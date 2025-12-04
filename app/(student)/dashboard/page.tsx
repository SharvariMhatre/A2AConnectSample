import DashboardCard from "@/components/DashboardCard";
import {
  CURRENT_USER,
  MOCK_USER_REGISTRATIONS,
  MOCK_EVENTS,
} from "@/lib/mockData";

export default function DashboardPage() {
  // Calculate stats from mock data
  const totalRegistrations = MOCK_USER_REGISTRATIONS.length;
  const pendingReviews = MOCK_USER_REGISTRATIONS.filter(
    (r) => r.review_status === "Pending"
  ).length;
  const upcomingEvents = MOCK_EVENTS.filter(
    (e) => new Date(e.event_date) > new Date()
  ).length;

  // Get today's schedule (mock - just showing next 3 events)
  const todaysSchedule = MOCK_EVENTS.slice(0, 3);

  return (
     <div className="space-y-8 max-w-6xl mx-auto">
        {/* Welcome header with gradient background */}
        <div className="bg-gradient-to-r from-aggie-maroon to-aggie-dark_maroon rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-white">
            Hello, {CURRENT_USER.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-aggie-gray-light mt-2">
            Here's what's happening with your activities
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Upcoming Events"
            value={upcomingEvents}
            icon="📅"
            subtitle="Available to register"
          />
          <DashboardCard
            title="My Registrations"
            value={totalRegistrations}
            icon="📝"
            subtitle="Total registered"
          />
          <DashboardCard
            title="Pending Reviews"
            value={pendingReviews}
            icon="⏳"
            subtitle="Awaiting GA approval"
          />
        </div>

        {/* Quick actions - glassy */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.35)] p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/events"
              className="flex items-center gap-3 p-5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-aggie-maroon transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-aggie-maroon transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <p className="font-semibold text-white">Browse Events</p>
                <p className="text-sm text-[#b0b0b0]">
                  Find your next opportunity
                </p>
              </div>
            </a>

            <a
              href="/my-registrations"
              className="flex items-center gap-3 p-5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-aggie-maroon transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-aggie-maroon transition-colors">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <p className="font-semibold text-white">My Registrations</p>
                <p className="text-sm text-[#b0b0b0]">
                  View registration status
                </p>
              </div>
            </a>

            <a
              href="/mentorship"
              className="flex items-center gap-3 p-5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-aggie-maroon transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-aggie-maroon transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <p className="font-semibold text-white">Mentorship</p>
                <p className="text-sm text-[#b0b0b0]">
                  Connect with mentors
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Upcoming events schedule */}
        <div className="rounded-xl p-6 border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          <h2 className="text-xl font-semibold text-white mb-6">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {todaysSchedule.map((event) => {
              const registration = MOCK_USER_REGISTRATIONS.find(
                (r) => r.event_id === event.event_id
              );
              return (
                <div
                  key={event.event_id}
                  className="flex items-center justify-between p-5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/12 hover:border-aggie-maroon hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">
                      {event.event_name}
                    </h3>
                    <p className="text-sm text-[#b0b0b0] mt-2 flex items-center gap-2">
                      <span>📅</span>
                      {new Date(event.event_date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-sm text-[#d0d0d0] mt-2">
                      {event.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    {registration ? (
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                        Registered ✓
                      </span>
                    ) : (
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-[#e0e0e0] border border-white/30">
                        {event.registered_count}/{event.capacity} spots
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
