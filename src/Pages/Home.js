import { Link } from "react-router-dom";
import ApplyNowWidget from "../components/ApplyNowWidget";

const Home = () => {
    return (
        <div className="page-content-wrapper">
            <section id="home">
                <div className="container rel">
                    <div className="home-content-container">
                        <div className="home-txt-side flex-1">
                            <div>
                                <h1 className="home-txt-title pry-color">
                                    Zero Interest loans for African SMEs
                                </h1>
                                <div className="home-txt-description pry-color">
                                    Receive the funds you need to grow your business with no interest and a
                                    flexible repayment plan.
                                </div>
                                <div className="home-btn-wrapper">
                                    <button className="hb-apply-btn hover-scale modal-trigger" data-target="apply-now-modal">
                                        Apply Now
                                    </button>
                                    <Link to={"/contact-us"} className="flex-div hb-talk-btn hover-scale">
                                        <span>Talk to us</span>
                                        <img src={require("../assets/images/chevron-right.svg").default} alt="chevron-right" className="right-arr" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hero-img-side flex-1 right-align">
                            <img src={require("../assets/images/hero-image.png")} alt="hero" className="hero-img" />
                        </div>
                    </div>
                </div>
                <img src={require("../assets/images/hero-bg-pattern.png")} alt="pattern" className="hero-bg-pattern" />
            </section>

            <section id="how-it-works">
                <div className="row">
                    <div className="container">
                        <h3 className="section-title center">
                            How it works: <span>Experience Ajö in 4 simple steps</span>
                        </h3>
                        <div className="hiw-wrapper">
                            <div className="hiw-block">
                                <img src={require("../assets/images/w-1.svg").default} alt="icon" className="hiw-img" />
                                <div className="hiw-title">Application</div>
                                <div className="hiw-desc">
                                    Fill out a simple online application form and submit for review
                                </div>
                            </div>
                            <div className="hiw-block">
                                <img src={require("../assets/images/w-2.svg").default} alt="icon" className="hiw-img" />
                                <div className="hiw-title">Approval</div>
                                <div className="hiw-desc">
                                    Our team reviews your application and funds disbursed into your wallet
                                </div>
                            </div>
                            <div className="hiw-block">
                                <img src={require("../assets/images/w-3.svg").default} alt="icon" className="hiw-img" />
                                <div className="hiw-title">Trade</div>
                                <div className="hiw-desc">
                                    Use the funds wisely to generate income or achieve your financial goals
                                </div>
                            </div>
                            <div className="hiw-block">
                                <img src={require("../assets/images/w-4.svg").default} alt="icon" className="hiw-img" />
                                <div className="hiw-title">Repayment</div>
                                <div className="hiw-desc">
                                    Repay the loan with zero interest rate. Keep 100% of the profits you earn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-choose-ajo">
                <div className="container gray-bg pry-color">
                    <div className="section-title">Why Choose Ajö</div>
                    <div className="wca-txt-container">
                        <div className="wca-img-side">
                            <img src={require("../assets/images/smiling-lady.jpg")} alt="happy-lady" className="wca-img" />
                        </div>
                        <div className="wca-txt-side">
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>Zero Interest:</b> Ajö loans come with absolutely zero interest, helping you save more
                                    and borrow responsibly.
                                </div>
                            </div>
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>Flexible Terms:</b> Tailor-made loan terms that suit your needs, ensuring a comfortable
                                    repayment schedule.
                                </div>
                            </div>
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>Empowerment:</b> You keep all the profits you make using the loan funds, creating
                                    opportunities for you to thrive.
                                </div>
                            </div>
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>Easy Application:</b> A hassle-free application process designed to get you the funds you need quickly.
                                </div>
                            </div>
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>No Hidden Fees:</b> Transparency is our promise. No surprises, no hidden costs, only
                                    straightforward lending.
                                </div>
                            </div>
                            <div className="wca-txt-row">
                                <img src={require("../assets/images/star.svg").default} alt="star" className="wca-star" />
                                <div className="wca-txt">
                                    <b>Expand your business:</b> Whether it's for farming, trading, starting a business, or
                                    business expansion, we support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonies">
                <div className="container">
                    <div className="testimonies-wrapper">
                        <div className="testimony-block flex-div">
                            <img src={require("../assets/images/testifiers.png")} alt="testifiers" className="testimony-pictures" />
                            <div className="testimony-txt">
                                <div className="testifier-name">Babagana Auwal O</div>
                                <div className="testifier-testimony">
                                    “I was privileged to be part of the Ajö scheme as it helped me transform my
                                    grains trading business. No surprises, no hidden costs, only straight
                                    costs, only straightforward lending.”
                                </div>
                            </div>
                            <img src={require("../assets/images/quote.svg").default} alt="quote" className="quote-icon" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <ApplyNowWidget />
            </section>
        </div>
    )
}

export default Home;