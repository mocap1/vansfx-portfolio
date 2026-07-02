import FloatingShape from "./FloatingShape";

export default function BackgroundScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left */}
      <FloatingShape
        size={180}
        className="left-20 top-28 opacity-40"
      />

      {/* Top Right */}
      <FloatingShape
        size={130}
        className="right-28 top-48 opacity-30"
      />

      {/* Bottom Left */}
      <FloatingShape
        size={240}
        className="bottom-28 left-24 opacity-25"
      />

      {/* Bottom Right */}
      <FloatingShape
        size={170}
        className="bottom-40 right-32 opacity-35"
      />

      {/* Center Accent */}
      <FloatingShape
        size={100}
        className="right-[18%] top-[58%] opacity-20"
      />
    </div>
  );
}