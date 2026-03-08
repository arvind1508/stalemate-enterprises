"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  id?: string;
  showHeading?: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function ContactForm({ id = "contact", showHeading = true }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section id={id} className="section-padding px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Contact</p>
            <h2 className="mt-4 font-heading text-3xl text-white md:text-5xl">Start your project with Stalemate Enterprises</h2>
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <motion.aside
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="luxury-panel rounded-sm p-7"
          >
            <h3 className="font-heading text-3xl text-white">Let’s discuss your space.</h3>
            <p className="mt-4 text-brand-muted">
              We design and execute commercial and residential interiors with full project accountability from start to finish.
            </p>
            <div className="mt-8 space-y-4 text-sm tracking-[0.08em]">
              <p>
                <span className="block text-brand-gold">Email</span>
                <a href="mailto:stalemateent@gmail.com" className="text-brand-text hover:text-brand-gold">
                  stalemateent@gmail.com
                </a>
              </p>
              <p>
                <span className="block text-brand-gold">Location</span>
                <span className="text-brand-text">Mumbai, Maharashtra</span>
              </p>
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            onSubmit={handleSubmit}
            className="luxury-panel rounded-sm p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-brand-muted">
                Name
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  required
                  className="mt-2 w-full rounded-sm border border-white/15 bg-brand-deep/80 px-4 py-3 text-white outline-none transition focus:border-brand-gold"
                />
              </label>
              <label className="block text-sm text-brand-muted">
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  required
                  className="mt-2 w-full rounded-sm border border-white/15 bg-brand-deep/80 px-4 py-3 text-white outline-none transition focus:border-brand-gold"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5">
              <label className="block text-sm text-brand-muted">
                Phone
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  required
                  className="mt-2 w-full rounded-sm border border-white/15 bg-brand-deep/80 px-4 py-3 text-white outline-none transition focus:border-brand-gold"
                />
              </label>
              <label className="block text-sm text-brand-muted">
                Message
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  required
                  className="mt-2 w-full rounded-sm border border-white/15 bg-brand-deep/80 px-4 py-3 text-white outline-none transition focus:border-brand-gold"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 rounded-sm border border-brand-gold bg-brand-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-deep transition hover:bg-transparent hover:text-brand-gold"
            >
              Send Message
            </button>

            {submitted ? <p className="mt-4 text-sm text-brand-gold">Thank you. We will contact you shortly.</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
