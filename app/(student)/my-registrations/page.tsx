import { MOCK_USER_REGISTRATIONS } from '@/lib/mockData';

export default function MyRegistrationsPage() {
  return (
    <div className="space-y-8">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-aggie-maroon to-aggie-dark_maroon rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white">My Registrations</h1>
        <p className="text-aggie-gray-light mt-2">
          View and manage your event registrations
        </p>
      </div>

      {/* Glassy table wrapper */}
      <div className="rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.6)] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-white/5">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#d0d0d0] uppercase tracking-wider">
                Registration ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#d0d0d0] uppercase tracking-wider">
                Event Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#d0d0d0] uppercase tracking-wider">
                Date Registered
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#d0d0d0] uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#d0d0d0] uppercase tracking-wider">
                Review Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-white/10">
            {MOCK_USER_REGISTRATIONS.map((registration) => (
              <tr
                key={registration.registration_id}
                className="hover:bg-white/6 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white">
                  {registration.registration_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#e0e0e0]">
                  {registration.event_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#b0b0b0]">
                  {new Date(registration.time_stamp).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                      registration.status === 'Registered'
                        ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/50'
                        : registration.status === 'Waitlisted'
                        ? 'bg-amber-500/15 text-amber-200 border-amber-400/50'
                        : 'bg-white/10 text-[#d0d0d0] border-white/30'
                    }`}
                  >
                    {registration.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                      registration.review_status === 'Approved'
                        ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/50'
                        : registration.review_status === 'Pending'
                        ? 'bg-amber-500/15 text-amber-200 border-amber-400/50'
                        : 'bg-red-500/15 text-red-200 border-red-400/50'
                    }`}
                  >
                    {registration.review_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {MOCK_USER_REGISTRATIONS.length === 0 && (
        <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.6)] p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-[#b0b0b0] text-lg font-medium mb-4">
            No registrations yet
          </p>
          <a
            href="/events"
            className="inline-block px-6 py-3 bg-aggie-maroon text-white rounded-xl hover:bg-aggie-dark_maroon font-semibold transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.9)] active:scale-[0.97] active:translate-y-[1px]"
          >
            Browse events to get started
          </a>
        </div>
      )}
    </div>
  );
}
