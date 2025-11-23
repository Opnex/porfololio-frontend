// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// export default function App() {
//   const [theme, setTheme] = useState("light");

  
//   useEffect(() => {
//     document.documentElement.className = theme;
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
//       <Navbar theme={theme} setTheme={setTheme} />

//       <main className="pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;

    const auth = localStorage.getItem("adminAuth");
    if (auth) {
      setIsAuthenticated(true);
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Routes>
        
        {/* Admin Login — NO navbar/footer */}
        <Route
          path="/admin/login"
          element={
            isAuthenticated
              ? <Navigate to="/admin/dashboard" replace />
              : <AdminLogin setAuth={setIsAuthenticated} />
          }
        />

        {/* Admin Dashboard — WITH navbar/footer */}
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated ? (
              <AdminDashboard
                setAuth={setIsAuthenticated}
                theme={theme}
                setTheme={setTheme}
              />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/skills"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Skills />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}
