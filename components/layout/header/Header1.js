'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991)
        }

        // Initial check
        handleResize()

        // Event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>

            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__logo">
                                    <Link href="/">
                                        <img id="site-logo" src="/assets/images/logo.png" alt="Monteno" width={217} height={50} data-retina="assets/images/logo@2x.png" data-width={217} data-height={50} />
                                    </Link>
                                </div>
                                <div className="header__right">
                                    {!isMobile &&  <Menu /> }
                                    <div className="button">
                                        <Link className="btn-action" href="/contact">
                                            Join Now
                                        </Link>
                                    </div>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobile && <MobileMenu isMobileMenu={isMobileMenu} />}
            </header>

        </>
    )
}
