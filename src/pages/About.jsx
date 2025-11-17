export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        <img
          src="/profile/opnex-img2.jpg"
          alt="Profile"
          className="rounded-2xl shadow-lg w-full object-cover"
        />

        <div>
          <p className="text-lg leading-relaxed">
            I am a full-stack developer with experience building modern,
            scalable and user-focused applications. I love clean UI, smooth UX,
            and building solutions that solve real-life problems.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
            <li>✔️ 3+ years of professional experience</li>
            <li>✔️ React, Python, JavaScript, Tailwind, MySQL</li>
            <li>✔️ Available for full-time or contract roles</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1LTjKQ-YExxJjcZarRpfg67mTkvRonr-R/view?usp=drivesdk"
              target="_blank"
              className="px-5 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
            >
              View My CV
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-5 py-3 border rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
