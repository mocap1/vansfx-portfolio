import AnimatedCounter from "./AnimatedCounter";

export default function ProjectStats() {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-3">

        <Stat
          value={<><AnimatedCounter end={200} suffix="K+" /></>}
          label="Total Views"
        />

        <Stat
          value={<><AnimatedCounter end={5} suffix="+" /></>}
          label="Years Experience"
        />

        <Stat
          value={<><AnimatedCounter end={20} suffix="+" /></>}
          label="Completed Projects"
        />

      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-black text-white">
        {value}
      </h2>

      <p className="mt-3 text-zinc-400">
        {label}
      </p>
    </div>
  );
}