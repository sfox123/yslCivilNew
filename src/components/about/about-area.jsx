import React from "react";
import useModal from "../../hooks/use-modal";
import VideoModal from "../common/modals/modal-video";
import ab1 from "../anime/Tower Crane.json";
import ab2 from "../anime/img/breadcrum/Excavator.json";
import ab3 from "../anime/anime/Helmet.json";

import LottieAnimation from "../lottie/LottieAnimation";

const contents = {
  title: "Open minded and ready to embrace new opportunities",
  video_title: "",
  video_id: "8D6b3McyhhU",
  right_text_1:
    "Our team of professional support staff and management with wide experience in the industry, providing both the technical and practical capabilities to carry out a wide variety of works",
  right_text_2:
    "We are extremely flexible and aim to meet the requirements of our clients and adapt to their expectations. We strive to deliver solutions, quality services, on time, on budget and most importantly… safely.",
  client_icon: "/assets/img/about/testi-7.png",
  client_name: "RCF-SPECIALISTS",
  client_title: "REINFORCED CONCRETE FRAMES SPECIALISTS",
  desc: "YSL CIVILS have vast experience constructing reinforced concrete frames for residential and commercial projects. Cast to any shape you require and for any number of required storeys, we are able to help.",
  about_img: "/assets/img/breadcrum/ab-1.2.jpg",
  client2_icon: "/assets/img/about/testi-18.png",
  client2_name: "YSL CIVILS GROUNDWORKS",
  client2_title: "",
  desc2:
    "Underpinning - Retaining foundations & walls - Sub DPC - Block & beam works - Concrete slab & oversite works - Utility service trenching - Site clearance work - Underground drainage installations& repairs - Earth moving - Roads, drives and car park .",
  about2_img: "/assets/img/breadcrum/ab-1.2.jpg",
  client3_icon: "/assets/img/about/testi-3.png",
  client3_name: "CIVIL ENGINEERING & UTILITIES",
  client3_title: "",
  decs3:
    "YSL Civils offers extensive experience in civil engineering and utilities projects. From infrastructure development to utility installations, we deliver comprehensive solutions tailored to meet your specific needs. Our team ensures quality and efficiency in every project, from planning to execution",
  about3_img: "",
};
const {
  client3_icon,
  client3_name,
  client3_title,
  decs3,
  client_icon,
  client_name,
  client_title,
  desc,
  right_text_1,
  right_text_2,
  title,
  video_id,
  client2_icon,
  client2_name,
  client2_title,
  desc2,
} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [animationSize, setAnimationSize] = React.useState(600);

  React.useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setAnimationSize(300);
      } else if (window.innerWidth < 992) {
        setAnimationSize(400);
      } else {
        setAnimationSize(600);
      }
    };

    // Update the size when the component mounts
    updateSize();

    // Update the size whenever the window is resized
    window.addEventListener("resize", updateSize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div
        className="ac-about-content-area pt-130"
        style={{ background: "white" }}
      >
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="ac-about-left">
                  <h3 className="ac-ab-title">
                    <a href="#">{title}</a>
                  </h3>
                  {/* <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div> */}
                </div>
              </div>
              <div
                className="col-xl- col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name">
                      <a href="#">{client_name}</a>
                    </h4>
                    <span>{client_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p>
                      {" "}
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <div className="ac-testimonial-right">
                {/* <img src={about_img} alt="" /> */}
                <LottieAnimation
                  animationData={ab1}
                  height={animationSize}
                  width={animationSize}
                />
              </div>
            </div>
          </div>
          {/* client_2 */}
          <div className="row ac-testimonial-space">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src={client2_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name">
                      <a href="#">{client2_name}</a>
                    </h4>
                    <span>{client2_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p>
                      {" "}
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                      {desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <div className="ac-testimonial-right">
                {/* <img src={about2_img} alt="" /> */}
                <LottieAnimation
                  animationData={ab2}
                  height={animationSize}
                  width={animationSize}
                />
              </div>
            </div>
          </div>
          {/*client_3*/}
          <div className="row ac-testimonial-space">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img
                      width={"150"}
                      height={"100"}
                      src={client3_icon}
                      alt=""
                    />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name">
                      <a href="#">{client3_name}</a>
                    </h4>
                    <span>{client3_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p>
                      {" "}
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                      {decs3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <div className="ac-testimonial-right">
                {/* <img src={about2_img} alt="" /> */}
                <LottieAnimation
                  animationData={ab3}
                  height={animationSize}
                  width={animationSize}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;
