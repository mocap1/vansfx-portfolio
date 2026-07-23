import FloatingShape from "./FloatingShape";

const particles = Array.from({ length: 28 });

export default function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Purple ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[1200px]
          w-[1200px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[220px]
        "
      />

      {/* Floating particles */}
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-violet-400/40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      <FloatingShape size={220} className="left-12 top-24 opacity-60" />
      <FloatingShape size={170} className="right-16 top-36 opacity-45" />
      <FloatingShape size={280} className="bottom-16 left-12 opacity-35" />
      <FloatingShape size={200} className="bottom-28 right-20 opacity-50" />
      <FloatingShape size={120} className="right-[22%] top-[58%] opacity-30" />
    </div>
  );
}