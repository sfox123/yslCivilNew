import React, { useEffect } from "react";
import { Footer, HeaderSix, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutContact from "./about-contact";
import AboutMeArea from "./about-me-area";
import ExperienceArea from "./experience-area";

const AboutMe = ({ team, pageTitle }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb
        wall={team.wall || "/assets/img/breadcrum/ab-1.2.png"}
        title={pageTitle}
      />
      <AboutMeArea team={team} />
      <Footer />
    </Wrapper>
  );
};

export default AboutMe;
