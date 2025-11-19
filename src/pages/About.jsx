export default function About() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <div className="
            w-72 h-72 md:w-96 md:h-96 
            rounded-2xl overflow-hidden 
            shadow-xl ring-4 ring-white/10
          ">
            <img 
              src="/profile/opnex-img2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Who I Am</h3>

          <p className="leading-relaxed text-lg text-gray-300">
            I’m <strong>Opeyemi Stephen (Opnex)</strong>, a passionate and disciplined web developer 
            who loves turning ideas into modern, fast, and user-friendly web experiences.
            I enjoy building clean UI, solving problems, and constantly improving my craft.
          </p>

          <p className="leading-relaxed text-lg text-gray-300">
            I specialize in <strong>React, JavaScript, TailwindCSS</strong> and backend logic. 
            I'm always intentional about writing readable, scalable code and delivering projects that feel smooth and intuitive.
          </p>

          <a
            href="https://drive.google.com/file/d/1LTjKQ-YExxJjcZarRpfg67mTkvRonr-R/view?usp=drivesdk"
            target="_blank"
            className="
              inline-block px-6 py-3 rounded-xl
              bg-green-500 hover:bg-green-600
              text-white text-lg font-medium
              shadow-lg transition
            "
          >
            View My CV
          </a>
        </div>

      </div>
    </div>
  );
}
