import type { ComponentPropsWithoutRef } from "react";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded border border-line bg-panel px-2.5 py-1 text-xs font-medium text-muted ${className}`}
      {...props}
    />
  );
}
