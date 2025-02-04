import Link from "next/link";

export default function AboutUs2() {
  return (
    <>
      <section className="tf-section section-about">
        <div className="container">
          <div className="row reverse">
            <div className="col-xl-7 col-md-12">
              <div className="group-image">
                <div className="left">
                  <div className="item bg-1">
                    <img src="/assets/images/sliders/img_3.png" alt="Monteno" />
                  </div>
                </div>
                <div className="right">
                  <div className="item bg-2">
                    <img src="/assets/images/sliders/img_1.png" alt="Monteno" />
                  </div>
                  <div className="item bg-3">
                    <img src="/assets/images/sliders/img_2.png" alt="Monteno" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-12">
              <div className="block-text pt-12">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  About Us
                </h5>
                <h3
                  className="title mb-58"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Securing the Future of Solana
                </h3>
                <p
                  className="fs-21 mb-33"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  LoFiS is a cutting-edge platform dedicated to smart contract
                  auditing, ensuring security and transparency in the Solana
                  ecosystem.
                </p>
                <p
                  className="fs-18 line-h17 mb-41"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  By leveraging AI-powered technology, we identify
                  vulnerabilities, optimize efficiency, and provide in-depth
                  reports to protect developers and investors. Our mission is to
                  build a safer, more trustworthy decentralized future.
                </p>
                {/* <Link
                  href="/about"
                  className="btn-action style-2"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  More About Us
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
