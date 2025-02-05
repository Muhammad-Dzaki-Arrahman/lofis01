"use client";
import { Tilt } from "react-tilt";
import Link from "next/link";
const options = {
  max: 25,
  scale: 1,
  speed: 400,
};

export default function Speciality1() {
  return (
    <>
      <section id="speciality" className="tf-section section-speciality">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-12">
              <div className="block-text pt-128 pd-0">
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Our Speciality
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  LOFIS Solution for your problems
                </h3>
                <p
                  className="fs-21"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  LOFIS focuses on providing fast, secure, and cost-effective
                  solutions for decentralized finance (DeFi) on the Solana
                  blockchain, enhancing user experience with staking, privacy
                  features, and community-driven growth.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-md-12">
              <div className="section-speciality__box">
                <Tilt
                  options={options}
                  className="box-item bg-2 mr-28"
                  data-aos="flip-left"
                >
                  <h3>01</h3>
                  <Link href="/collections" className="h5">
                    Decentralized Finance
                  </Link>
                  <p>LOFIS offers DeFi, staking, and low fees.</p>
                </Tilt>
                <Tilt
                  options={options}
                  className="box-item bg-2 mt-45"
                  data-aos="flip-right"
                  data-aos-duration={1000}
                >
                  <h3>02</h3>
                  <Link href="/collections" className="h5">
                    Speed & Efficiency
                  </Link>
                  <p>LOFIS on Solana ensures fast, low-fee DeFi.</p>
                </Tilt>
                <Tilt
                  options={options}
                  className="box-item bg-2 mr-28 mt--16"
                  data-aos="flip-left"
                >
                  <h3>03</h3>
                  <Link href="/collections" className="h5">
                    Privacy Bridge
                  </Link>
                  <p>
                    LOFIS ensures private transactions with Zero-Knowledge
                    Proofs.
                  </p>
                </Tilt>
                <Tilt
                  options={options}
                  className="box-item bg-2 mt-29"
                  data-aos="flip-right"
                  data-aos-duration={1000}
                >
                  <h3>04</h3>
                  <Link href="/collections" className="h5">
                    Engaged Community
                  </Link>
                  <p>
                    A vibrant community shaping the future of DeFi and security.
                  </p>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
