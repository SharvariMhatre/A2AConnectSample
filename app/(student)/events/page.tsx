import { MOCK_EVENTS, MOCK_USER_REGISTRATIONS } from '@/lib/mockData';

export default function EventsPage() {
  return (
    <div className="space-y-8">
      {/* Header with gradient background */}
   <div
  className="
    relative overflow-hidden
    rounded-2xl p-8
    border border-white/20
    bg-black/40
    backdrop-blur-2xl
    shadow-[0_24px_60px_rgba(0,0,0,0.9)]
  "
>
  {/* soft highlight */}
  <div className="pointer-events-none absolute inset-0 bg-white/10 opacity-40 mix-blend-soft-light" />

  <div className="relative z-10">
    <h1 className="text-3xl font-bold text-white">
      Browse Events
    </h1>
    <p className="mt-2 text-[#dcdcdc]">
      Discover and register for upcoming events
    </p>
  </div>
</div>


      <div className="grid grid-cols-1 gap-6">
        {MOCK_EVENTS.map((event) => {
          const registration = MOCK_USER_REGISTRATIONS.find(
            (r) => r.event_id === event.event_id,
          );
          const spotsLeft = event.capacity - event.registered_count;
          const isFull = spotsLeft <= 0;

          return (
            <div
              key={event.event_id}
              className="
                rounded-xl p-6
                border border-white/15
                bg-white/5 backdrop-blur-md
                shadow-[0_18px_45px_rgba(0,0,0,0.6)]
                hover:bg-white/10 hover:border-aggie-maroon
                transition-all duration-200
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">
                    {event.event_name}
                  </h2>

                  <p className="text-sm text-[#d0d0d0] mt-3 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-5">
                    {/* Date pill */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/8">
                      <span className="text-lg">📅</span>
                      <span className="text-sm font-medium text-[#e0e0e0]">
                        {new Date(event.event_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Capacity pill */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/8">
                      <span className="text-lg">👥</span>
                      <span className="text-sm font-medium text-[#e0e0e0]">
                        {event.registered_count}/{event.capacity} registered
                      </span>
                    </div>

                    {/* Status pill (full / low / healthy) */}
                    <div
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg border
                        ${
                          isFull
                            ? 'bg-red-500/15 border-red-400/40'
                            : spotsLeft <= 10
                            ? 'bg-orange-500/15 border-orange-400/40'
                            : 'bg-emerald-500/15 border-emerald-400/40'
                        }
                      `}
                    >
                      <span className="text-lg">
                        {isFull ? '🔒' : '✨'}
                      </span>
                      <span
                        className={`
                          text-sm font-semibold
                          ${
                            isFull
                              ? 'text-red-300'
                              : spotsLeft <= 10
                              ? 'text-orange-200'
                              : 'text-emerald-200'
                          }
                        `}
                      >
                        {isFull ? 'Full' : `${spotsLeft} spots left`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-6">
                  {registration ? (
                    <div className="text-center">
                      <span className="px-6 py-3 rounded-xl font-semibold text-sm block whitespace-nowrap
                                        bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                        Registered ✓
                      </span>
                      <p className="text-xs text-[#9a9a9a] mt-2">
                        ID: {registration.registration_id}
                      </p>
                    </div>
                  ) : (
                    <button
                      disabled={isFull}
                      className={`
                        px-8 py-3 rounded-xl font-semibold text-sm
                        transition-all duration-200
                        ${
                          isFull
                            ? 'bg-white/8 text-[#777777] border border-white/15 cursor-not-allowed'
                            : 'bg-aggie-maroon text-white border border-transparent hover:bg-aggie-dark_maroon shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.9)] active:scale-[0.97] active:translate-y-[1px]'
                        }
                      `}
                    >
                      {isFull ? 'Full' : 'Register'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
