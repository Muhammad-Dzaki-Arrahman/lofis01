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
                <img src="/assets/images/icon/img_1.png" alt="LoFiS" />
                <h5 className="h5">Decentralized Finance</h5>
                <p>
                  LOFIS empowers users with inclusive DeFi solutions, staking,
                  and low-cost transactions.
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
                <h5 className="h5">Speed & Efficiency</h5>
                <p>
                  Built on Solana, LOFIS ensures fast transactions with minimal
                  fees for seamless DeFi interactions.
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
                <h5 className="h5">Privacy Bridge</h5>
                <p>
                  Secure, private transactions using Zero-Knowledge Proofs for
                  enhanced user anonymity.
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
                <h5 className="h5">Engaged Community</h5>
                <p>
                  A thriving, collaborative community driving the future of DeFi
                  and smart contract security.
                </p>
              </Tilt>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
