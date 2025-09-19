import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `linear-gradient(135deg, hsl(${offset}, 50%, 80%), hsl(${(offset + 120) % 360}, 50%, 80%))`,
        transition: "background 0.1s linear",
      }}
    ></div>
  );
}
