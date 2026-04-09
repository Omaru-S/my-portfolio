import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import RevealWrapper from "./RevealWrapper.jsx";
import { CONTACT } from "../content.js";

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5";

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { serviceId, templateId, publicKey } = CONTACT.emailjs;
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        alert(CONTACT.successMessage);
        setValues({ name: "", email: "", message: "" });
      })
      .catch(() => alert(CONTACT.errorMessage));
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealWrapper>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {CONTACT.title}
          </h2>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={values.name}
                placeholder={CONTACT.placeholders.name}
                className={inputClass}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={values.email}
                placeholder={CONTACT.placeholders.email}
                className={inputClass}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={values.message}
                placeholder={CONTACT.placeholders.message}
                className={inputClass}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {CONTACT.submitButton}
            </button>
          </form>
        </div>
      </RevealWrapper>
    </section>
  );
}
