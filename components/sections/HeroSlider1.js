
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions1 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1,
    },
    speed: 2000,
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1,
        reverseDirection: true,
    },
    speed: 2000,
}
const swiperOptions3 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 1,
    },
    speed: 2000,
}

export default function HeroSlider1() {
    return (
        <>

            <section className="tf-section hero-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-6 col-12">
                            <div className="block-text pt-24">
                                <h6 className="sub-title mb-6" data-aos="fade-up">We are Monteno NFT</h6>
                                <h2 className="title mb-26" data-aos="fade-up">Collect Next Generation NFTs Today </h2>
                                <p className="desc mb-43" data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium </p>
                                <Link href="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Get
                                    Connected</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6 col-12">
                            <div className="content-right d-flex">
                                <div className="swiper-container swiper mySwiper1 swiper-h">
                                    <Swiper {...swiperOptions1} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-02.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-01.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-02.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-02.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-01.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-02.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="swiper-container swiper mySwiper2 swiper-h ">
                                    <Swiper {...swiperOptions2} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-03.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-04.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-05.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-03.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-04.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-05.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="swiper-container swiper mySwiper3 swiper-h d-m-none">
                                    <Swiper {...swiperOptions3} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-06.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-07.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-06.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-06.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-1"><img src="/assets/images/items/item-07.png" alt="Monteno" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="item bg-2"><img src="/assets/images/items/item-06.png" alt="Monteno" />
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
    )
}
