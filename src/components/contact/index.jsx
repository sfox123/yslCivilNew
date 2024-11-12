import React, { useEffect } from "react";
import { Footer, HeaderSix, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ContactArea from "./contact-area";

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb wall={"assets/img/breadcrum/ab-1.7.png"} title={"Contact"} />
      <ContactArea />
      <Footer />
    </Wrapper>
  );
};

export default Contact;
