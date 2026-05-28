import Link from "next/link";
import { Badge } from "@/components/Badge";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
  index?: number;
  compact?: boolean;
};

const issuerMarks: Record<
  Certification["issuer"],
  { label: string; className: string; name: string }
> = {
  "dbt Labs": {
    label: "dbt",
    name: "dbt Labs",
    className: "border-orange-300/35 bg-orange-300/10 text-orange-100",
  },
  DataCamp: {
    label: "DC",
    name: "DataCamp",
    className: "border-emerald-300/35 bg-emerald-300/10 text-emerald-100",
  },
  LinkedIn: {
    label: "in",
    name: "LinkedIn",
    className: "border-sky-300/35 bg-sky-300/10 text-sky-100",
  },
  HackerRank: {
    label: "HR",
    name: "HackerRank",
    className: "border-green-300/35 bg-green-300/10 text-green-100",
  },
  "HackerRank Campus Club, AUFS": {
    label: "HR",
    name: "HackerRank",
    className: "border-green-300/35 bg-green-300/10 text-green-100",
  },
};

function IssuerMark({ issuer }: { issuer: Certification["issuer"] }) {
  const mark = issuerMarks[issuer];

  return (
    <div
      aria-label={`${mark.name} credential issuer`}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border font-mono text-sm font-semibold ${mark.className}`}
    >
      {mark.label}
    </div>
  );
}

export function CertificationCard({
  certification,
  index,
  compact = false,
}: CertificationCardProps) {
  const issuedLine = [
    certification.issued ? `Issued ${certification.issued}` : null,
    certification.expires ? `Expires ${certification.expires}` : null,
  ]
    .filter(Boolean)
    .join(" / ");

  return (
    <article className="surface-line quiet-shadow group flex h-full flex-col rounded-md border border-line p-5 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong">
      <div className="flex items-start gap-4">
        <IssuerMark issuer={certification.issuer} />
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
            {typeof index === "number"
              ? `§${String(index + 1).padStart(2, "0")} · cert`
              : certification.discipline}
          </p>
          <h3 className="font-display mt-2 text-lg leading-snug text-foreground">
            {certification.name}
          </h3>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm leading-6 text-muted">
        <p>{certification.issuer}</p>
        {issuedLine ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-warm-soft">
            {issuedLine.replace(/ \/ /g, " · ")}
          </p>
        ) : null}
        {certification.attachment ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            PDF listed on LinkedIn
          </p>
        ) : null}
      </div>

      {!compact && certification.skills?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      ) : null}

      <div className="mt-auto pt-5">
        {certification.href ? (
          <Link
            href={certification.href}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft transition group-hover:text-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Show credential
          </Link>
        ) : (
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Listed on LinkedIn
          </p>
        )}
      </div>
    </article>
  );
}
