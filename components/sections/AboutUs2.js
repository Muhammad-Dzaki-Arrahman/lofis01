import Link from "next/link";

export default function AboutUs2() {
  return (
    <>
      <section id="about" className="tf-section section-about">
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
                  Empowering DeFi & Privacy on Solana
                </h3>
                <p
                  className="fs-21 mb-33"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  LoFiS is a next-generation Solana-based token designed to
                  enhance speed, privacy, and financial accessibility in DeFi.
                </p>
                <p
                  className="fs-18 line-h17 mb-41"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  With low-cost transactions, staking rewards, and innovative
                  Privacy Bridge technology, we provide a secure, inclusive, and
                  decentralized financial ecosystem. Join us in revolutionizing
                  the future of blockchain finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
