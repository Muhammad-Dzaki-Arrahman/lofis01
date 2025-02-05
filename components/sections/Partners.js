"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

import Link from "next/link";

export default function Partners() {
  return (
    <>
      <section className="tf-section partners">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h1
                  className="heading-bg"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <span>Partner</span>
                </h1>
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Our Partners
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Top Our <br />
                  Partnerships
                </h3>
              </div>
              <div
                className="partners__body style-2"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* Slider main container */}
                <div className="swiper swiper-partner">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/partner1.png"
                            alt="Polygon"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <img
                          src="/assets/images/partners/partner21.png"
                          alt="Solana"
                          width={180}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <img
                          src="/assets/images/partners/partner3.png"
                          alt="Ethereum"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <img
                          src="/assets/images/partners/partner4.png"
                          alt="Binance"
                          width={180}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <img
                          src="/assets/images/partners/partner5.png"
                          alt="Avalanche"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
