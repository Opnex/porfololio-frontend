import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ theme, setTheme }) {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

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

        {/* logo */}
        <Link className="text-xl font-bold tracking-wide" to="/">
          Opnex
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(([to, label]) => {
            const active = loc.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative px-1 transition ${
                    active ? "text-green-500 font-semibold" : "hover:text-green-500"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 transition-transform ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } origin-left`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* theme toggle + mobile button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
            className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2 text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-4 space-y-4">
          {links.map(([to, label]) => {
            const active = loc.pathname === to;

            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`block text-lg ${
                  active ? "text-green-500 font-semibold" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
