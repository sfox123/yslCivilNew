 import React from 'react';

const ProjectInfoAreaTwo = ({item}) => {
  return (
    <>
    <div className="cd-project-info-area pb-100" style={{background:"white"}}>
      <div className="container">
        <div className="cd-project-wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="cd-project-info-box">
                <h4 className="cd-case-title">Disclosure of Your Information</h4>
                <p>Your personal data may be disclosed to: </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="cd-client-details">
                    <p><span>Group Members :</span> Who need the information to assist with your enquiry.</p>
                    <p><span>Third Parties :</span> Business partners, suppliers, and sub-contractors engaged by us, under strict confidentiality and security agreements.</p>
                    <p><span>Acquirers :</span> In the event of a business acquisition, your personal data may be transferred as part of the assets.</p>
                    <p><span>Regulatory and Legal Entities :</span> Such as law enforcement, fraud prevention agencies, and professional advisers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectInfoAreaTwo;