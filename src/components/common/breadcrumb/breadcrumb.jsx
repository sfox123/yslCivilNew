import React from "react";

const Breadcrumb = ({ wall, title, back_home = false }) => {
  return (
    <section
      className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{ backgroundImage: `url(${wall})` }}
    >
      {/* <div className="ac-about-shape-img z-index-1">
        <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h5 className="breadcrumb__title">{title}</h5>
              {/* {!back_home &&<Link href="/contact">
                <a className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
              </Link>}
              {back_home &&<Link href="/">
                <a className="tp-btn-white-border">Back to home <i className="far fa-arrow-right"></i></a>
              </Link>} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
