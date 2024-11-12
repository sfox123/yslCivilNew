import React, { useEffect } from "react";
import { Footer, HeaderSix, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import CtaTwo from "../common/cta/cta-2";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServicesArea from "./services-area";
import TeamArea from "./team-area";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb
        wall={"/assets/img/breadcrum/ab-1.6.png"}
        title={"About us"}
      />
      <AboutArea />
      {/* <ServicesArea/>
      <FeatureArea/>
      <TeamArea/>
      <CtaTwo/> */}
      <Footer />
    </Wrapper>
  );
};

export default About;
