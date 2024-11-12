import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import PortfolioDetailsMain from '../../components/portfolios/portfolio-details';
import { portfolio_data } from '../../data';

const case_item = portfolio_data[11]

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy and Policy'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default index;