export default function FloatingShapes() {
  const shapes = [
    { size: 80, top: "10%", left: "6%", delay: "0s", duration: "32s" },
    { size: 120, top: "22%", right: "10%", delay: "4s", duration: "40s" },
    { size: 60, top: "62%", left: "12%", delay: "2s", duration: "36s" },
    { size: 100, top: "72%", right: "18%", delay: "6s", duration: "44s" },
    { size: 75, top: "40%", left: "82%", delay: "8s", duration: "38s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute border border-violet-500/20"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animation: `float ${shape.duration} ease-in-out ${shape.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}