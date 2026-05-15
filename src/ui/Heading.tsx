import { ComponentPropsWithoutRef, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"h1">;

function Heading({ children, ...props }: HeadingProps) {
  return (
    <h1 className="text-2xl font-semibold text-slate-800" {...props}>
      {children}
    </h1>
  );
}

export default Heading;
