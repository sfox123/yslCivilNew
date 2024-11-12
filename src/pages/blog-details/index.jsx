import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import BlogDetailsMain from '../../components/blog-details';
import { blog_data } from '../../data';
import PortfolioDetails from '../../components/portfolios/portfolio-details';

const blog = blog_data.filter(blog => blog.blog_page)[0];

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <PortfolioDetails blog={blog} />
    </Wrapper>
  );
};

export default index;