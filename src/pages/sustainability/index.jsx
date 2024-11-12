import React from "react";
import SEO from "../../components/seo";
import { productsData } from "../../data";
import { Wrapper } from "../../layout";
import ProductsDetailsMain from "../../components/sustainability";

const product_item = productsData[2];

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Sustainability"} />
      <ProductsDetailsMain product={product_item} />
    </Wrapper>
  );
};

export default index;
