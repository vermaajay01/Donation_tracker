import { useEffect, useState } from "react";
import { FaHandsHelping, FaUserFriends, FaRobot } from "react-icons/fa";

export default function Home() {
  const [gradient, setGradient] = useState("linear-gradient(90deg, #3b82f6, #60a5fa)");

  // Scroll-based gradient
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setGradient(
        `linear-gradient(90deg, hsl(${scroll % 360}, 70%, 45%), hsl(${(scroll + 120) % 360}, 70%, 55%))`
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move effect
  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const hue1 = Math.floor(x * 360);
    const hue2 = Math.floor((y * 360 + 120) % 360);
    setGradient(`linear-gradient(135deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%))`);
  };

  // Hover gradient effect for cards
  const hoverGradient = (e, enter = true) => {
    if (enter) {
      e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6, #60a5fa)";
    } else {
      e.currentTarget.style.background = e.currentTarget.dataset.default;
    }
  };

  const features = [
    {
      icon: <FaHandsHelping className="text-3xl mb-2" />,
      title: "Donors",
      desc: "Register and donate food easily. Track your donations and make a real impact.",
      color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    },
    {
      icon: <FaUserFriends className="text-3xl mb-2" />,
      title: "Recipients",
      desc: "Request food based on your needs. Get notifications when food is available.",
      color: "linear-gradient(135deg, #2563eb, #3b82f6)",
    },
    {
      icon: <FaRobot className="text-3xl mb-2" />,
      title: "AI Assistance",
      desc: "Our AI predicts food demand and helps allocate donations efficiently.",
      color: "linear-gradient(135deg, #1e40af, #3b82f6)",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section
        id="hero"
        onMouseMove={handleMouseMove}
        className="text-white transition-all duration-500 p-20 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg"
        style={{ background: gradient }}
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Food Donation Tracker
          </h1>
          <p className="text-lg md:text-xl">
            Track donations, connect donors and recipients, and reduce food waste to promote good health.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/food-donation-concept-illustration_114360-1213.jpg"
            alt="Food Donation"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg shadow p-6 text-white text-center flex flex-col items-center cursor-pointer transition-all duration-500"
              style={{ background: feature.color }}
              data-default={feature.color}
              onMouseEnter={(e) => hoverGradient(e, true)}
              onMouseLeave={(e) => hoverGradient(e, false)}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
