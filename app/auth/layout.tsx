import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "radial-gradient(ellipse at top, #38bdf8, #1e3a8a)",
      }}
      className="h-full flex items-center justify-center"
    >
      {children}
    </div>
  );
}
