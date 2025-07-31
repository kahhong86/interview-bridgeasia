import React from "react";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => (
  <header className="flex justify-between items-center py-4">
    <Link href="/"><h1 className="text-2xl font-bold">Math Worksheet</h1></Link>
    <nav>
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/scores">View Scores</Link>
    </nav>
  </header>
);

export default Header;