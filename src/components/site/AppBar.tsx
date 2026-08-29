import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { apps } from "@/lib/apps";

export function AppBar() {
  return (
    <section className="bg-ink text-ink-foreground" aria-label="LIMN applications">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <ul className="grid divide-ink-border sm:grid-cols-2 lg:grid-cols-5 lg:divide-x">
          {apps.map((app) => (
            <li key={app.id} className="border-b border-ink-border py-9 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0">
              <div className="flex items-start gap-5">
                <span
                  className={`grid h-[68px] w-[68px] shrink-0 place-items-center rounded-[14px] ${app.colorClass} text-ink-foreground`}
                >
                  <span className="h-9 w-9">{app.icon}</span>
                </span>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-semibold">{app.name}</h3>
                  <p className="mt-2 max-w-[180px] text-[13.5px] leading-snug text-ink-muted">
                    {app.short}
                  </p>
                  <Link
                    to={app.path}
                    className={`mt-4 inline-flex items-center gap-1.5 text-[13.5px] ${app.textClass} transition-transform hover:translate-x-0.5`}
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
