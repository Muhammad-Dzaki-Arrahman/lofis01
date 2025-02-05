"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ isMobileMenu }) {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (key) => {
    setIsActive((prevState) => (prevState === key ? null : key));
  };
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
      <nav
        id="main-nav-mobi"
        className="main-nav"
        style={{ display: `${isMobileMenu ? "block" : "none"}` }}
      >
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
            <a href="#about">About</a>
          </li>
          <li
            className={`menu-item ${
              pathname === "#roadmap" ? "current-menu-item" : ""
            }`}
          >
            <a href="#roadmap">Roadmap </a>
          </li>
          <li
            className={`menu-item ${
              pathname === "/team" ? "current-menu-item" : ""
            }`}
          >
            <a href="#team">Teams</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
