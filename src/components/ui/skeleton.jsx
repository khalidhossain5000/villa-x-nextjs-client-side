import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[#1d1d1d] animate- rounded-md", className)}
      {...props} />
  );
}

export { Skeleton }
