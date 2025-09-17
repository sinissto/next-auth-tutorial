import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main
      style={{
        background: "radial-gradient(ellipse at top, #38bdf8, #1e3a8a)",
      }}
      className="h-full flex flex-col items-center justify-center"
    >
      <div className={"space-y-6 text-center"}>
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className={"text-white text-lg"}>A simple authentication service</p>
        <div>
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
