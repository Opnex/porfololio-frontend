// // import { Link } from "react-router-dom";

// // export default function Home() {
// //   return (
// //     <section className="bg-gradient-to-b from-green-900 to-slate-900 text-white py-32">
// //       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

// //         <div>
// //           <p className="text-lg opacity-70">Hello, I'm</p>

// //           <h1 className="text-5xl font-extrabold mt-2 leading-tight">
// //             Opnex <span className="text-green-400">— Full Stack Developer</span>
// //           </h1>

// //           <p className="mt-6 text-lg opacity-90">
// //             I create beautiful, responsive websites and web applications with modern technologies using React,
// //             JavaScript, Tailwind, Python and MySQL. Passionate about clean code and user-friendly interfaces.
// //           </p>

// //           <div className="mt-8">
// //             <Link
// //               to="/about"
// //               className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-white"
// //             >
// //               Let's Talk
// //             </Link>
// //           </div>
// //         </div>

// //         <div className="flex justify-center">
// //           <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-white/20 shadow-xl">
// //             <img
// //               src="/profile/opnex-img2.jpg"
// //               alt="Profile"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }








// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <section className="relative bg-gradient-to-b from-green-900 to-slate-900 text-white py-8 lg:py-10">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

//         <div className="flex-1">
//           <p className="uppercase tracking-widest opacity-80">Hello, I'm</p>

//           <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
//             Opnex <span className="text-green-300">Stephen</span>
//           </h1>

//           <h2 className="mt-4 text-xl md:text-2xl font-medium text-green-200">
//             Full-Stack Developer • UI Builder • Problem Solver
//           </h2>

//           <p className="mt-6 max-w-xl text-green-100 leading-relaxed">
//             I build modern web applications with clean UI, smooth UX, and
//             scalable backend logic. I enjoy turning ideas into real, functional
//             digital products.
//           </p>

//           <div className="mt-8">
//             <Link
//               to="/contact"
//               className="bg-white text-green-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-slate-100 transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         <div className="flex-1 flex justify-center">
//           <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
//             <img
//               src="/profile/opnex-img2.jpg"
//               alt="Opnex Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//       </div>

//       <svg
//         className="w-full h-24 text-white"
//         viewBox="0 0 1440 120"
//         fill="currentColor"
//       >
//         <path d="M0 40 C200 120 400 0 720 40 C1000 80 1200 0 1440 40 L1440 120 L0 120 Z" />
//       </svg>
//     </section>
//   );
// }









import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-gradient-to-b from-green-900 to-slate-900 text-white py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        <div className="flex-1 mt-6">
          <p className="uppercase tracking-widest opacity-80">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
            Opnex <span className="text-green-300">Stephen</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-medium text-green-200">
            Full-Stack Developer • UI Builder • Problem Solver
          </h2>

          <p className="mt-6 max-w-xl text-green-100 leading-relaxed">
            I build modern web applications with clean UI, smooth UX, and
            scalable backend logic. I enjoy turning ideas into real, functional
            digital products.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-white text-green-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-slate-100 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl mt-12">
            <img
              src="/profile/opnex-img2.jpg"
              alt="Opnex Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      <svg
        className="w-full h-24 text-white"
        viewBox="0 0 1440 120"
        fill="currentColor"
      >
        <path d="M0 40 C200 120 400 0 720 40 C1000 80 1200 0 1440 40 L1440 120 L0 120 Z" />
      </svg>
    </section>
  );
}
