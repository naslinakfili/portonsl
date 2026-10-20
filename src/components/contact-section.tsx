"use client";

import { useState, type SubmitEvent } from "react";

const fieldClass =
  "w-full bg-transparent text-[22px] text-white placeholder:text-neutral-500 outline-none py-1";
const labelClass = "block text-[14px] uppercase font-medium mb-1";

export default function Contactsection() {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "dd536642-ee35-4adb-8a06-21db5fdf6e8a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(data.message || "Failed to send message, please try again.");
      }
    } catch (error) {
      setResult("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 w-full max-w-4xl">
      <h4 className="flex justify-center items-center w-fit border rounded-3xl px-4 py-2 text-[12px] uppercase mb-6">
        Contact
      </h4>

      <h2 className="text-[36px] font-bold leading-tight mb-8">
        Let&apos;s Work <span className="text-hiju">Together</span>
      </h2>

      <a
        href="mailto:naslinakfili1@gmail.com"
        className="block text-[40px] leading-tight mb-12"
      >
        naslinakfili1@gmail.com
      </a>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input id="name" name="name" type="text" required
              placeholder="Your Full name" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" required
              placeholder="Your email address" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input id="phone" name="phone" type="tel"
              placeholder="Your phone number" className={fieldClass} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" name="message" rows={4} required
            placeholder="Write your message here..."
            className={`${fieldClass} font-mono text-[18px] resize-none`} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-white rounded-full px-8 py-3 uppercase text-sm hover:bg-white hover:text-black disabled:opacity-50 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <p className={`text-sm ${result.includes("success") ? "text-green-500" : "text-amber-400"}`}>
            {result}
          </p>
        )}
      </form>
    </section>
  );
}
