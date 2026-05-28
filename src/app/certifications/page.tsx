import type { Metadata } from "next";
import { CertificationCard } from "@/components/CertificationCard";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import {
  certificationDisciplines,
  certifications,
  featuredCertifications,
} from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Karan Manoharan's certifications across dbt, SQL, Snowflake, Spark, Azure, AWS, Python, BI, and platform engineering.",
  openGraph: {
    title: "Certifications | Karan Manoharan",
    description:
      "Credentials across dbt, SQL, Snowflake, Spark, Azure, AWS, Python, BI, and platform engineering.",
  },
};

const issuerCount = new Set(
  certifications.map((cert) =>
    cert.issuer.startsWith("HackerRank") ? "HackerRank" : cert.issuer,
  ),
).size;

export default function CertificationsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container size="wide">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Certifications"
            title="A credential trail across the systems Karan actually builds."
            description="This section is intentionally grouped by hiring signal: data engineering, SQL depth, cloud platform work, Python, BI, and product thinking. Credential links are included where provided."
          />
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
            <div className="bg-background/95 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                § total
              </p>
              <p className="font-mono mt-4 text-3xl text-accent-warm">
                {certifications.length}
              </p>
              <p className="mt-2 text-sm text-muted">certifications listed</p>
            </div>
            <div className="bg-background/95 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                § issuers
              </p>
              <p className="font-mono mt-4 text-3xl text-accent-warm">
                {issuerCount}
              </p>
              <p className="mt-2 text-sm text-muted">
                dbt · DataCamp · LinkedIn · HackerRank
              </p>
            </div>
            <div className="bg-background/95 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                § focus
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                SQL · Snowflake · Spark · Cloud · Python · BI
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader
            eyebrow="Featured"
            title="The credentials that reinforce the senior data-engineering story."
            description="This is the first set a CTO or founder should notice before scanning the full archive."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredCertifications.map((certification, index) => (
              <CertificationCard
                key={`${certification.issuer}-${certification.name}`}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </section>

        {certificationDisciplines.map((discipline) => {
          const disciplineCerts = certifications.filter(
            (certification) => certification.discipline === discipline,
          );

          return (
            <section key={discipline} className="mt-20">
              <SectionHeader
                eyebrow={discipline}
                title={`${disciplineCerts.length} credential${
                  disciplineCerts.length === 1 ? "" : "s"
                }`}
              />
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {disciplineCerts.map((certification, index) => (
                  <CertificationCard
                    key={`${discipline}-${certification.issuer}-${certification.name}`}
                    certification={certification}
                    index={index}
                    compact
                  />
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </main>
  );
}
