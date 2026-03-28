"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BUSINESS, WEB3FORMS_KEY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const services = [
  "Lawn Care & Mowing",
  "Landscaping Design",
  "Seasonal Maintenance",
  "Irrigation & Drainage",
  "Other / Not Sure",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_KEY);
      payload.append("subject", `New estimate request from ${formData.name} — Daniel Saldivar Landscaping`);
      payload.append("from_name", "Daniel Saldivar Landscaping Website");
      payload.append("name",    formData.name);
      payload.append("phone",   formData.phone);
      payload.append("email",   formData.email);
      payload.append("service", formData.service);
      payload.append("message", formData.message);

      const res  = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body:   payload,
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputBase = cn(
    "w-full px-4 py-3.5 rounded-xl text-sm",
    "bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))]",
    "text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))]",
    "focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent)/0.15)]",
    "transition-all duration-200"
  );

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: BUSINESS.phone,
      href: BUSINESS.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Greater San Antonio, TX",
      href: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon–Sat: 7am – 6pm",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[rgb(var(--bg-primary))]">
      <div className="container-custom">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="section-label">
            <MessageSquare size={12} />
            Get in Touch
          </span>
          <h2 className="heading-display text-display-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            Request Your{" "}
            <span className="text-gradient italic">Free Estimate</span>
          </h2>
          <p className="text-[rgb(var(--text-secondary))] text-lg max-w-xl mx-auto">
            Fill out the form below or call us directly. We typically respond within
            a few hours during business hours.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <AnimateIn direction="left" className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-2xl
                             bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))]"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-100 dark:bg-forest-900/50
                                  flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-forest-600 dark:text-forest-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-0.5">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-[rgb(var(--text-primary))] font-medium hover:text-[rgb(var(--accent))] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[rgb(var(--text-primary))] font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Large call button */}
            <div className="mt-6">
              <a href={BUSINESS.phoneHref} className="btn-call w-full justify-center text-base">
                <Phone size={18} />
                Call Us Now — {BUSINESS.phone}
              </a>
              <p className="text-center text-xs text-[rgb(var(--text-muted))] mt-3">
                Fastest way to reach us. Calls answered Mon–Sat 7am–6pm.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-[rgb(var(--border))] h-48 bg-[rgb(var(--bg-surface))]">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[rgb(var(--text-muted))]">
                <MapPin size={24} className="text-forest-500" />
                <span className="text-sm font-medium">San Antonio, Texas</span>
                <span className="text-xs">Serving all surrounding areas</span>
              </div>
            </div>
          </AnimateIn>

          {/* Form */}
          <AnimateIn direction="right" delay={0.15} className="lg:col-span-3">
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center
                              py-16 px-8 rounded-3xl bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))]">
                <div className="w-16 h-16 rounded-full bg-forest-100 dark:bg-forest-900/50
                                flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-forest-600 dark:text-forest-400" />
                </div>
                <h3 className="heading-display text-2xl font-bold text-[rgb(var(--text-primary))] mb-3">
                  Message Received!
                </h3>
                <p className="text-[rgb(var(--text-secondary))] max-w-sm">
                  Thanks for reaching out! We&apos;ll call or email you within a few hours
                  to schedule your free estimate. Looking forward to it!
                </p>
                <button
                  onClick={() => { setFormState("idle"); setFormData({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="btn-outline mt-6 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-3xl bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border))] space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(210) 555-0100"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={cn(inputBase, "cursor-pointer")}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wide mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your yard, what you're looking for, and any specific concerns..."
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(inputBase, "resize-none")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Request Free Estimate
                    </>
                  )}
                </button>

                {formState === "error" && (
                  <p className="text-xs text-center text-red-500 font-medium">
                    Something went wrong. Please call us directly at{" "}
                    <a href={BUSINESS.phoneHref} className="underline">{BUSINESS.phone}</a>.
                  </p>
                )}
                <p className="text-xs text-center text-[rgb(var(--text-muted))]">
                  By submitting, you agree to be contacted about your estimate. We never share your info.
                </p>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
