"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export default function RoadMap2() {
  return (
    <>
      <section className="tf-section road-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h1
                  className="heading-bg"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <span>Road Map</span>
                </h1>
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Road Map
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  The Journey of LOFIS{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="road-map__content style-2">
                <div className="swiper swiper-road-map">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="swiper-box top">
                        <div className="box-time" data-aos="fade-down">
                          <span data-aos="zoom-in" data-aos-offset={300}>
                            <i className="fa fa-check" />
                          </span>
                          <h5 className="title mb-20">Concept & Ideation</h5>
                          <p className="fs-18">
                            Laying the foundation for LOFIS, focusing on
                            security and AI-driven smart contract auditing.
                          </p>
                        </div>
                        <p className="fs-16 color-main mb-0">Q1 2025</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-box bottom">
                        <div className="box-time" data-aos="fade-up">
                          <span data-aos="zoom-in" data-aos-offset={300}>
                            <i className="fa fa-check" />
                          </span>
                          <h5 className="title mb-20">
                            Research & Development
                          </h5>
                          <p className="fs-18">
                            Conducting deep research on Solana’s security
                            landscape and developing AI-powered audit protocols.
                          </p>
                        </div>
                        <p className="fs-16 color-main mb-0">Q2 2025</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-box top">
                        <div className="box-time" data-aos="fade-down">
                          <span data-aos="zoom-in" data-aos-offset={300}>
                            <i className="fa fa-circle" />
                          </span>
                          <h5 className="title mb-20">Platform Development</h5>
                          <p className="fs-18">
                            Building and testing the smart contract audit
                            platform, integrating AI-powered security
                            assessments.
                          </p>
                        </div>
                        <p className="fs-16 color-main mb-0">Q3 2025</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-box bottom">
                        <div className="box-time" data-aos="fade-up">
                          <span data-aos="zoom-in" data-aos-offset={300}>
                            <i className="fa fa-angle-right color2" />
                          </span>
                          <h5 className="title mb-20">
                            Token Launch & Staking
                          </h5>
                          <p className="fs-18">
                            Launching the LOFIS token with staking options and
                            governance mechanisms for community-driven security.
                          </p>
                        </div>
                        <p className="fs-16 color-main mb-0">Q4 2025</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-box top">
                        <div className="box-time">
                          <span data-aos="zoom-in" data-aos-offset={300}>
                            <i className="fa fa-check" />
                          </span>
                          <h5 className="title mb-20">Ecosystem Expansion</h5>
                          <p className="fs-18">
                            Expanding partnerships, integrating LOFIS audit
                            services with top Solana projects, and growing the
                            community.
                          </p>
                        </div>
                        <p className="fs-16 color-main mb-0">2026</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
