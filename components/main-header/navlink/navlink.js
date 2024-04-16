"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";

export default function Navlink({ href, children }) {
  const path = usePathname();
  console.log("navlink");

  return (
    <Link
      prefetch={false}
      href={href}
      className={path.startsWith(href) ? styles.active : null}
    >
      {children}
    </Link>
  );
}
