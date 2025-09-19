import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DonorDashboard from "./pages/DonorDashboard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      {/* Animated gradient background */}
      <AnimatedBackground />

      <div className="flex h-screen overflow-hidden">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <div
          className="flex-1 flex flex-col transition-all duration-300"
          style={{ marginLeft: sidebarOpen ? "16rem" : "0" }}
        >
          <header className="bg-blue-700 text-white p-4 shadow-md">
            <h1 className="text-xl font-bold">Food Donation Tracker</h1>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/donor" element={<DonorDashboard />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
