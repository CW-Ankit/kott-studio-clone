"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { sound } from "@/lib/sound";

const TOPICS = [
  "websites",
  "apps",
  "tools & platforms",
  "automations",
  "brands",
  "rescue & support",
  "something else",
];

const TOPIC_QUERY_MAP: Record<string, string> = {
  websites: "websites",
  apps: "apps",
  tools: "tools & platforms",
  automations: "automations",
  brands: "brands",
  rescue: "rescue & support",
};

const PRESETS = [
  "a site for a restaurant",
  "I have a site and it isn't converting",
  "an app",
  "not sure yet — can we talk",
];

const BUDGETS = ["under $3k", "$3k – $10k", "$10k – $35k", "$35k +", "not sure yet"];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const about = searchParams?.get("about");
    if (about) {
      const mapped = TOPIC_QUERY_MAP[about.toLowerCase()] || about.toLowerCase();
      setSelectedTopics((prev) => (prev.includes(mapped) ? prev : [...prev, mapped]));
    }
  }, [searchParams]);

  const toggleTopic = (topic: string) => {
    sound.select();
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handlePreset = (preset: string) => {
    sound.click();
    setMessage((prev) => (prev ? `${prev}\n${preset}` : preset));
  };

  const handleBudgetSelect = (b: string) => {
    sound.select();
    setSelectedBudget((prev) => (prev === b ? "" : b));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.click();
    setErrorMessage(null);
    setIsPending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          selectedTopics,
          selectedBudget,
        }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send the letter. Please try again.");
      }

      sound.success();
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-paper/20 bg-paper/[0.03] p-8 md:p-10">
        <p className="eyebrow text-accent">transcription confirmed</p>
        <h3 className="font-display text-3xl font-thin text-paper md:text-4xl mt-3">
          Letter received.
        </h3>
        <p className="mt-4 max-w-[34em] text-sm leading-relaxed text-paper/70 font-light">
          Thank you, {name || "friend"}. Jane reads every message personally and will reply to{" "}
          <span className="text-accent">{email}</span> within one working day.
        </p>
        <button
          type="button"
          onClick={() => {
            sound.click();
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
            setSelectedTopics([]);
            setSelectedBudget("");
          }}
          className="eyebrow mt-8 border border-paper/30 px-5 py-3 text-paper/70 transition-colors hover:border-paper hover:text-paper"
        >
          send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Honeypot for spam bots */}
      <div
        aria-hidden="true"
        className="absolute h-px w-px overflow-hidden opacity-0"
        style={{ left: "-9999px" }}
      >
        <label>
          website
          <input type="text" tabIndex={-1} autoComplete="off" name="website" />
        </label>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 border border-accent/60 bg-accent/10 text-paper text-sm">
          <p className="eyebrow text-accent">Notice</p>
          <p className="mt-1 text-paper/90">{errorMessage}</p>
        </div>
      )}

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

      {/* Regarding */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-paper/55">regarding</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((topic) => {
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

      {/* Start with presets */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-paper/55">start with</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handlePreset(preset)}
              className="eyebrow border border-paper/30 px-3 py-2 text-paper/70 transition-colors duration-200 hover:border-paper/70 hover:text-paper"
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
          className="mt-2 w-full resize-none border-b border-paper/45 bg-transparent py-3 text-[0.95rem] text-paper placeholder:text-paper/40 transition-colors duration-200 hover:border-paper/70 focus:border-accent focus:outline-none"
        />
      </label>

      {/* Rough budget */}
      <fieldset className="mt-8">
        <legend className="eyebrow text-paper/55">rough budget — optional</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {BUDGETS.map((b) => {
            const active = selectedBudget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => handleBudgetSelect(b)}
                aria-pressed={active}
                className={`eyebrow border px-3 py-2 tabular-nums transition-colors duration-200 ${
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

      {/* Submit Button & Meta */}
      <div className="mt-10 flex flex-wrap items-baseline gap-6">
        <button
          type="submit"
          disabled={isPending}
          className="eyebrow border border-accent bg-accent px-6 py-4 text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink disabled:cursor-wait disabled:opacity-60 font-semibold"
        >
          {isPending ? "transmitting..." : "send the letter"}
        </button>
        <span className="text-[0.75rem] text-paper/55" role="status" aria-live="polite">
          Jane reads this herself.
        </span>
        <a href="mailto:hello@kott.studio" className="eyebrow link-underline text-paper/55">
          or just email hello@kott.studio
        </a>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="h-64 flex items-center justify-center text-xs font-mono text-paper/40">
          loading inquiry form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
