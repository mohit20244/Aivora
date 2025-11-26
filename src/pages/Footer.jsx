import React from 'react'
import "../components/Footer.css"

function Footer() {
    return (
        <>
            <section className='support-bg'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-6 '>
                            <h2 className='title'>24/7 Support <br />
                                Available
                            </h2>

                            <p className='sub-title'>
                                We're here for you 24/7, ready to assist whenever you need.
                            </p>

                            <ul className='support-list'>
                                <li>
                                    <span><img src="https://html.xpressbuddy.com/aivora/demo/assets/img/icon/check.svg" alt="" /></span>
                                    Reach us on live chat or email, whichever you prefer.
                                </li>
                                <li>
                                    <span><img src="https://html.xpressbuddy.com/aivora/demo/assets/img/icon/check.svg" alt="" /></span>
                                    No frustrating waiting times – on average, we respond
                                    in less than 2 days.
                                </li>
                            </ul>



                            <div className=" d-flex align-items-center" >
                                <a href="#" className="browse-btn d-flex ">
                                    <span className="text">GET SUPPORT</span>
                                    <div className="arrow-circle">
                                        <svg
                                            width="28"
                                            height="38"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M7 17L17 7"></path>
                                            <path d="M7 7h10v10" strokeDasharray="1 2"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6 align-item-center'>
                            <img src="https://html.xpressbuddy.com/aivora/demo/assets/img/bg/cta_img.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>

                </div>
            </section>
            {/* support end */}



            {/* Footer start */}
            <section className='footer-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2 className='footer-title'>Let’s build a creative & 
                                <br />
                                Beautiful website today!</h2>
                        </div>
                    </div>

                </div>
            </section>
            {/* Footer end */}

        </>
    )
}

export default Footer
