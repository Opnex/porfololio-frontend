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

