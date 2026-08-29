import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — LIMN Studio" },
      {
        name: "description",
        content: "Sign in to your LIMN account to access LIMN Studio applications and LIMN Cloud.",
      },
      { property: "og:title", content: "Log In — LIMN Studio" },
      { property: "og:description", content: "Sign in to LIMN Studio." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [notice, setNotice] = useState(false);

  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1400px] items-center px-5 py-16 sm:px-8">
        <div className="fade-up mx-auto w-full max-w-[420px]">
          <p className="eyebrow text-ink-muted">LIMN Studio</p>
          <h1 className="mt-5 text-[34px] leading-tight font-bold">Sign in to LIMN.</h1>
          <p className="mt-3 text-[14.5px] text-ink-muted">
            One account for every LIMN application and LIMN Cloud.
          </p>

          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(true);
            }}
          >
            <div>
              <label htmlFor="email" className="text-[13px] text-ink-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-ink-border bg-transparent px-4 py-3 text-[15px] outline-none focus:border-ink-foreground/50"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-[13px] text-ink-muted">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 w-full rounded-md border border-ink-border bg-transparent px-4 py-3 text-[15px] outline-none focus:border-ink-foreground/50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-ink-foreground px-6 py-3.5 text-[15px] font-medium text-ink transition-opacity hover:opacity-85"
            >
              Log In
            </button>
            {notice && (
              <p role="status" className="text-[13.5px] text-ink-muted">
                LIMN accounts are not open yet. Sign-in is coming soon.
              </p>
            )}
          </form>

          <p className="mt-8 text-[13.5px] text-ink-muted">
            Need help?{" "}
            <Link to="/support" className="text-ink-foreground underline underline-offset-4">
              Visit support
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
