import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const socials = [
    { name: "Instagram", link: "https://instagram.com/", icon: "/icons/instagram.jpg" },
    { name: "Facebook", link: "https://www.facebook.com/thomas.opeyemi.18", icon: "/icons/facebook.jpg" },
    { name: "Twitter", link: "https://twitter.com/", icon: "/icons/twitter.png" },
    { name: "GitHub", link: "https://github.com/Opnex", icon: "/icons/github.png" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/opeyemi-stephen-8b17bb35b/", icon: "/icons/linkin.png" },
  ];

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent: " + msg);
    setMsg("");
  };

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <section className="grid md:grid-cols-2 gap-10">

        {/* LEFT CARD — PERSONAL DETAILS */}
        <div className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl">
          <h3 className="text-2xl font-semibold mb-6">My Details</h3>

          <div className="space-y-3 text-lg">
            <p>📛 <strong>Name:</strong> Opnex</p>

            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:thomasopeyemi1@gmail.com" className="text-green-400 underline">
                thomasopeyemi1@gmail.com
              </a>
            </p>

            <p>
              📱 <strong>Phone:</strong>{" "}
              <a href="tel:07070488972" className="text-green-400 underline">
                07070488972
              </a>
            </p>

            <p>
              💬 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/2348188065483"
                target="_blank"
                className="text-green-400 underline"
              >
                08188065483
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <h4 className="mt-8 mb-3 text-xl font-semibold">Social Media</h4>
          <div className="flex gap-4 flex-wrap">
            {socials.map((s) => (
              <a key={s.name} href={s.link} target="_blank" className="group">
                <img
                  src={s.icon}
                  alt={s.name}
                  className="
                    w-14 h-14 rounded-xl object-cover 
                    ring-2 ring-white/20 shadow-md 
                    transition-all duration-300 
                    group-hover:scale-110 group-hover:ring-green-400
                  "
                />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="bg-white/10 dark:bg-slate-800 p-8 rounded-2xl shadow-lg backdrop-blur-xl grid gap-6"
        >
          <h3 className="text-2xl font-semibold">Send a Message</h3>

          <input
            className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            className="p-3 rounded-lg bg-white dark:bg-slate-700 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
            required
          />

          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="p-3 rounded-lg bg-white dark:bg-slate-700 h-32 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Message"
            required
          />

          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg font-medium transition">
            Send Message
          </button>
        </form>

      </section>
    </div>
  );
}
