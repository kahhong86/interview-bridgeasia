import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="flex justify-between items-center py-4">
    <h1 className="text-2xl font-bold">Math Test</h1>
    <nav>
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/scores">View Scores</Link>
    </nav>
  </header>
);

export default Header;