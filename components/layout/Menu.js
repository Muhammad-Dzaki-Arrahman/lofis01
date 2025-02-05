"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current-menu-item" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path))
      ? "current-menu-item"
      : "";

  return (
    <>
      <nav id="main-nav" className="main-nav">
        <ul id="menu-primary-menu" className="menu">
          <li
            className={`menu-item ${
              pathname === "#home" ? "current-menu-item" : ""
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`menu-item ${
              pathname === "#speciality" ? "current-menu-item" : ""
            }`}
          >
            <a href="#speciality">Speciality</a>
          </li>
          <li
            className={`menu-item ${
              pathname === "#about" ? "current-menu-item" : ""
            }`}
          >
            <Link href="#about">About</Link>
          </li>
          <li
            className={`menu-item ${
              pathname === "#roadmap" ? "current-menu-item" : ""
            }`}
          >
            <Link href="#roadmap">Roadmap </Link>
          </li>
          <li
            className={`menu-item ${
              pathname === "#team" ? "current-menu-item" : ""
            }`}
          >
            <Link href="#team">Teams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
