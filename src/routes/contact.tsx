import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LIMN Studio" },
      {
        name: "description",
        content: "Contact the LIMN Studio team about applications, projects or verification.",
      },
      { property: "og:title", content: "Contact — LIMN Studio" },
      { property: "og:description", content: "Get in touch with LIMN Studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lead="Questions about LIMN applications, projects, teams or verification."
      />
      <Section>
        <form
          className="max-w-xl space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label htmlFor="name" className="text-[13px] text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              required
              className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-[15px] outline-none focus:border-foreground/40"
            />
          </div>
          <div>
            <label htmlFor="cemail" className="text-[13px] text-muted-foreground">
              Email
            </label>
            <input
              id="cemail"
              type="email"
              required
              className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-[15px] outline-none focus:border-foreground/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-[13px] text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-[15px] outline-none focus:border-foreground/40"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Send message
          </button>
          {sent && (
            <p role="status" className="text-[13.5px] text-muted-foreground">
              Thank you — the LIMN Studio contact system is coming soon.
            </p>
          )}
        </form>
      </Section>
    </>
  );
}
