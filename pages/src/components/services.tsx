import React from "react"; // header.tsx

const Services: React.FC = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="flex_me">
            <div className="col">
              <img src="/media/2209/national_address_icon.svg" alt="" />{" "}
              <span>National Address</span>
              <p>
                Register a National Address for yourself, your business or a
                government agency.
              </p>
              <a
                href="https://eservices.splonline.com.sa/en/"
                className="btn_noBG"
              >
                Register Now
              </a>
            </div>
            <div className="col">
              <img src="/media/2200/calc_icon.svg" alt="" />{" "}
              <span>Price Calculator</span>
              <p>
                Got something you need to send? Input the weight and size and
                find postage prices and the estimated delivery time.
              </p>
              <a href="/en/price-calculator/" className="btn_noBG">
                Calculate Postage
              </a>
            </div>
            <div className="col">
              <img src="/media/2211/pay_icon.svg" alt="" />{" "}
              <span>Pay Postage Bill</span>
              <p>
                Got an outstanding bill? You can pay all your postage bills
                easily online.
              </p>
              <a href="/en/paybill" className="btn_noBG">
                Pay Bill
              </a>
            </div>
            <div className="col">
              <img src="/media/2210/online_services_icon.svg" alt="" />{" "}
              <span>Service Catalogue</span>
              <p>Service Catalogue - SPL Online</p>
              <a href="/en/services-catalogue/" className="btn_noBG">
                Check our services
              </a>
            </div>
            <p>&nbsp;</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
