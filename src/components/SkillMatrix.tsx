import { Badge } from "@/components/Badge";
import type { SkillGroup, SoftSkill } from "@/data/profile";

type SkillMatrixProps = {
  hardSkills: SkillGroup[];
  softSkills: SoftSkill[];
};

export function SkillMatrix({ hardSkills, softSkills }: SkillMatrixProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
      <aside className="rounded-md border border-line bg-panel p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
          § soft skills
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-accent-warm/35 bg-accent-warm/10 px-3 py-1.5 text-sm text-accent-warm-soft"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-4 border-t border-line pt-5">
          {softSkills.slice(0, 4).map((skill) => (
            <div key={skill.name}>
              <h3 className="font-display text-base leading-tight text-foreground">
                {skill.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted">{skill.proof}</p>
            </div>
          ))}
        </div>
      </aside>

      <div className="grid gap-4 md:grid-cols-3">
        {hardSkills.map((group, i) => (
          <article
            key={group.title}
            className="surface-line quiet-shadow rounded-md border border-line p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
              §{String(i + 1).padStart(2, "0")} · {group.title}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              {group.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
