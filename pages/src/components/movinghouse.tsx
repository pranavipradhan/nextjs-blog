import Image from "next/image";
import React from "react";

const Movinghouse = () => {
  return (
    <>
      <section className="g20_section">
        <div className="container">
          <div className="flex_me">
            <div className="col">
              <Image src="/images/mv1_ar.jpg" alt="" />
            </div>
            <div className="col">
              <span>
                <strong style={{ fontSize: "50px" }}>Alami</strong>&nbsp;
                <br />
                Your address now is free. We closed the gap between you and your
                purchases around the world!
              </span>
              <p>
                You can buy from your favourite stores in 10 new countries and
                receive it in the Kingdom of Saudi Arabia with your national
                address or any other preferred address..
              </p>
              <a
                href="/en/alami-page/"
                className="btn primary_btn waves-effect waves-light"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="moving_house">
        <div className="container">
          <div className="flex_me">
            <div className="col">
              <Image src="/images/en.png" alt="" />
              <span>Your Address is your Identity</span>
              <p>
                You can register your national address for free and manage your
                address very easily.
              </p>
              <div className="section_btns">
                <a
                  rel="noopener"
                  href="https://eservices.splonline.com.sa/en/"
                  target="_blank"
                  className="btn primary_btn waves-effect waves-light"
                >
                  Register National Address
                </a>
              </div>
            </div>
            <div className="col">
              <Image src="/images/5.jpg" alt="" />
              <span>Are You Shipping frequently?</span>
              <p>
                So you can save with SMEs Platform where the discount rate
                reaches 50%
              </p>
              <div className="section_btns">
                <a
                  href="/en/smes-platform/"
                  className="btn primary_btn waves-effect waves-light"
                >
                  Find out more
                </a>
              </div>
            </div>
            <p>&nbsp;</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movinghouse;
