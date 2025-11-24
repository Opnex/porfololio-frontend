import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminDashboard({ setAuth, theme, setTheme }) {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", image_url: "", live_url: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const getAuthHeaders = () => {
    const credentials = localStorage.getItem("adminAuth");
    return { Authorization: "Basic " + credentials, "Content-Type": "application/json" };
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${backendURL}/projects`);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${backendURL}/admin/messages`, { headers: getAuthHeaders() });
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (activeTab === "projects") fetchProjects();
    else fetchMessages();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setAuth(false);
    navigate("/");
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select an image file");

    const reader = new FileReader();
    reader.onload = async () => {
      const projectData = { ...formData, image_url: reader.result };
      await fetch(`${backendURL}/admin/projects`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(projectData),
      });
      setFormData({ title: "", description: "", image_url: "", live_url: "" });
      setSelectedFile(null);
      setImagePreview("");
      setShowForm(false);
      fetchProjects();
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await fetch(`${backendURL}/admin/projects/${id}`, { method: "DELETE", headers: getAuthHeaders() });
    fetchProjects();
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Delete message?")) return;
    await fetch(`${backendURL}/admin/messages/${id}`, { method: "DELETE", headers: getAuthHeaders() });
    fetchMessages();
  };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
          </div>

          <div className="flex border-b border-gray-300 dark:border-slate-700 mb-6">
            <button onClick={() => setActiveTab("projects")} className={`py-4 px-6 font-medium ${activeTab === "projects" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"}`}>Projects</button>
            <button onClick={() => setActiveTab("messages")} className={`py-4 px-6 font-medium ${activeTab === "messages" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"}`}>Messages ({messages.length})</button>
          </div>

          {activeTab === "projects" && (
            <div>
              <button onClick={() => setShowForm(!showForm)} className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg">{showForm ? "Cancel" : "Add New Project"}</button>
              {showForm && (
                <form onSubmit={handleSubmitProject} className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
                  <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 border mb-4 rounded" required />
                  <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border mb-4 rounded" required />
                  <input type="file" accept="image/*" onChange={handleFileSelect} className="mb-4" required />
                  {imagePreview && <img src={imagePreview} alt="Preview" className="max-h-40 mb-4 rounded border" />}
                  <input type="url" placeholder="Live URL" value={formData.live_url} onChange={(e) => setFormData({ ...formData, live_url: e.target.value })} className="w-full p-3 border mb-4 rounded" required />
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Project</button>
                </form>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-slate-800 rounded-lg shadow">
                    <img src={project.image_url} alt="project" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                      <button onClick={() => handleDeleteProject(project.id)} className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{message.name}</h3>
                      <p className="text-gray-600 text-sm">{message.email}{message.phone && ` • ${message.phone}`}</p>
                    </div>
                    <button onClick={() => handleDeleteMessage(message.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                  </div>
                  <p className="text-gray-700">{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
