
import Link from "next/link"

export default function Infomation2() {
    return (
        <>

            <section className="tf-section section-info" id="info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Why To The Moon Coin?</h5>
                                <h3 className="title mb-26" data-aos="fade-up" data-aos-duration={1000}> </h3>
                                <p className="fs-21 mb-50" data-aos="fade-up" data-aos-duration={1000}> </p>
                                <Link href="/contact" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Buy Token</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="box-info" data-aos="zoom-in" data-aos-duration={2000}>
                                <ul>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/user.png" alt="Monteno" /> Name :</h5>
                                        <p className="fs-16">Al Mahmud</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="Monteno" />Flatform :</h5>
                                        <p className="fs-16">Monteno</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="Monteno" />Total Supply :
                                        </h5>
                                        <p className="fs-16">100'000tokens</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="Monteno" />ICO supply :</h5>
                                        <p className="fs-16">60'000 tokens</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/payment.png" alt="Monteno" />Token Price :
                                        </h5>
                                        <p className="fs-16">0.25€ / 0.29 USD</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
