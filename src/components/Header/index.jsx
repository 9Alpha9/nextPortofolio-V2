"use client";
import React from "react";
import styles from "@/components/Header/Header.module.scss";
import Link from "next/link";

function HeaderComponents() {
  const navLink = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Portofolio",
      href: "/portofolio",
    },
  ];
  return (
    <>
      <header className={`${styles.header} p-4 text-md items-center px-2`}>
        <nav className={`${styles.navHeader} flex justify-between`}>
          <div className={`${styles.navLogo} items-center align-middle flex`}>
            <a href="/">Logo</a>
          </div>
          <div
            className={`${styles.navItems} p-2 px-4  items-center align-middle space-x-2`}
          >
            <div className={`${styles.navLinks__link}`}>
              <ul className="flex p-2 px-4 space-x-5">
                {navLink.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.href} legacyBehavior>
                      <a>{menu.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default HeaderComponents;
