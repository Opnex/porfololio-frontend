import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";

export default function Navbar({ theme, setTheme }) {
  const loc = useLocation();

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/skills", "Skills"],
    ["/projects", "Projects"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link className="text-xl font-bold" to="/">Opnex</Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:text-green-500 ${
                  loc.pathname === to ? "text-green-500 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* theme toggle */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
            className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
