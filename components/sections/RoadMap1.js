
import Link from "next/link"

export default function RoadMap1() {
    return (
        <>

            <section className="tf-section road-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Road Map</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Road Map</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>The Journey of <br /> Monteno
                                    NFT</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="road-map__content s1">
                                <div className="box-time left" data-aos="fade-right" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                    <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                    <h5 className="title mb-20">Idea Generation</h5>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor
                                        inc ididunt ut labore et dolore quis </p>
                                </div>
                                <div className="box-time right mt-223" data-aos="fade-up" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                    <p className="fs-16 color-main mb-0">March 30, 2022</p>
                                    <h5 className="title mb-20">Design &amp; Development</h5>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor
                                        inc ididunt ut labore et dolore quis </p>
                                </div>
                                <div className="box-time left mt--23" data-aos="fade-right" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-circle" /></span>
                                    <p className="fs-16 color-main mb-0">April 20, 2022</p>
                                    <h5 className="title mb-20">Initial Release </h5>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor
                                        inc ididunt ut labore et dolore quis </p>
                                </div>
                                <div className="box-time right mt-200" data-aos="fade-up" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-angle-down color2" /></span>
                                    <p className="fs-16 color-main mb-0">May 30, 2022</p>
                                    <h5 className="title mb-20">Result &amp; Final Report</h5>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor
                                        inc ididunt ut labore et dolore quis </p>
                                </div>
                            </div>
                            <div className="view-all center" data-aos="fade-up">
                                <Link href="/roadmap" className="btn-action style-2">View Full</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
