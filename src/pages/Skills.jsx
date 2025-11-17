const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "python", icon: "/icons/python.jpg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.jpg" },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={s.icon}
              alt={s.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <p className="text-center text-lg font-semibold">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
