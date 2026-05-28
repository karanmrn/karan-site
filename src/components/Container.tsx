import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: "prose" | "wide";
};

export function Container({
  size = "prose",
  className = "",
  ...props
}: ContainerProps) {
  const maxWidth = size === "wide" ? "max-w-6xl" : "max-w-4xl";

  return (
    <div
      className={`mx-auto w-full ${maxWidth} px-5 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
