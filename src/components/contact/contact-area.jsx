import React from "react";
import ContactForm from "../forms/contact-form";
import customer_support from "../../../public/assets/img/breadcrum/contact.json";
import LottieAnimation from "../lottie/LottieAnimation";

const ContactArea = () => {
  return (
    <>
      <div
        className="tp-contact-area pt-135 pb-130"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <LottieAnimation
                    animationData={customer_support}
                    height={400}
                    width={400}
                  />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span>
                    <a href="mailto:(info@yslcivilsltd.co.uk)">
                      info@yslcivilsltd.co.uk
                    </a>
                  </span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span>
                    <a href="tel:+447929363732">+44 7929 363732</a>
                  </span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span>
                    <a href="https://www.google.com/maps" target="blank">
                      15 Meadow Croft Hatfield AL10 0SG
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
