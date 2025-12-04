import { MOCK_MENTORSHIP_REQUESTS, MOCK_USER_REGISTRATIONS } from '@/lib/mockData';

export default function MentorshipPage() {
  const hasMentorshipRequest = MOCK_USER_REGISTRATIONS.some(
    (r) => r.wants_mentor === 'Yes',
  );
  const mentorshipRequest = MOCK_MENTORSHIP_REQUESTS[0];

  return (
    <div className="space-y-8">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-aggie-maroon to-aggie-dark_maroon rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white">Mentorship</h1>
        <p className="text-aggie-gray-light mt-2">
          Connect with experienced mentors in your field
        </p>
      </div>

      {hasMentorshipRequest ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mentorship request status - glassy card */}
          <div className="rounded-xl p-8 border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              Your Mentorship Request
            </h2>
            <div className="space-y-5">
              <div className="p-4 rounded-lg bg-white/8">
                <p className="text-xs font-semibold text-[#9a9a9a] uppercase tracking-wide mb-1">
                  Request ID
                </p>
                <p className="font-bold text-white text-lg">
                  {mentorshipRequest.id}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/8">
                <p className="text-xs font-semibold text-[#9a9a9a] uppercase tracking-wide mb-1">
                  Preferences
                </p>
                <p className="font-semibold text-[#e0e0e0]">
                  {mentorshipRequest.mentor_preferences}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/8">
                <p className="text-xs font-semibold text-[#9a9a9a] uppercase tracking-wide mb-2">
                  Status
                </p>
                <span
                  className={`inline-block px-4 py-2 text-sm font-semibold rounded-full border ${
                    mentorshipRequest.status === 'Matched'
                      ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/50'
                      : mentorshipRequest.status === 'Pending'
                      ? 'bg-amber-500/15 text-amber-200 border-amber-400/50'
                      : 'bg-white/10 text-[#d0d0d0] border-white/30'
                  }`}
                >
                  {mentorshipRequest.status}
                </span>
              </div>
            </div>
          </div>

          {/* What to expect - glassy card */}
          <div className="rounded-xl p-8 border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              What to Expect
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white/8 border border-white/15">
                <div className="w-6 h-6 bg-aggie-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-[#e0e0e0] font-medium">
                  We&apos;ll review your preferences and match you with a suitable
                  mentor
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white/8 border border-white/15">
                <div className="w-6 h-6 bg-aggie-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-[#e0e0e0] font-medium">
                  You&apos;ll receive an email introduction once matched
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-white/8 border border-white/15">
                <div className="w-6 h-6 bg-aggie-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-[#e0e0e0] font-medium">
                  Typical matching time is 1–2 weeks
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // Empty state - glassy card
        <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.6)] p-12 text-center">
          <div className="text-6xl mb-6">🤝</div>
          <p className="text-white text-xl font-bold mb-3">
            You haven&apos;t requested a mentor yet
          </p>
          <p className="text-[#b0b0b0] mb-8 max-w-md mx-auto">
            Request mentorship when registering for events, or reach out to a GA
          </p>
          <a
            href="/events"
            className="inline-block px-8 py-3 bg-aggie-maroon text-white rounded-xl hover:bg-aggie-dark_maroon font-semibold transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.9)] active:scale-[0.97] active:translate-y-[1px]"
          >
            Browse Events
          </a>
        </div>
      )}
    </div>
  );
}
