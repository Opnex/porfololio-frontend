const projects = [
  {
    id: 1,
    title: "Library Management",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/library.png",
    live: "https://library-management-system-dusky-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Space Tourism",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/Space-Tourism.png",
    live: "https://space-tourism-ashen-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "Shopping Cart Project",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/Shopping Cart.png",
    live: "https://new-cart-assignment.vercel.app/",
  },

  {
    id: 4,
    title: "Library Management",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/library.png",
    live: "https://library-management-system-dusky-eta.vercel.app/",
  },
  {
    id: 5,
    title: "Space Tourism",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/Space-Tourism.png",
    live: "https://space-tourism-ashen-sigma.vercel.app/",
  },
  {
    id: 6,
    title: "Shopping Cart Project",
    desc: "Real-time weather application with 5-day forecast using data from a weather API.",
    img: "/projects/Shopping Cart.png",
    live: "https://new-cart-assignment.vercel.app/",
  },
];



export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800"
          >
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>

              <div className="mt-4 flex gap-3">
                {p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="px-3 py-1 border rounded-lg"
                  >
                    Live
                  </a>
                )}

                {/* {p.code !== "#" && (
                  <a
                    href={p.code}
                    target="_blank"
                    className="px-3 py-1 border rounded-lg"
                  >
                    Code
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
