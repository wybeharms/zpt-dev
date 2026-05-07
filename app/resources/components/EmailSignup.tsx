"use client";

import { type FormEvent } from "react";
import {
  Section,
  SectionEyebrow,
  SectionHeading,
} from "../../components/Sections";

/**
 * Cream band. Centered heading + lede + signup form. The form is a UI
 * placeholder for now: it prevents default on submit and does nothing
 * else. Wiring up the real provider is a follow-up task.
 */
export default function EmailSignup() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wired up in a future iteration.
  };

  return (
    <Section id="signup" bg="cream" align="header">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionEyebrow bg="cream">Stay In Touch</SectionEyebrow>
        <SectionHeading bg="cream">
          Get Notified When New Material Lands.
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] text-navy/75">
          Short, occasional updates when ZPT publishes new walkthroughs,
          articles, or tools. Nothing else.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-[520px] flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="signup-email" className="sr-only">
            Email address
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="you@yourcompany.com"
            required
            className="flex-1 rounded-[5px] border border-navy/15 bg-cream px-5 py-3.5 text-[15px] text-navy placeholder:text-navy/40 focus:border-navy/30 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-[5px] bg-cognac px-7 py-3.5 text-[15px] font-medium tracking-wide text-cream transition-colors duration-150 hover:bg-cognac-deep"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Section>
  );
}
