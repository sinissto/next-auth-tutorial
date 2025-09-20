import { ReactNode } from "react";
import Navbar from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div
      style={{
        background: "radial-gradient(ellipse at top, #38bdf8, #1e3a8a)",
      }}
      className={
        "h-full w-full flex flex-col gap-y-10 items-center justify-center"
      }
    >
      <Navbar />
      {children}
    </div>
  );
}
