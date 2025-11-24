const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Python", icon: "/icons/python.jpg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.jpg" },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((s) => (
          <div
            key={s.name}
            className="
              bg-white/10 dark:bg-slate-800 
              p-8 rounded-xl 
              shadow-md 
              border border-white/10
              hover:shadow-xl 
              transition 
              hover:-translate-y-1 
              backdrop-blur
            "
          >
            <div className="flex justify-center">
              <div className="
                w-20 h-20 rounded-full 
                bg-white/10 dark:bg-slate-700 
                flex items-center justify-center
                shadow-inner
                ring-2 ring-white/10
                hover:scale-105 transition
              ">
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            <p className="text-center text-xl font-semibold mt-6">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
