// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin({ setAuth }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // Test authentication by making a request to a protected endpoint
//       const response = await fetch("https://portfolio-backend-production-95b3.up.railway.app/messages", {
//         headers: {
//           'Authorization': 'Basic ' + btoa(username + ':' + password)
//         }
//       });

//       if (response.ok) {
//         // Store credentials and set auth
//         localStorage.setItem('adminAuth', btoa(username + ':' + password));
//         setAuth(true);
//         navigate('/admin/dashboard');
//       } else {
//         setError("Invalid username or password");
//       }
//     } catch (err) {
//       setError("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // -----------------------------
//   // LOGOUT
//   // -----------------------------
//   const handleHome = () => {
//     localStorage.removeItem("Home");
//     setAuth(false);
//     navigate("/");
//   };

//   return (
//   <div className="min-h-screen relative bg-gray-50 dark:bg-slate-900 py-20 px-4">

//     {/* Home button pinned to top-left */}
//     <button
//       onClick={handleHome}
//       className="absolute top-4 left-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg z-50"
//     >
//       Home
//     </button>

//     {/* Centered login form */}
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
//             Admin Login
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//               {error}
//             </div>
//           )}
          
//           <div className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// );
// }












import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        localStorage.setItem("adminAuth", btoa(username + ":" + password));
        setAuth(true);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 py-20 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Admin Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
          <input type="text" required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
          <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md disabled:opacity-50">{loading ? "Signing in..." : "Sign in"}</button>
        </form>
      </div>
    </div>
  );
}

