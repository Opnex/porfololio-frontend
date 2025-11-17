import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-green-900 to-slate-900 text-white py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        <div>
          <p className="text-lg opacity-70">Hello, I'm</p>

          <h1 className="text-5xl font-extrabold mt-2 leading-tight">
            Opnex <span className="text-green-400">— Full Stack Developer</span>
          </h1>

          <p className="mt-6 text-lg opacity-90">
            I create beautiful, responsive websites and web applications with modern technologies using React,
            JavaScript, Tailwind, Python and MySQL. Passionate about clean code and user-friendly interfaces.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-white"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-white/20 shadow-xl">
            <img
              src="/profile/opnex-img2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
