import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-center space-x-2">
        <div className="logo bg-[#000] rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <Image
          src="/images/logo-white.png"
          alt="Logo"
          width={20}
          height={40}
          className="h-10"
        />
        </div>
        <h1 className="md:text-2xl text-lg font-bold">Math <br />Worksheet</h1>
      </Link>
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