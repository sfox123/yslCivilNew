import React from 'react';

const IntroduceArea = () => {
  return (
    <div className="cd-introduce-area pb-80 " style={{background:'white'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cd-info-box">
              <h3 className="tp-title-sm pb-30">Legal Basis for Processing</h3>
              <p className="mb-25">We process your personal information primarily to facilitate your interest in our business, which is considered a legitimate interest. Where consent is necessary, we will obtain it at the point of data collection.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cd-info-box">
              <h3 className="tp-title-sm pb-30">Information Storage and Retention</h3>
              <p className="mb-25">We implement security measures to protect your personal information and ensure its confidentiality. These measures are regularly reviewed for their effectiveness. However, we cannot guarantee the security of data transmitted via third-party applications (e.g., internet browsers).Your data may be transferred and processed outside the UK. In such cases, we ensure appropriate safeguards are in place to protect your information. We retain your personal information as long as we have a relationship with you. After this relationship ends, retention periods are determined based on our legal, regulatory, and professional obligations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceArea;