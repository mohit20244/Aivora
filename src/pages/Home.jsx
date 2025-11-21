import React from 'react'
import "../components/Home.css";







function Home() {

  const items = [
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon.svg", text: "AI Agencies" },
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon02.svg", text: "AI Chatbot" },
    { icon: "https://html.xpressbuddy.com/aivora/demo/assets/img/icon/title-icon03.svg", text: "AI Marketing" }
  ];




  return (
    // hero section start
    <section className="hero-section ">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-10">
            <div className='hero-content'>
              <span class="sub-title mb-25" >
                <img className='capsule-icon' src="https://img.icons8.com/?size=100&id=39789&format=png&color=228BE6" alt="icon" />
                One Theme, Endless Possibilities
              </span>
              <h1 class='title'>
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

            </div>
          </div>

          <div className="col-xl-6col-lg-10">
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
  )
}

export default Home
