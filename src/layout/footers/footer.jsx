import Link from "next/link";
import React from "react";
import { ClipPath, UpArrow } from "../../svg";

const footer_contents = {
  title: (
    <>
      Experts in Groundworks, Concrete Frames, and Civil Engineering. Tailored
      construction solutions for every client. 🤝
    </>
  ),
  btn_text: "Contact Us",
  copyRight_text: (
    <>© {new Date().getFullYear()} Shara Solutions , All Rights Reserved.</>
  ),
  conditions: ["Support", "Privacy policy", "Terms and conditions"],
  logo: "/assets/img/copyright/copyright-logo.png",
  social_links: [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=61561428812443",
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/company/ysl-civils-ltd/",
    },
  ],
};

const { btn_text, conditions, copyRight_text, logo, social_links, title } =
  footer_contents;

const Footer = () => {
  return (
    <footer className="p-relative">
      <button className="scrollTop d-none d-md-block" data-target="html">
        <Link href={"/"}>
          <div className="tp-backto-top">
            <UpArrow />
          </div>
        </Link>
      </button>
      <div className="footer-clip-shape">
        <ClipPath />
      </div>
      <div className="tp-clip-height-one"></div>
      <div className="tp-clip-height-two"></div>
      <div className="tp-footer-area tp-footer-space black-bg p-relative fix pt-0">
        <div className="tp-footer-border-shape d-none"></div>
        <div className="tp-footer-border-shape-two"></div>
        <div className="circle-animation footer-animation d-none d-md-block">
          <span className="tp-circle-3"></span>
        </div>
        <div className="container">
          <div
            className="tp-footer-widget wow tpfadeUp"
            data-wow-duration=".5s"
            data-wow-delay=".5s"
          >
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                <div className="tp-footer-top">
                  <h6 className="tp-footer-title">{title}</h6>
                </div>
                <div className="tp-footer-top">
                  <h6 className="mt-4 tp-footer-sub-title">
                    {/* {"Opening Hours - 8:00 AM - 17:30 PM (MON - SAT)"} */}
                  </h6>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                <div className="tp-footer-button text-start text-md-end">
                  <Link href="/contact">
                    <a className="tp-btn">
                      {btn_text}
                      <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tp-copyright-area pb-90 wow tpfadeUp"
          data-wow-duration=".5s"
          data-wow-delay=".7s"
        >
          <div className="container">
            <div className="tp-copyright-box align-items-center">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                  <div className="tp-copyright-text z-index-1">
                    <p className="m-0">{copyRight_text}</p>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                  <div className="tp-copyright-right text-md-end text-start">
                    <Link href="/privacy">
                      <a>Privacy & Policy</a>
                    </Link>
                    <Link href="/tc">
                      <a>Terms & Conditions</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-copyright-logo-box">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="tp-copyright-logo mt-35">
                    <Link href="/">
                      <a>
                        <img src={logo} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                  <div className="tp-copyright-social text-md-end mt-25">
                    {social_links.map((s, i) => (
                      <a
                        key={i}
                        rel="noreferrer"
                        target="_blank"
                        href={`${s.link}`}
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
