"use client";
import { Tilt } from "react-tilt";
import Link from "next/link";
const options = {
  max: 25,
  scale: 1,
  speed: 400,
};
export default function Speciality() {
  return (
    <>
      <section className="tf-section section-speciality">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <Tilt
                options={options}
                className="box-item bg-2"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <img
                  src="/assets/images/icon/img_1.png"
                  alt="LoFiS"
                />
                <Link href="/audit-services" className="h5">
                  Advanced Security
                </Link>
                <p>
                  AI-powered smart contract audits ensure safety and reliability
                  in the Solana ecosystem.
                </p>
              </Tilt>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <Tilt
                options={options}
                className="box-item bg-2 s2"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <img src="/assets/images/icon/efficiency.png" alt="LoFiS" />
                <Link href="/audit-services" className="h5">
                  High Efficiency
                </Link>
                <p>
                  Optimized audits with rapid execution and minimal transaction
                  costs on Solana.
                </p>
              </Tilt>
            </div>
            <div
              className="col-xl-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <Tilt options={options} className="box-item bg-2 s2-m">
                <img src="/assets/images/icon/trust.png" alt="LoFiS" />
                <Link href="/audit-services" className="h5">
                  Transparent Reports
                </Link>
                <p>
                  Comprehensive audit reports with clear insights for developers
                  and investors.
                </p>
              </Tilt>
            </div>
            <div
              className="col-xl-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <Tilt options={options} className="box-item bg-2 s2">
                <img src="/assets/images/icon/community.png" alt="LoFiS" />
                <Link href="/community" className="h5">
                  Strong Community
                </Link>
                <p>
                  Driven by a passionate community supporting security and
                  innovation in Solana.
                </p>
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
