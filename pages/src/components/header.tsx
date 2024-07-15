import React from "react"; // header.tsx

const Header: React.FC = () => {
  return (
    <>
      <div className="header_wrapper ShowHeaderclassNameName">
        <div className="top_bar">
          <div className="container flex_me">
            <div className="col">
              <ul className="navTop">
                <li id="individual" className="active">
                  <a href="/en/">Individuals</a>
                </li>
                <li id="enterprise">
                  <a href="/en/enterprise">Enterprise</a>
                </li>
                <li id="government">
                  <a href="/en/government">Government</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <div className="help_dropdown">
                <a href="#" className="onMobile_view">
                  Help
                </a>
                <div>
                  <span>Help and Support</span>
                  <ul>
                    <li>
                      <a href="/en/faq/">FAQ</a>
                    </li>
                    <li>
                      <a href="/en/customer-service/">Customer Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#branches"
                title="Branches"
                className="desktop_view"
                id="scrollToBranch"
              >
                <img src="/Design/images/branch_icon.svg" alt="" />
              </a>
              <button
                type="button"
                title="Search"
                className="search_btn desktop_view btn-srch"
              >
                <img src="/Design/images/search_icon.svg" alt="" />
              </button>

              <a
                className="nav-link switchLang"
                href="/umbraco/Surface/Localization/Set?lang=ar&amp;url=%2Far%2F"
              >
                عربي
              </a>
              <div className="search_box">
                <form
                  id="search"
                  name="search"
                  action="/en/search"
                  method="get"
                >
                  <button
                    type="button"
                    className="close bg-transparent border-0"
                  ></button>
                  <div className="search_field">
                    <span>Search the website...</span>

                    <input
                      name="q"
                      aria-label="Search"
                      type="text"
                      id="search_cssw"
                      placeholder="Search..."
                      value=""
                    />
                    <button type="submit">
                      <img src="/Design/images/arrow_icon_white.svg" alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <header
          className="
    home
"
        >
          <div className="container flex_me">
            <div className="col flex_me append_menu">
              <a href="/en/" className="logo">
                <img src="/Design/images/Logo.svg" alt="" />
              </a>

              <ul
                id="menu"
                className="menuIndividual"
                style={{ display: "none" }}
              >
                <li className="menuMobile">
                  <span>Individuals</span>
                </li>
                <li className="has_dropdown">
                  <a href="#">Sending</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/urgent/">Urgent</a>
                      <a href="/en/express/">Express</a>
                      <a href="/en/express-plus/">Express Plus</a>
                      <a href="/en/economy/">Economy</a>
                      <a href="/en/sea-freight-solution/">
                        Sea Freight Solution
                      </a>
                      <a href="/en/mail/">Mail</a>
                      <a href="/en/smes-platform/">SMEs Platform</a>
                      <a href="/ar/package-delivery-service-for-prison-inmates/">
                        Package for Prison
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Receiving</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/door-step/">Door Step</a>
                      <a href="/en/branches/">Branch</a>
                      <a href="/en/government-documents/">
                        Ministry of Interior Documents - Absher
                      </a>
                      <a href="/en/ministry-of-foreign-affairs-service/">
                        Ratification of MOFA Documents
                      </a>
                      <a href="/en/e-po-box/">E- P.O Box</a>
                      <a href="/en/po-box/">P.O Box</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/en/awfar/">Awfar </a>
                </li>
                <li>
                  <a href="/en/alami-page/">Alami</a>
                </li>
                <li>
                  <a href="/en/national-address-1/">National Address</a>
                </li>
                <li className="has_dropdown">
                  <a href="#">Retail Services</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/adahi/">Adahi</a>
                      <a href="/en/money-transfer/">Remittances</a>
                      <a href="/en/hhr/">Haramin Train Passenger Services</a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Financial Services</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/national-finance-company/">
                        National Finance Company
                      </a>
                      <a href="/en/murabaha-company/">Mrna Financing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=" /en/stamps/">Stamps</a>
                </li>
              </ul>

              <ul
                id="menu"
                className="menuGovernmental"
                style={{ display: "none" }}
              >
                <li className="menuMobile">
                  <span>Government</span>
                </li>
                <li>
                  <a href="/en/official-mail">Official Mail </a>
                </li>
                <li>
                  <a href="/en/mail-room">Mail Room</a>
                </li>
              </ul>

              <ul
                id="menu"
                className="menuEnterprise"
                style={{ display: "none" }}
              >
                <li className="menuMobile">
                  <span>Enterprise</span>
                </li>
                <li className="has_dropdown">
                  <a href="#">Shipping</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/shipping-for-your-business/">
                        Shipping for your business{" "}
                      </a>
                      <a href="/en/smes/">SMEs Platform</a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Business Solution</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/tijari">Tejari</a>
                      <a href="/en/spl-mailroom/">SPL Mailroom </a>
                      <a href="/en/e-commerce-services">E-commerce </a>
                      <a href="/en/e-po-box/">E- P.O Box</a>
                      <a href="/en/po-box/">P.O Box</a>
                      <a href="/en/post-business/">Post Business</a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Data Services</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/national-address-api">
                        National Address API
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Agent Services</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/moneytransfer/">Money Transfer</a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">3PL</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/medical-mail/">Medical Mail Services</a>
                    </li>
                  </ul>
                </li>
                <li className="has_dropdown">
                  <a href="#">Financial Services</a>
                  <ul className="mega_menu flex_wrap">
                    <li>
                      <a href="/en/national-finance-company/">
                        National Finance Company
                      </a>
                      <a href="/en/murabaha-company/">Murabaha Company</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col flex_me justify_end desktop_view">
              <a
                target="_blank"
                href="https://eservices.splonline.com.sa/home/homeAddress"
                className="sign_up_link"
              >
                Log in
              </a>
              <a
                target="_blank"
                href="https://accounts.splonline.com.sa/en/Registration"
              >
                Sign Up
              </a>
            </div>

            <div className="col flex_me justify_end mobile_view">
              <a href="/en/branches/" title="Branches">
                Branches
              </a>

              <a
                target="_blank"
                href="https://eservices.splonline.com.sa/home/homeAddress"
              >
                Log in
              </a>
              <a
                target="_blank"
                href="https://accounts.splonline.com.sa/en/Registration"
                className=""
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              role="button"
              //   tabindex="0"
              className="slicknav_btn slicknav_collapsed"
              //   style="outline: none;"
            >
              <span className="slicknav_menutxt">MENU</span>
              <span className="slicknav_icon">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </a>
            <ul
              className="slicknav_nav slicknav_hidden"
              style={{ display: "none" }}
              aria-hidden="true"
              role="menu"
            >
              <li className="menuMobile">
                <span>Individuals</span>
              </li>
              <li className="has_dropdown slicknav_collapsed slicknav_parent">
                <a
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  //   tabindex="-1"
                  className="slicknav_item slicknav_row"
                  //   style="outline: none;"
                >
                  <a
                    href="#"
                    //    tabindex="-1"
                  >
                    Sending
                  </a>
                  <span className="slicknav_arrow">►</span>
                </a>
                <ul
                  className="mega_menu flex_wrap slicknav_hidden"
                  role="menu"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  <li>
                    <a
                      href="/en/urgent/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Urgent
                    </a>
                    <a
                      href="/en/express/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Express
                    </a>
                    <a
                      href="/en/express-plus/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Express Plus
                    </a>
                    <a
                      href="/en/economy/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Economy
                    </a>
                    <a
                      href="/en/sea-freight-solution/"
                      role="menuitem"
                      //   tabindex="-1"
                    >
                      Sea Freight Solution
                    </a>
                    <a
                      href="/en/mail/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Mail
                    </a>
                    <a
                      href="/en/smes-platform/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      SMEs Platform
                    </a>
                    <a
                      href="/ar/package-delivery-service-for-prison-inmates/"
                      role="menuitem"
                      //   tabindex="-1"
                    >
                      Package for Prison
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has_dropdown slicknav_collapsed slicknav_parent">
                <a
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  // tabindex="-1"
                  className="slicknav_item slicknav_row"
                  //   style="outline: none;"
                >
                  <a
                    href="#"
                    //   tabindex="-1"
                  >
                    Receiving
                  </a>
                  <span className="slicknav_arrow">►</span>
                </a>
                <ul
                  className="mega_menu flex_wrap slicknav_hidden"
                  role="menu"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  <li>
                    <a
                      href="/en/door-step/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Door Step
                    </a>
                    <a
                      href="/en/branches/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      Branch
                    </a>
                    <a
                      href="/en/government-documents/"
                      role="menuitem"
                      //   tabindex="-1"
                    >
                      Ministry of Interior Documents - Absher
                    </a>
                    <a
                      href="/en/ministry-of-foreign-affairs-service/"
                      role="menuitem"
                      //   tabindex="-1"
                    >
                      Ratification of MOFA Documents
                    </a>
                    <a
                      href="/en/e-po-box/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      E- P.O Box
                    </a>
                    <a
                      href="/en/po-box/"
                      role="menuitem"
                      // tabindex="-1"
                    >
                      P.O Box
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/en/awfar/"
                  role="menuitem"
                  // tabindex="-1"
                >
                  Awfar{" "}
                </a>
              </li>
              <li>
                <a
                  href="/en/alami-page/"
                  role="menuitem"
                  // tabindex="-1"
                >
                  Alami
                </a>
              </li>
              <li>
                <a
                  href="/en/national-address-1/"
                  role="menuitem"
                  // tabindex="-1"
                >
                  National Address
                </a>
              </li>
              <li className="has_dropdown slicknav_collapsed slicknav_parent">
                <a
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  //   tabindex="-1"
                  className="slicknav_item slicknav_row"
                  //   style="outline: none;"
                >
                  <a
                    href="#"
                    //   tabindex="-1"
                  >
                    Retail Services
                  </a>
                  <span className="slicknav_arrow">►</span>
                </a>
                <ul
                  className="mega_menu flex_wrap slicknav_hidden"
                  role="menu"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  <li>
                    <a href="/en/adahi/" role="menuitem">
                      Adahi
                    </a>
                    <a href="/en/money-transfer/" role="menuitem">
                      Remittances
                    </a>
                    <a href="/en/hhr/" role="menuitem">
                      Haramin Train Passenger Services
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has_dropdown slicknav_collapsed slicknav_parent">
                <a
                  href="#"
                  role="menuitem"
                  aria-haspopup="true"
                  //   tabindex="-1"
                  className="slicknav_item slicknav_row"
                  //   style="outline: none;"
                >
                  <a href="#">Financial Services</a>
                  <span className="slicknav_arrow">►</span>
                </a>
                <ul
                  className="mega_menu flex_wrap slicknav_hidden"
                  role="menu"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  <li>
                    <a
                      href="/en/national-finance-company/"
                      role="menuitem"
                      //   tabindex="-1"
                    >
                      National Finance Company
                    </a>
                    <a
                      href="/en/murabaha-company/"
                      role="menuitem"
                      //  tabindex="-1"
                    >
                      Mrna Financing
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href=" /en/stamps/" role="menuitem">
                  Stamps
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
