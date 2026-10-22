"use client";

import { useState, type SubmitEvent } from "react";

const fieldClass =
  "w-full bg-transparent text-base sm:text-xl text-white placeholder:text-neutral-500 outline-none py-2 border-b border-bor focus:border-hiju transition-colors";
const labelClass = "block text-[12px] uppercase font-medium text-tex mb-1 tracking-wider";

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
    } catch {
      setResult("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-[68px] w-full">
      <h4 className="flex justify-center items-center w-fit border border-bor rounded-3xl px-5 py-2 text-[12px] uppercase tracking-wider mb-10 sm:mb-[53px]">
        Contact
      </h4>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
        Let&apos;s Work <span className="text-hiju">Together</span>
      </h2>

      <a
        href="mailto:naslinakfili1@gmail.com"
        className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-12 break-all text-white hover:text-hiju transin"
      >
        naslinakfili1@gmail.com
      </a>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Full name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className={fieldClass}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Write your message here..."
            className={`${fieldClass} font-mono text-base resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border-2 border-hiju bg-hiju text-black hover:bg-transparent hover:text-hiju font-medium rounded-full px-8 py-3.5 uppercase text-xs sm:text-sm tracking-wider disabled:opacity-50 transin cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <p
            className={`text-sm ${
              result.includes("successfully") ? "text-green-500" : "text-amber-400"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </section>
  );
}
