
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
                                <h3 className="title mb-58" data-aos="fade-up" data-aos-duration={1000}>To The Moon Coin 🚀</h3>
                                <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration={1000}> The Meme Coin That Shoots for the Stars!</p>
                                <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration={1000}>
                                To The Moon Coin isn’t just another meme coin—it’s a movement! Inspired by the legendary phrase “To the Moon,” 
                                we’re here to take crypto, memes, and space exploration to the next level.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
