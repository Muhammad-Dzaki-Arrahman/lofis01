import Link from "next/link"

export default function Footer2() {
    return (
        <>

            <footer className="footer style-2">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="info">
                                    <img src="/assets/images/logo-2.png" alt="Monteno" />
                                    <p className="desc fs-18">
                                        .
                                    </p>
                                    <ul className="social">
                                        {/* <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li> */}
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        {/* <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li> */}
                                        <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-md-6 col-6">
                                <div className="link s1">
                                    <h5 className="title">Quick links</h5>
                                    <ul>
                                        <li><Link href="/collections">NFT Trading</Link></li>
                                        <li><Link href="/about">Development</Link></li>
                                        <li><Link href="/about">Advertisement</Link></li>
                                        <li><Link href="/about">Career</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-xl-3 col-md-6 col-6">
                                <div className="link s2">
                                    <h5 className="title">Help</h5>
                                    <ul>
                                        <li><Link href="/onePage#about">About Us</Link></li>
                                        <li><Link href="/onePage#team">Team Members</Link></li>
                                        <li><Link href="/onePage#faq">Support</Link></li>
                                        {/* <li><Link href="/about">Refund Policy</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-md-6 col-12">
                                <div className="newsletter">
                                    <h5 className="title">Newsletter</h5>
                                    <p className="fs-18">Duis aute irure dolor in reprehen derit in voluptate velit.</p>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email here" required />
                                            <i className="fa fa-envelope" />
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                        <div className="footer_bottom">
                            <p className="fs-16">Copyright © {new Date().getFullYear()}, Monteno </p>
                            {/* <ul>
                                <li><Link href="#">Terms &amp; Condition</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Cookie Policy</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
