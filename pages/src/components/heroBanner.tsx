import React from "react"; // header.tsx

const HeroBanner: React.FC = () => {
  return (
    <>
      <section className="hero_banner">
        <div className="container flex_me">
          <div className="col">
            <div className="hero_banner_caption">
              <h1>
                Your Path
                <br />
                To The World
              </h1>
              <span>Say Hello to the new Saudi Post | SPL</span>
            </div>
            <div
              id="root"
              className="track_trace order-tracking mt-2 p-md-4 p-3"
            >
              <span>Track and Trace</span>{" "}
              <a href="#!" className="info_icon">
                <img src="/Design/images/info_icon.svg" alt="" />
              </a>{" "}
              <div
                className="tooltip_box"
                style={{
                  top: 0,
                  bottom: "auto",
                  width: "auto",
                }}
              >
                <p>
                  You can find the shipment tracking number (13 characters or
                  more) in an SMS sent to your phone number.{" "}
                </p>
              </div>{" "}
              <p>Enter One or More tracking numbers</p>{" "}
              <div className="row">
                <div className="col-12">
                  <div
                    // onclick="document.getElementById('tid').focus(); return false;"
                    className="list-itcodes onHomePage"
                  >
                    {" "}
                    <input
                      type="text"
                      id="tid"
                      placeholder="e.g XHSNF74652HBD"
                      className="tag-input"
                    />
                  </div>
                </div>{" "}
                <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                  <div>
                    {" "}
                    Separate tracking numbers with a <strong>Space</strong> to
                    view shipments status
                  </div>{" "}
                  <button
                    id="trackBtnDetails"
                    className="btn primary_btn waves-effect waves-light"
                  >
                    {" "}
                    Track
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              className="hero_banner_img aos-init aos-animate"
              src="https://splonline.com.sa/media/2326/3.jpg"
              alt=""
              data-udi="umb://media/779c32db79984ce09d015f18663689bd"
              data-aos="fade-left"
              data-aos-delay="1300"
            />
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="110.53900146484375"
          viewBox="0 0 1922.745 110.539"
          className="hero_linear"
          preserveAspectRatio="xMidYMid slice"
        >
          <g id="lines" transform="translate(240.981 6.003)">
            <g id="Group_5" data-name="Group 5" transform="translate(0.001)">
              <path
                id="Stroke_1"
                data-name="Stroke 1"
                d="M481.449,31H40.442c-9.228,0-12.731-3.427-17.011-7.614,0,0-2.6-2.54-6.83-6.776L0,0"
                transform="translate(1199.524 22.804)"
                fill="none"
                stroke="#153c3f"
                stroke-miterlimit="10"
                stroke-width="12"
                className="svg-hero-1"
              ></path>
              <path
                id="Stroke_5"
                data-name="Stroke 5"
                d="M1199.525,22.8,1179.014,2.286a9.393,9.393,0,0,0-13.2.888L1114.988,54c-4.235,4.236-12.6,7.7-18.588,7.7L16.047,61.5H-240.981"
                transform="translate(-0.001 0)"
                fill="none"
                stroke="#153c3f"
                stroke-miterlimit="10"
                stroke-width="12"
                className="svg-hero-2"
              ></path>
            </g>
            <path
              id="Stroke_3"
              data-name="Stroke 3"
              d="M1681.764,0H1245.2c-5.2,0-7.724,1.33-10.369,3.975L1162.864,74,1105.8,27.31l-1346.711-.455"
              transform="translate(0 22.5)"
              fill="none"
              stroke="#00c8e1"
              stroke-miterlimit="10"
              stroke-width="12"
              className="svg-hero-3"
            ></path>
          </g>
        </svg>
      </section>
    </>
  );
};

export default HeroBanner;
