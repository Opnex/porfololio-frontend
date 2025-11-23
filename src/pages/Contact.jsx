// import { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");
//   const [sending, setSending] = useState(false);

//   // Optional but included for backend consistency
//   const [phone, setPhone] = useState("");

//   const socials = [
//     { name: "Instagram", link: "https://instagram.com/", icon: "/icons/instagram.jpg" },
//     { name: "Facebook", link: "https://www.facebook.com/thomas.opeyemi.18", icon: "/icons/facebook.jpg" },
//     { name: "Twitter", link: "https://twitter.com/", icon: "/icons/twitter.png" },
//     { name: "GitHub", link: "https://github.com/Opnex", icon: "/icons/github.png" },
//     { name: "LinkedIn", link: "https://www.linkedin.com/in/opeyemi-stephen-8b17bb35b/", icon: "/icons/linkin.png" },
//   ];

//   const submit = async (e) => {
//     e.preventDefault();
//     setSending(true);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           message: msg,
//         }),
//       });

//       const data = await res.json();
//       alert(data.message);

//       // Clear fields
//       setName("");
//       setEmail("");
//       setMsg("");
//       setPhone("");

//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }

//     setSending(false);
//   };

//   return (
//     <div className="px-6 py-20 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

//       <section className="grid md:grid-cols-2 gap-10">

//         {/* ==== LEFT SIDE: DETAILS ==== */}
//         <div className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl">
//           <h3 className="text-2xl font-semibold mb-6">My Details</h3>

//           <div className="space-y-3 text-lg">
//             <p>📛 <strong>Name:</strong> Opnex</p>

//             <p>
//               📧 <strong>Email:</strong>{" "}
//               <a href="mailto:thomasopeyemi1@gmail.com" className="text-green-400 underline">
//                 thomasopeyemi1@gmail.com
//               </a>
//             </p>

//             <p>
//               📱 <strong>Phone:</strong>{" "}
//               <a href="tel:07070488972" className="text-green-400 underline">
//                 07070488972
//               </a>
//             </p>

//             <p>
//               💬 <strong>WhatsApp:</strong>{" "}
//               <a
//                 href="https://wa.me/2348188065483"
//                 target="_blank"
//                 className="text-green-400 underline"
//               >
//                 Message me on WhatsApp
//               </a>
//             </p>
//           </div>

//           <h4 className="mt-8 mb-10 text-xl font-semibold">Social Media</h4>
//           <div className="flex gap-4 flex-wrap">
//             {socials.map((s) => (
//               <a key={s.name} href={s.link} target="_blank" className="group">
//                 <img
//                   src={s.icon}
//                   alt={s.name}
//                   className="
//                     w-14 h-14 rounded-xl object-cover 
//                     ring-2 ring-white/20 shadow-md 
//                     transition-all duration-300 
//                     group-hover:scale-110 group-hover:ring-green-400
//                   "
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ==== RIGHT SIDE: FORM ==== */}
//         <form
//           onSubmit={submit}
//           className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl grid gap-6"
//         >
//           <h3 className="text-2xl font-semibold">Send a Message</h3>

//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Your Name"
//             required
//           />

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Your Email"
//             required
//           />

//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Phone Number"
//           />

//           <textarea
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 h-32 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Message"
//             required
//           />

//           <button
//             disabled={sending}
//             className="
//               px-6 py-3 bg-green-500 hover:bg-green-600 
//               text-white rounded-xl text-lg font-medium 
//               transition disabled:bg-green-300
//             "
//           >
//             {sending ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//       </section>
//     </div>
//   );
// }



// import { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");
//   const [sending, setSending] = useState(false);

  
//   const [phone, setPhone] = useState("");

//   const socials = [
//     { name: "Instagram", link: "https://instagram.com/", icon: "/icons/instagram.jpg" },
//     { name: "Facebook", link: "https://www.facebook.com/thomas.opeyemi.18", icon: "/icons/facebook.jpg" },
//     { name: "Twitter", link: "https://twitter.com/", icon: "/icons/twitter.png" },
//     { name: "GitHub", link: "https://github.com/Opnex", icon: "/icons/github.png" },
//     { name: "LinkedIn", link: "https://www.linkedin.com/in/opeyemi-stephen-8b17bb35b/", icon: "/icons/linkin.png" },
//   ];

//   const submit = async (e) => {
//     e.preventDefault();
//     setSending(true);

//     try {
//       const res = await fetch("https://portfolio-backend-production-95b3.up.railway.app/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           message: msg,
//         }),
//       });

//       const data = await res.json();
//       alert(data.message);

//       // Clear fields
//       setName("");
//       setEmail("");
//       setMsg("");
//       setPhone("");

//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     }

//     setSending(false);
//   };

//   return (
//     <div className="px-6 py-20 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

//       <section className="grid md:grid-cols-2 gap-10">

//         {/* ==== LEFT SIDE: DETAILS ==== */}
//         <div className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl">
//           <h3 className="text-2xl font-semibold mb-6">My Details</h3>

//           <div className="space-y-3 text-lg">
//             <p>📛 <strong>Name:</strong> Opnex</p>

//             <p>
//               📧 <strong>Email:</strong>{" "}
//               <a href="mailto:thomasopeyemi1@gmail.com" className="text-green-400 underline">
//                 thomasopeyemi1@gmail.com
//               </a>
//             </p>

//             <p>
//               📱 <strong>Phone:</strong>{" "}
//               <a href="tel:07070488972" className="text-green-400 underline">
//                 07070488972
//               </a>
//             </p>

//             <p>
//               💬 <strong>WhatsApp:</strong>{" "}
//               <a
//                 href="https://wa.me/2348188065483"
//                 target="_blank"
//                 className="text-green-400 underline"
//               >
//                 Message me on WhatsApp
//               </a>
//             </p>
//           </div>

//           <h4 className="mt-8 mb-10 text-xl font-semibold">Social Media</h4>
//           <div className="flex gap-4 flex-wrap">
//             {socials.map((s) => (
//               <a key={s.name} href={s.link} target="_blank" className="group">
//                 <img
//                   src={s.icon}
//                   alt={s.name}
//                   className="
//                     w-14 h-14 rounded-xl object-cover 
//                     ring-2 ring-white/20 shadow-md 
//                     transition-all duration-300 
//                     group-hover:scale-110 group-hover:ring-green-400
//                   "
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ==== RIGHT SIDE: FORM ==== */}
//         <form
//           onSubmit={submit}
//           className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl grid gap-6"
//         >
//           <h3 className="text-2xl font-semibold">Send a Message</h3>

//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Your Name"
//             required
//           />

//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Your Email"
//             required
//           />

//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Phone Number"
//           />

//           <textarea
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             className="p-3 rounded-lg bg-white dark:bg-slate-700 h-32 outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Message"
//             required
//           />

//           <button
//             disabled={sending}
//             className="
//               px-6 py-3 bg-green-500 hover:bg-green-600 
//               text-white rounded-xl text-lg font-medium 
//               transition disabled:bg-green-300
//             "
//           >
//             {sending ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//       </section>
//     </div>
//   );
// }










import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const socials = [
    { name: "Instagram", link: "https://instagram.com/", icon: "/icons/instagram.jpg" },
    { name: "Facebook", link: "https://www.facebook.com/thomas.opeyemi.18", icon: "/icons/facebook.jpg" },
    { name: "Twitter", link: "https://twitter.com/", icon: "/icons/twitter.png" },
    { name: "GitHub", link: "https://github.com/Opnex", icon: "/icons/github.png" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/opeyemi-stephen-8b17bb35b/", icon: "/icons/linkin.png" },
  ];

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch(`${backendURL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message: msg }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Failed to send message");
      }

      const data = await res.json();
      setSuccessMessage(data.message);

      // Clear fields
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <section className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl">
          <h3 className="text-2xl font-semibold mb-6">My Details</h3>
          <div className="space-y-3 text-lg">
            <p>📛 <strong>Name:</strong> Opnex</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:thomasopeyemi1@gmail.com" className="text-green-400 underline">thomasopeyemi1@gmail.com</a></p>
            <p>📱 <strong>Phone:</strong> <a href="tel:07070488972" className="text-green-400 underline">07070488972</a></p>
            <p>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/2348188065483" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">Message me on WhatsApp</a></p>
          </div>

          <h4 className="mt-8 mb-10 text-xl font-semibold">Social Media</h4>
          <div className="flex gap-4 flex-wrap">
            {socials.map((s) => (
              <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.name} className="w-14 h-14 rounded-xl object-cover ring-2 ring-white/20 shadow-md transition-all duration-300 hover:scale-110 hover:ring-green-400" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form onSubmit={submit} className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl grid gap-4">
          <h3 className="text-2xl font-semibold">Send a Message</h3>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Phone Number"
          />
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="p-3 rounded-lg bg-white dark:bg-slate-700 h-32 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Message"
            required
          />

          {successMessage && <p className="text-green-500 font-medium">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 font-medium">{errorMessage}</p>}

          <button
            disabled={sending}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg font-medium transition disabled:bg-green-300"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}
