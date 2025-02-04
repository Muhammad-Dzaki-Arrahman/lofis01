import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <img src="/assets/images/logo.png" alt="Monteno" data-aos="fade-down" />
                            <p className="desc fs-18" data-aos="fade-up">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt
                                mollit ani
                            </p>
                            <ul className="social">
                                <li data-aos="fade-up" data-aos-duration={1000}><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                <li data-aos="fade-up" data-aos-duration={1200}><Link href="#"><i className="fab fa-twitter" /></Link>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1400}><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                <li data-aos="fade-up" data-aos-duration={1600}><Link href="#"><i className="fab fa-youtube" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_bottom">
                            <p className="fs-16">Copyright © {new Date().getFullYear()}, Monteno - NFT Portfolio Next.js Template. Designed by <Link href="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link></p>
                            <ul>
                                <li><Link href="#">Terms &amp; Condition</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
