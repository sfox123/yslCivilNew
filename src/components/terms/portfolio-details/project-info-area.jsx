import React from "react";

const ProjectInfoArea = ({ item }) => {
  return (
    <>
      <div
        className="cd-project-info-area pb-100"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="cd-project-wrapper">
            <div className="row">
              <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                <div className="cd-project-info-box">
                  <h4 className="cd-case-title">Terms and Conditions</h4>
                  <p>
                    This website (the `&quot;`site`&quot;`) is operated by YSL
                    Civils Ltd (`&quot;`YSL Civils`&quot;`, `&quot;`us`&quot;`
                    or `&quot;`we`&quot;`). These conditions of use are governed
                    by the laws of England and Wales, and you agree that the
                    English courts shall have exclusive jurisdiction in any
                    dispute. Please read our conditions of use carefully. By
                    using the website, you agree to be bound by them. We reserve
                    the right to vary the conditions of use at any time and will
                    post any variations here. You are advised to review the
                    conditions of use regularly, as continued use of the website
                    after changes have been posted constitutes acceptance of
                    those changes. YSL Civils takes every care to ensure that
                    information published on this website is accurate when
                    posted and regularly updated. However, we cannot guarantee
                    its accuracy and may change the information at any time
                    without notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cd-project-wrapper mt-4">
            <div className="row">
              <div className="col-xl-12 col-lg-6 col-md-6 col-12">
                <div className="cd-project-info-box">
                  <h4 className="cd-case-title">
                    WE PUBLISH THE WEBSITE `&quot;`AS IS`&quot;` WITHOUT ANY
                    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE
                    OPERATION OF OUR SITE, THE ACCURACY OF THE INFORMATION, OR
                    THE PRODUCTS OR SERVICES REFERRED TO ON THE WEBSITE (INSOFAR
                    AS SUCH WARRANTIES MAY BE EXCLUDED UNDER ANY RELEVANT LAW).
                    WE SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES THAT MAY
                    RESULT FROM USE OF THE WEBSITE DUE TO ANY INACCURACIES IN,
                    OR OMISSIONS FROM, THE INFORMATION IT MAY CONTAIN.
                  </h4>
                  <p>
                    The information on this website is not an invitation to
                    invest in shares, products, services, or to enter into any
                    contract with YSL Civils Ltd or any other company. The
                    information should not be relied upon for any investment
                    decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoArea;
