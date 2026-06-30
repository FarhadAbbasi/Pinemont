import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
