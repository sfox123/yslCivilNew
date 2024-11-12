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
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="cd-project-info-box">
                  <h4 className="cd-case-title">Information We collect </h4>
                  <p>
                    To better serve your interest in YSL Civils, we may collect
                    and process the following personal data:
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="cd-client-details">
                  <p>
                    <span>Personal Details :</span> Name, employer details, and
                    job title
                  </p>
                  <p>
                    <span>Contact Information :</span> Including email address{" "}
                  </p>
                  <p>
                    <span>Voluntary Information </span> : Any additional
                    information you choose to provide{" "}
                  </p>
                  <p>
                    <span>Technical Data :</span> Your computer IP address{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cd-project-wrapper mt-4">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="cd-project-info-box">
                  <h4 className="cd-case-title">How we use your information</h4>
                  <p>
                    The information collected will be used for purposes stated
                    at the point of collection or as evident in the context,
                    such as:
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="cd-client-details">
                  <p>
                    <span>Communicating with you</span>
                  </p>
                  <p>
                    <span>Providing information about our business</span>
                  </p>
                  <p>
                    <span>Managing and responding to your queries</span>
                  </p>
                  <p>
                    <span>Sending requested information</span>
                  </p>
                  <p>
                    <span>Improving our services and products</span>
                  </p>
                  <p>
                    <span>Conducting market research</span>
                  </p>
                  <p>
                    We do not sell or release personal data to third parties for
                    consumer marketing or host mailings on their behalf.
                    Additionally, YSL Civils Ltd will not engage in automated
                    decision-making processes involving your data.
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
