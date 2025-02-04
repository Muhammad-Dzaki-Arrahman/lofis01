
import Link from "next/link"

export default function Portfolio1() {
    return (
        <>

            <section className="tf-section porfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Join</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Join NFT Portfolio</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Become a Monteno <br /> Player
                                    Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-61">
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src="/assets/images/icon/wallet.png" alt="Monteno" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 01</p>
                                    <Link href="#" className="h5">
                                        Connect Your Wallet
                                    </Link>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod
                                        tempor inc ididunt ut labore et dolore quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="/assets/images/icon/shopping-cart.png" alt="Monteno" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 02</p>
                                    <Link href="#" className="h5">
                                        Buy Your NFT
                                    </Link>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod
                                        tempor inc ididunt ut labore et dolore quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up">
                                <div className="icon">
                                    <img src="/assets/images/icon/folder.png" alt="Monteno" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 03</p>
                                    <Link href="#" className="h5">
                                        Create Collection
                                    </Link>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod
                                        tempor inc ididunt ut labore et dolore quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="/assets/images/icon/money-bag.png" alt="Monteno" />
                                </div>
                                <div className="content">
                                    <p className="fs-16 color-main">Step 04</p>
                                    <Link href="#" className="h5">
                                        Sell Your NFT
                                    </Link>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod
                                        tempor inc ididunt ut labore et dolore quis </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
