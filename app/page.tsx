import type { Metadata } from "next";
import Home from "@/src/components/homepage";

export const metadata: Metadata = {
  title: "Math Test App",
  description: "Practice rounding numbers and save your scores.",
};

export default function Page() {
  return (
    <Home />
  );
}