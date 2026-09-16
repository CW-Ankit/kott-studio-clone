"use client";

import React, { useState } from "react";
import Link from "next/link";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    "websites",
    "apps",
    "tools & platforms",
    "automations",
    "brands",
    "rescue & support",
    "something else",
  ];

  const presets = [
    "a site for a restaurant",
    "I have a site and it isn't converting",
    "an app",
    "not sure yet — can we talk",
  ];

  const budgets = ["under $3k", "$3k – $10k", "$10k – $35k", "$35k +", "not sure yet"];

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handlePreset = (preset: string) => {
    setMessage((prev) => (prev ? `${prev}\n${preset}` : preset));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="px-6 pb-20 pt-32 md:px-14 md:pb-24 md:pt-40">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          {/* Left Hero */}
          <div className="md:col-span-5">
            <p className="eyebrow text-paper/55">
              <span className="idx-tag text-accent-on-ink">05</span> — say hi anytime
            </p>
            <h2 className="font-display mt-10 max-w-[9em] text-[clamp(40px,6.4vw,96px)] font-normal leading-[0.98] tracking-[-0.015em] md:mt-14 md:font-thin">
              Bring us the <span className="italic text-accent-on-ink">impossible one.</span>
            </h2>
            <p className="mt-8 max-w-[30em] text-[0.9rem] leading-relaxed text-paper/60">
              the brief everyone politely declined. the launch with the deadline. the app that needs designing{" "}
              <em className="italic">and</em> building. as established above, we are not sure it can&apos;t be done.
            </p>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="md:col-span-6 md:col-start-7 md:self-end">
            {submitted ? (
              <div className="p-8 border border-paper/20 rounded bg-paper/[0.03]">
                <h3 className="font-display text-3xl font-thin text-paper">Letter received.</h3>
                <p className="mt-4 text-paper/70 text-sm leading-relaxed">
                  Thank you, {name || "friend"}. Jane reads every message personally and will reply to{" "}
                  <span className="text-accent">{email}</span> within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSelectedTopics([]);
                    setSelectedBudget("");
                  }}
                  className="eyebrow mt-8 border border-paper/30 px-5 py-3 text-paper/70 hover:text-paper hover:border-paper"
                >
                  send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-paper/55">from</span>
                    <input
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="your name"
                      className="mt-2 w-full border-b border-paper/45 bg-transparent py-3 text-[0.95rem] text-paper placeholder:text-paper/40 transition-colors duration-200 hover:border-paper/70 focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-paper/55">reply to</span>
                    <input
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@studio.com"
                      className="mt-2 w-full border-b border-paper/45 bg-transparent py-3 text-[0.95rem] text-paper placeholder:text-paper/40 transition-colors duration-200 hover:border-paper/70 focus:border-accent focus:outline-none"
                    />
                  </label>
                </div>

                {/* Regarding Topics */}
                <fieldset className="mt-8">
                  <legend className="eyebrow text-paper/55">regarding</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topics.map((topic) => {
                      const active = selectedTopics.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          aria-pressed={active}
                          className={`eyebrow border px-3 py-2 transition-colors duration-200 ${
                            active
                              ? "border-accent bg-accent text-paper"
                              : "border-paper/30 text-paper/70 hover:border-paper/70"
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Quick Presets */}
                <fieldset className="mt-8">
                  <legend className="eyebrow text-paper/55">start with</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {presets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handlePreset(preset)}
                        className="eyebrow border px-3 py-2 transition-colors duration-200 border-paper/30 text-paper/70 hover:border-paper/70 hover:text-paper"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Message */}
                <label className="mt-6 block">
                  <span className="eyebrow text-paper/55">the situation, in your words</span>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="a few honest lines about where you're headed…"
                    className="mt-2 w-full border-b border-paper/45 bg-transparent py-3 text-[0.95rem] text-paper placeholder:text-paper/40 transition-colors duration-200 hover:border-paper/70 focus:border-accent focus:outline-none resize-none"
                  />
                </label>

                {/* Budgets */}
                <fieldset className="mt-8">
                  <legend className="eyebrow text-paper/55">rough budget — optional</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => {
                      const active = selectedBudget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(active ? "" : b)}
                          aria-pressed={active}
                          className={`eyebrow border px-3 py-2 transition-colors duration-200 tabular-nums ${
                            active
                              ? "border-accent bg-accent text-paper"
                              : "border-paper/30 text-paper/70 hover:border-paper/70"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Submit button & Meta */}
                <div className="mt-10 flex flex-wrap items-baseline gap-6">
                  <button
                    type="submit"
                    className="eyebrow border border-accent bg-accent px-6 py-4 text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink font-semibold"
                  >
                    send the letter
                  </button>
                  <span className="text-[0.75rem] text-paper/55" role="status">
                    Jane reads this herself. One working day.
                  </span>
                  <a href="mailto:hello@kott.studio" className="eyebrow link-underline text-paper/55">
                    or just email hello@kott.studio
                  </a>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Footer info line */}
        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-paper/20 pt-5">
          <span className="eyebrow text-paper/55">
            ( answered by the hand that does the work, usually within two days )
          </span>
          <Link className="eyebrow link-underline text-paper/70" href="/contact">
            or write properly →
          </Link>
        </div>
      </div>
    </section>
  );
}
