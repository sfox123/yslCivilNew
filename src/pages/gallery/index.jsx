"use client";
import { ParallaxScroll } from "../../components/parallex";
import SEO from "../../components/seo";
import { HeaderSix, Wrapper } from "../../layout";

import img1 from "../../../public/assets/img/project/1.jpeg";
import img2 from "../../../public/assets/img/project/2.jpg";
import img3 from "../../../public/assets/img/project/3.jpg";
import img4 from "../../../public/assets/img/project/4.jpg";
import img5 from "../../../public/assets/img/project/5.jpg";
import img6 from "../../../public/assets/img/project/6.jpg";
import img7 from "../../../public/assets/img/project/7.jpeg";
import img8 from "../../../public/assets/img/project/8.jpg";
import img9 from "../../../public/assets/img/project/9.jpg";
import img10 from "../../../public/assets/img/project/10.jpg";
import img11 from "../../../public/assets/img/project/11.JPG";
import img12 from "../../../public/assets/img/project/12.JPG";
import img13 from "../../../public/assets/img/project/13.JPG";
import img14 from "../../../public/assets/img/project/14.jpg";
import img15 from "../../../public/assets/img/project/15.jpg";
import img16 from "../../../public/assets/img/project/16.jpg";
import img17 from "../../../public/assets/img/project/17.jpg";
import img18 from "../../../public/assets/img/project/18.jpg";
import img19 from "../../../public/assets/img/project/19.jpg";
import img20 from "../../../public/assets/img/project/20.jpg";

export default function index() {
  const imageLinks = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <Wrapper>
      <SEO pageTitle={"Gallery"} />
      <HeaderSix />
      <ParallaxScroll images={imageLinks} />
    </Wrapper>
  );
}
