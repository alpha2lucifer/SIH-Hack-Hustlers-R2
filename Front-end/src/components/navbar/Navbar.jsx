"use client";

import Link from "next/link";
import React from "react";
import { useContext } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { ThemeContext } from "../../context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Newsletters",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${mode === "light" ? styles.light : styles.dark} ${styles.theme}`}> 
      <Link href="/" className={styles.logo} >
      MicroThrive
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
