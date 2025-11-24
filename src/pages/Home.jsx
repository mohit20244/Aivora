
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Home.css";
import "../components/Demo.css"


function Home() {
  const items = [
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon.svg", text: "AI Agencies" },
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon02.svg", text: "AI Chatbot" },
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon03.svg", text: "AI Marketing" }
  ];


  const cardRefs = useRef([]);
  const bubbleRefs = useRef([]);

  useEffect(() => {


    const listeners = [];

    (cardRefs.current || []).forEach((card, index) => {
      const bubble = bubbleRefs.current[index];
      console.log(index, "card:", !!card, "bubble:", !!bubble);
      if (!card || !bubble) return;

      let raf = null;
      const last = { x: 0, y: 0 };

      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        last.x = e.clientX - rect.left;
        last.y = e.clientY - rect.top;

        if (raf) return;
        raf = requestAnimationFrame(() => {
          bubble.style.left = `${last.x}px`;
          bubble.style.top = `${last.y}px`;
          bubble.style.transform = "translate(-50%, -50%) scale(1)";
          raf = null;
        });
      };

      const handleLeave = () => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
        bubble.style.transform = "translate(-50%, -50%) scale(0)";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
      listeners.push({ card, handleMove, handleLeave });


    });

    if (bubbleRefs.current[0]) {
      bubbleRefs.current[0].style.transform = "translate(-50%, -50%) scale(1)";
      setTimeout(() => {
        if (bubbleRefs.current[0]) bubbleRefs.current[0].style.transform = "translate(-50%, -50%) scale(0)";
      }, 1000);
    }

    return () => {
      listeners.forEach(({ card, handleMove, handleLeave }) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);


  // helper to store refs when mapping
  const setCardRef = (el, i) => (cardRefs.current[i] = el);
  const setBubbleRef = (el, i) => (bubbleRefs.current[i] = el);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-10">
              <div className="hero-content">
                <span className="sub-title mb-25">
                  <img
                    className="capsule-icon"
                    src="https://img.icons8.com/?size=100&id=39789&format=png&color=228BE6"
                    alt="icon"
                  />
                  One Theme, Endless Possibilities
                </span>

                <h1 className="title">
                  <span>
                    Unique HTML Template For
                    <span className="xb-title-typewriter" aria-hidden="true">
                      {items.map((it, idx) => (
                        <span
                          key={idx}
                          className={`xb-item-text ${idx === 0 ? "is-active" : ""}`}
                          style={{ animationDelay: `${(idx * 6) / items.length}s` }}
                        >
                          <span>
                            <img src={it.icon} alt="icon" />
                          </span>
                          <span className="text">{it.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                <p className="text-white">This unique HTML template is built for AI agencies, chatbots, and marketing.</p>
                <p className="text-white">Modern & easy to customize, it helps showcase your services professionally.</p>

                <a href="#" className="browse-btn d-flex align-items-center">
                  <span className="text">BROWSE DEMO</span>
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

            <div className="col-xl-6 col-lg-10">
              <div className="image-wrapper">
                {/* Gradient background shape */}
                <img
                  src="https://html.xpressbuddy.com/aivora/demo/assets/img/shape/gradient-shape.png"
                  alt=""
                  className="gradient-bg"
                />

                {/* TOP IMAGE */}
                <div className="img-box tilt">
                  <img
                    src="https://html.xpressbuddy.com/aivora/demo/assets/img/bg/hero-img01.png"
                    className="hero-slide-img slide-a"
                    alt="hero 1"
                  />
                </div>

                {/* BOTTOM IMAGE */}
                <div className="img-box tilt lower">
                  <img
                    src="https://html.xpressbuddy.com/aivora/demo/assets/img/bg/hero-img02.png"
                    className="hero-slide-img slide-b"
                    alt="hero 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Demo start */}

      <section className="demo-section">
        <div className="container-fluid mxw_1750">
          <div className="demo-inner">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-12">
                <div className="sec-title demo-sec-title text-center mb-70">
                  <h2 className="title">
                    Check out our amazing <br /> home
                    <span>
                      <img
                        src="https://html.xpressbuddy.com/aivora/demo/assets/img/icon/diamond-icon02.gif"
                        alt="icon"
                      />
                    </span>
                    page’s
                  </h2>
                </div>
              </div>
            </div>


            {/* cards */}

            <div className="row">
              <div className="col-lg-4 mt-30">
                <a href="http://example.com" className="card-link">
                  <div className="card-bg fade-in-up" ref={(el) => (cardRefs.current[0] = el)}>
                    <div className="view-bubble" ref={(el) => (bubbleRefs.current[0] = el)}>VIEW</div>

                    <img
                      src="https://html.xpressbuddy.com/aivora/demo/assets/img/demo/img_01.jpg"
                      alt=""
                      className="card-img"
                    />

                    <h3>AI Agency</h3>
                    <p>AI solutions, Machine learning.</p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 mt-30">
                <a href="http://example.com" className="card-link">
                  <div className="card-bg fade-in-up" ref={el => (cardRefs.current[1] = el)}>
                    <div className="view-bubble" ref={(el) => (bubbleRefs.current[1] = el)}>VIEW</div>
                    <img
                      src="https://html.xpressbuddy.com/aivora/demo/assets/img/demo/img_02.jpg"
                      alt=""
                      className="card-img"
                    />
                    <h3>AI Chatbot</h3>
                    <p>AI solutions, Machine learning.</p>
                  </div>
                </a>
              </div>



              <div className="col-lg-4 mt-30">
                <a href="http://example.com" className="card-link">
                  <div className="card-bg fade-in-up  " ref={el => (cardRefs.current[2] = el)} >
                    <div className="view-bubble" ref={(el) => (bubbleRefs.current[2] = el)}>VIEW</div>
                    <img
                      src="https://html.xpressbuddy.com/aivora/demo/assets/img/demo/img_03.jpg"
                      alt=""
                      className="card-img"
                    />

                    <h3>AI Marketing</h3>
                    <p>AI solutions, Machine learning.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="row  justify-content-center">
              <a href="#" className="browse-btn d-flex align-items-center">
                <span className="text">PURCHES NOW</span>
                <div className="arrow-circle ">
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
        </div>
      </section>

      {/* Demo end */}



      {/* cta start */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7  col-lg-8" >
              <h2 className="cta-heading">Create and customize your legendary website with easy and flexibility</h2>

            
              <a href="#" className="purches-btn d-flex align-items-center">
                <span className="text">PURCHES NOW</span>
                <div className="arrow-circle ">
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

        </div>
      </section>

    </>
  );
}

export default Home;
