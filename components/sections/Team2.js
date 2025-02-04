import Link from "next/link";

export default function Team2() {
  return (
    <>
      <section className="tf-section team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h1
                  className="heading-bg"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <span>Team</span>
                </h1>
                <h5
                  className="sub-title mb-10"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Team Members
                </h5>
                <h3
                  className="title mb-28"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  Our Amazing Team <br />
                  Members
                </h3>
              </div>
            </div>
          </div>
          <div className="row mt-48">
            <div className="col-xl-3 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="img-team">
                  <img src="/assets/images/team/founder.jpg" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-github" />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Alex Carter
                  </Link>
                  <p className="fs-16">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="img-team">
                  <img src="/assets/images/team/img_1.jpg" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-telegram" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Sophia Martinez
                  </Link>
                  <p className="fs-16">Lead Blockchain Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={1600}
              >
                <div className="img-team">
                  <img src="/assets/images/team/img_2.jpg" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-telegram" />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    David Kim
                  </Link>
                  <p className="fs-16">Head of Security & Audits</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="img-team">
                  <img src="/assets/images/team/img_3.jpg" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-telegram" />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Emma Wilson
                  </Link>
                  <p className="fs-16">CMO & Community Lead</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-team">
            <div className="col-xl-4 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="img-team">
                  <img src="/assets/images/team/img_4.png" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-telegram" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Liam Parker
                  </Link>
                  <p className="fs-16">AI & Machine Learning Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="img-team">
                  <img src="/assets/images/team/img_5.png" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Olivia Chen
                  </Link>
                  <p className="fs-16">Solana Smart Contract Specialist</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="team-box-2"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="img-team">
                  <img src="/assets/images/team/ops.jpg" alt="LoFiS" />
                  <div className="social">
                    <p>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="team-info">
                  <Link href="/team" className="h5">
                    Ethan Wright
                  </Link>
                  <p className="fs-16">Operations & Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
