import { Link } from "react-router-dom";
import { FaHome, FaHandsHelping, FaUserFriends, FaTimes, FaBars } from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Hamburger button to open sidebar */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-blue-700 text-white rounded-md shadow-md"
        >
          <FaBars />
        </button>
      )}

      <aside
        className={`fixed z-40 h-full w-64 bg-blue-800 text-white flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-6 border-b border-blue-700">
          <span className="font-bold text-2xl">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaHome /> Home
          </Link>
          <Link to="/donor" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaHandsHelping /> Donor Dashboard
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaUserFriends /> Recipients
          </Link>
        </nav>
      </aside>
    </>
  );
}
