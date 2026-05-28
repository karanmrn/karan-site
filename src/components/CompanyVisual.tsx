import Image from "next/image";
import type { CompanySystem } from "@/data/work";

type CompanyVisualProps = {
  visual: NonNullable<CompanySystem["visual"]>;
};

export function CompanyVisual({ visual }: CompanyVisualProps) {
  return (
    <div className="mt-6 rounded-md border border-line bg-background/40 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {visual.logo ? (
          <div className="relative flex min-h-16 w-full max-w-56 items-center rounded border border-line bg-white px-4 py-3">
            <Image
              src={visual.logo.src}
              alt={visual.logo.alt}
              width={220}
              height={64}
              className="h-10 w-full object-contain"
            />
          </div>
        ) : (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-soft">
            § product context
          </p>
        )}
        <p className="max-w-xl text-sm leading-6 text-muted">{visual.caption}</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {visual.products.map((product) => (
          <article
            key={product.name}
            className={`rounded border border-line bg-panel p-4 ${product.accent ?? ""}`}
          >
            <div className="relative flex h-16 items-center justify-center rounded bg-white/95 p-3">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} logo`}
                  width={180}
                  height={64}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-center text-sm font-semibold text-ink">
                  {product.name}
                </span>
              )}
            </div>
            <h3 className="font-display mt-4 text-base leading-tight text-foreground">
              {product.name}
            </h3>
            <p className="mt-2 text-xs leading-5 text-muted">
              {product.context}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
