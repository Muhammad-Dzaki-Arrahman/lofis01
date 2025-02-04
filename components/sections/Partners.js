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
              <h2 className="our-partners">Our Partners</h2>
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
                            src="/assets/images/partners/certik.png"
                            alt="Monteno"
                            width={300}
                            height={200}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/ethereum.png"
                            alt="Monteno"
                            width={300}
                            height={200}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/polygon.png"
                            alt="Monteno"
                            width={280}
                            height={80}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/solana.png"
                            alt="Monteno"
                            width={350}
                            height={250}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/aave.png"
                            alt="Monteno"
                            width={220}
                            height={45}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="box-partner">
                        <Link href="#">
                          <img
                            src="/assets/images/partners/openzeppelin.png"
                            alt="Monteno"
                            width={260}
                            height={50}
                          />
                        </Link>
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
