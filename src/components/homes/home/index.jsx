import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import CreativeArea from "./creative-area";
import HeroArea from "./hero-area";
import NewsLetter from "./news-letter";
import ServicesArea from "./services-area";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <CreativeArea />
      <ServicesArea />
      <NewsLetter />
      <Footer />
    </Wrapper>
  );
};

export default Home;
