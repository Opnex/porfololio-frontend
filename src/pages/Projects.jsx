import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Library Management",
    desc: "A full functional library management system.",
    img: "/projects/library.png",
    live: "https://library-management-system-dusky-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Space Tourism",
    desc: "Space travel website with beautiful UI.",
    img: "/projects/Space-Tourism.png",
    live: "https://space-tourism-ashen-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "Shopping Cart Project",
    desc: "Dynamic cart with quantity update and totals.",
    img: "/projects/Shopping Cart.png",
    live: "https://new-cart-assignment.vercel.app/",
  },
  {
    id: 4,
    title: "Task Management App",
    desc: "Same project for testing pagination.",
    img: "/projects/Task Management.png",
    live: "https://task-manager-gamma-rust.vercel.app/",
  },
  {
    id: 5,
    title: "Figma-Landing Page Project",
    desc: "Same project for testing pagination.",
    img: "/projects/Figma-Landing Page.png",
    live: "https://landing-page-hazel-tau.vercel.app/",
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3; // how many projects per page

  const totalPages = Math.ceil(projects.length / perPage);

  const start = (currentPage - 1) * perPage;
  const paginatedProjects = projects.slice(start, start + perPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 hover:scale-[1.02] transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {p.desc}
              </p>

              <div className="mt-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="px-4 py-1 border rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-3">
        {/* Prev Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center border font-semibold transition ${
              currentPage === i + 1
                ? "bg-green-500 text-white border-green-500"
                : "hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
