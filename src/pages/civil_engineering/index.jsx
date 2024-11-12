import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import AboutMeMain from '../../components/about-me';
import { team_data } from '../../data';

const team = team_data[12]

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Civil Engineering & Utilities'} />
      <AboutMeMain pageTitle={'Civil Engineering & Utilities'} team={team} />
    </Wrapper>
  );
};

export default index;