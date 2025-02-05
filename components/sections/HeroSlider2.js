import Link from "next/link";

export default function HeroSlider2() {
  return (
    <>
      <section id="home" className="tf-section hero-slider style-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="block-text pt-24 center">
                <h6 className="sub-title mb-6" data-aos="fade-up">
                  We are LOFIS
                </h6>
                <h2 className="title mb-26" data-aos="fade-up">
                  Empowering DeFi with Speed & Privacy
                </h2>
                <p className="desc mb-53" data-aos="fade-up">
                  LOFIS leverages Solana’s efficiency to provide <br /> fast,
                  low-cost transactions, privacy, and real DeFi utility.
                </p>
                <Link
                  href="#"
                  className="btn-action style-2"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  Coming Soon
                </Link>
                <div className="shape">
                  <div className="item bg-1">
                    <img
                      src="/assets/images/sliders/img_1_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-2">
                    <img
                      src="/assets/images/sliders/img_2_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-1">
                    <img
                      src="/assets/images/sliders/img_4_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-1">
                    <img
                      src="/assets/images/sliders/img_3_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-2">
                    <img
                      src="/assets/images/sliders/img_2_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-2">
                    <img
                      src="/assets/images/sliders/img_6_bg.png"
                      alt="Image"
                    />
                  </div>
                  <div className="item bg-1">
                    <img
                      src="/assets/images/sliders/img_3_bg.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
