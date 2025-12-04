interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  subtitle?: string;
}

export default function DashboardCard({ title, value, icon, subtitle }: DashboardCardProps) {
  return (
    <div
      className="
        rounded-lg p-6
        border border-white/25
        bg-white/10
        backdrop-blur-md
        shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        hover:bg-white/16 hover:border-white/40
        transition-all
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#d0d0d0] uppercase tracking-wide">
            {title}
          </p>
          <p className="text-3xl font-bold text-white mt-2">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-[#b0b0b0] mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <span className="text-4xl text-white/90">{icon}</span>
      </div>
    </div>
  );
}
