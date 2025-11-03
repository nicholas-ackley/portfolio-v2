import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "../components/container/Terminal";
import { send } from "@emailjs/browser";

export default function ContactPage() {
  const [sshText, setSshText] = useState("");
  const [passwordTyped, setPasswordTyped] = useState(0);
  const [auth, setAuth] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);

  const SSH_CMD = "ssh guest@nicholasackley.dev";
  const PASSWORD = "********";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    subject: "",
    message: "",
  });

  // helper for safely updating form values
  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // typewriter effect for SSH and password
  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      setSshText((prev) => prev + SSH_CMD[i]);
      i++;
      if (i === SSH_CMD.length) {
        clearInterval(type);
        setTimeout(startPassword, 400);
      }
    }, 40);
    return () => clearInterval(type);
  }, []);

  function startPassword() {
    let i = 0;
    const pass = setInterval(() => {
      setPasswordTyped(i + 1);
      i++;
      if (i === PASSWORD.length) {
        clearInterval(pass);
        setTimeout(() => {
          setAuth(true);
          setTimeout(() => setShowForm(true), 800);
        }, 500);
      }
    }, 80);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    console.log(
      "Using service:",
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "template:",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      "public key:",
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    try {
      const res = await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      console.log("EmailJS response:", res);
      alert("✅ Message sent successfully!");
    } catch (err) {
      console.error("❌ Failed to send:", err);
      alert("❌ Failed to send message. Check console for details.");
    } finally {
      setSending(false);
    }
  }

  const fields = [
    { label: "Name", name: "name", type: "text", placeholder: "John Doe" },
    { label: "Email", name: "email", type: "email", placeholder: "you@email.com" },
    { label: "Phone", name: "phone", type: "text", placeholder: "1234567890" },
    { label: "LinkedIn", name: "linkedin", type: "text", placeholder: "linkedin.com/in/..." },
    { label: "Subject", name: "subject", type: "text", placeholder: "Inquiry" },
    { label: "Message", name: "message", type: "textarea", placeholder: "..." },
  ] as const;

  return (
    <Terminal>
      <div className="space-y-4">
        {/* SSH line */}
        <p>
          <span className="text-hackerGreen/60">$ </span>
          {sshText}
        </p>

        {/* Password line */}
        <p>
          <span>Password: </span>
          <span className="text-green-500">
            {"*".repeat(passwordTyped)}
          </span>
        </p>

        {/* Authenticated message */}
        {auth && (
          <motion.p
            className="text-green-500 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Authenticated!
          </motion.p>
        )}

        {/* Contact form */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {fields.map((f) => (
              <motion.div
                key={f.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="block text-sm mb-1">{f.label}:</label>
                {f.type === "textarea" ? (
                  <textarea
                    value={form[f.name]}
                    onChange={(e) => update(f.name, e.target.value)}
                    className="w-full bg-transparent border border-hackerGreen p-2 text-sm outline-none h-32"
                    placeholder={f.placeholder}
                    required={["name", "email", "subject", "message"].includes(f.name)}
                  />
                ) : (
                  <input
                    type={f.type}
                    value={form[f.name]}
                    onChange={(e) => update(f.name, e.target.value)}
                    className="w-full bg-transparent border border-hackerGreen p-2 text-sm outline-none"
                    placeholder={f.placeholder}
                    required={["name", "email", "subject", "message"].includes(f.name)}
                  />
                )}
              </motion.div>
            ))}

            {/* Submit button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button
                type="submit"
                disabled={sending}
                className="mt-4 border border-hackerGreen px-4 py-2 hover:bg-hackerGreen/10 transition"
              >
                {sending ? "Sending..." : "$ submit_message"}
              </button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </Terminal>
  );
}
