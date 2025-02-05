"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header
        id="header_main"
        className={`header ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__body d-flex justify-content-between">
                <div className="header__logo">
                  <a href="#home">
                    {/* <img id="site-logo" src="/assets/images/logo.png" alt="Monteno" width={217} height={50} data-retina="assets/images/logo@2x.png" data-width={217} data-height={50} /> */}
                    LOFIS
                  </a>
                </div>
                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    {!isMobile && <Menu />}
                  </nav>
                  {/* #main-nav */}
                  <ul className="social">
                    <li>
                      <Link href="https://web.telegram.org/">
                        <i className="fab fa-telegram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                  </ul>
                  <div className="mobile-button" onClick={handleMobileMenu}>
                    <span />
                  </div>
                  {/* /.mobile-button */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobile && <MobileMenu isMobileMenu={isMobileMenu} />}
      </header>
    </>
  );
}
