type ShapeProps = {
  className?: string;
};

export function DoubleSquare({ className = "" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="12"
        width="76"
        height="76"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <rect
        x="28"
        y="28"
        width="44"
        height="44"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CornerSquare({ className = "" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 35V10H35"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M65 10H90V35"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M90 65V90H65"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M35 90H10V65"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function MotionFrame({ className = "" }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="15"
        width="90"
        height="90"
        stroke="currentColor"
        strokeWidth="1"
      />

      <circle
        cx="60"
        cy="60"
        r="2"
        fill="currentColor"
      />

      <line
        x1="60"
        y1="15"
        x2="60"
        y2="105"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity=".4"
      />

      <line
        x1="15"
        y1="60"
        x2="105"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity=".4"
      />
    </svg>
  );
}