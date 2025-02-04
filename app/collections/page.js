'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Collections() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="NFT" imgNum="group-ntf-04">
                <div>
                    <section className="tf-section collection">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>About</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>About Monteno</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Know More About <br /> Monteno</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-xl-7 col-md-12">
                                    <div className="group-image">
                                        <div className="swiper gallery-top">
                                            <Swiper
                                                spaceBetween={10}
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev',
                                                }}
                                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                modules={[FreeMode, Navigation, Thumbs]} className="swiper-wrapper">
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-26.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-08.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-09.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-10.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-26.png" alt="Image" /></div></SwiperSlide>
                                            </Swiper>
                                        </div>
                                        {/* Add Arrows */}
                                        <div className="swiper-button-next swiper-button-white" />
                                        <div className="swiper-button-prev swiper-button-white" />
                                        <div className="swiper gallery-thumbs">
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]} className="swiper-wrapper">
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-26.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-08.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-09.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-10.png" alt="Image" /></div></SwiperSlide>
                                                <SwiperSlide><div className="item bg-2"><img src="/assets/images/items/item-26.png" alt="Image" /></div></SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-md-12">
                                    <div className="block-text">
                                        <h3 className="fs-42 mb-31">About Monteno ii</h3>
                                        <p className="fs-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa </p>
                                        <h3 className="fs-30 mt-37">Features</h3>
                                        <ul className="nft">
                                            <li><Link href="#"><i className="fa fa-arrow-right" /><span>Latest Technology</span></Link></li>
                                            <li><Link href="#"><i className="fa fa-arrow-right" /><span>Regular Updates</span></Link></li>
                                            <li><Link href="#"><i className="fa fa-arrow-right" /><span>Unlimited Stock</span></Link></li>
                                            <li><Link href="#"><i className="fa fa-arrow-right" /><span>Quality Assured</span></Link></li>
                                        </ul>
                                        <h3 className="fs-30 mt-19">Links</h3>
                                        <ul className="nft s2">
                                            <li><Link href="#"><i className="fas fa-external-link-alt" /><span>Open Sea</span></Link></li>
                                            <li><Link href="#"><i className="fas fa-external-link-alt" /><span>Rarible</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end collection */}
                    {/* Montono */}
                    <section className="tf-section montono">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Collections</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>NFT Portfolio Collections</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Checkout Our NFT<br /> Collections</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row mt-52">
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-02.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-01.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-05.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-04.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-06.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-07.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-02.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-01.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                        <img src="/assets/images/items/montono-05.png" alt="Monteno" />
                                        <div className="image-box__title">
                                            <Link href="/collections" className="h6">Monteno item 1</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="load-more center">
                                        <Link id="loadmore" className="btn-action" href="#">
                                            Load More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Montono */}
                    {/* Action */}
                    <section className="tf-section action">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="action__body" data-aos="fade-up">
                                        <div className="block-text">
                                            <h3 className="mb-13">Create Your NFT Portfolio</h3>
                                            <p className="fs-21 mb-7">Get udpated with news, tips &amp; tricks</p>
                                        </div>
                                        <Link href="/contact" className="btn-action style-2">Join Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </Layout>
        </>
    )
}