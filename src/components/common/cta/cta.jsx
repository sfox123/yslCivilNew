import Link from 'next/link';
import React from 'react';

const Cta = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150"
      style={{ backgroundImage: 'url(/assets/img/news/news-bg.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 ">
            <div className="tp-news-sub-wrapper text-center">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">Contact us</h2>
                <p className="text-white pb-35">For questions, comments, or requests regarding this privacy policy, contact us at:</p>
              </div>
              <div className="tp-news-button">
                <Link href="/contact">
                  <a className="tp-btn-lg-yellow">Connect us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;