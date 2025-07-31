import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/"><h1 className="text-2xl font-bold">Math Worksheet</h1></Link>
      <nav>
        <Link
          href="/"
          className={`${styles.navlink} mr-4 ${pathname === "/" ? "font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/scores"
          className={`${styles.navlink} ${pathname === "/scores" ? "font-bold" : ""}`}
        >
          View Scores
        </Link>
      </nav>
    </header>
  );
};

export default Header;