import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="footer style-2">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="info">
                  {/* <img src="/assets/images/logo/img_1.png" alt="Monteno" /> */}
                  <h1>LOFIS</h1>
                  <p className="desc fs-18">
                    LOFIS leverages Solana’s efficiency to provide fast,
                    low-cost transactions, privacy, and real DeFi utility.
                  </p>
                  <ul className="social">
                    {/* <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li> */}
                    <li>
                      <a href="https://x.com/" target="_blank">
                        <img src="/assets/images/x.png"></img>
                      </a>
                    </li>
                    {/* <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li> */}
                    <li>
                      <a href="https://telegram.org/" target="_blank">
                        <img src="/assets/images/telegram.png"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://dexscreener.com/" target="_blank">
                        <img src="/assets/images/partners/dex.png"></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-6">
                <div className="link s1">
                  <h5 className="title">Socials</h5>
                  <ul>
                    <li>
                      <a href="https://web.telegram.org/">Telegram</a>
                    </li>
                    <li>
                      <a href="https://x.com/">Twitter</a>
                    </li>
                    <li>
                      <a href="https://dexscreener.com/">DEX Screener</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-6">
                <div className="link s2">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#speciality">Speciality</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#roadmap">Roadmap</a>
                    </li>
                    <li>
                      <a href="#team">Teams</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="newsletter">
                  <h5 className="title">Connect Wallet</h5>
                  <p className="fs-18">Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <p className="fs-16">
                Copyright © {new Date().getFullYear()}, LOFIS{" "}
              </p>
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
  );
}
