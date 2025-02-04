
import Link from "next/link"

export default function AboutUs3() {
    return (
        <>

            <section className="tf-section section-about" id="about">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image">
                                <div className="left">
                                    <div className="item bg-1 big"><img src="/assets/images/items/item-27.png" alt="Monteno" /></div>
                                </div>
                                <div className="right">
                                    <div className="item bg-2 small"><img src="/assets/images/items/item-28.png" alt="Monteno" /></div>
                                    <div className="item bg-3"><img src="/assets/images/items/item-29.png" alt="Monteno" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>About Us</h5>
                                <h3 className="title mb-58" data-aos="fade-up" data-aos-duration={1000}>Lofi On Solana</h3>
                                <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration={1000}> The Meme Coin That Shoots for the Stars!</p>
                                <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration={1000}>
                                In the ever-evolving world of crypto, community-based tokens are becoming increasingly popular as a form of digital 
                                innovation and user engagement. LOFIS is a Solana-based token inspired by LOFI but comes with a more dynamic and 
                                community-oriented concept. Leveraging Solana’s fast and efficient blockchain technology, LOFIS aims to create an 
                                engaging ecosystem for traders, NFT collectors, and fans of music and digital art.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
