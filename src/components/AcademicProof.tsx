import Image from "next/image";
import { softSkills } from "@/data/profile";

export function AcademicProof() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
          § cardiff university · student voice
        </p>
        <h3 className="font-display mt-4 text-3xl leading-tight text-foreground">
          Leadership proof outside the data stack.
        </h3>
        <p className="mt-5 text-base leading-7 text-muted">
          Karan was recognised as a Student Academic Representative during the
          2022-23 academic year. It is a useful human signal: public speaking,
          communication, problem solving, and teamwork.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {softSkills.slice(0, 4).map((skill) => (
            <div
              key={skill.name}
              className="rounded border border-line bg-panel/80 p-4"
            >
              <p className="text-sm font-semibold text-foreground">
                {skill.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{skill.proof}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="quiet-shadow overflow-hidden rounded-md border border-line bg-panel">
        <Image
          src="/images/cardiff-academic-rep.png"
          alt="Cardiff University Student Academic Representative certificate for Karan Manoharan"
          width={704}
          height={957}
          className="h-auto w-full"
          priority={false}
        />
      </div>
    </div>
  );
}
