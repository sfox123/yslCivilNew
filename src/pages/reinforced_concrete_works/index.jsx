import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import AboutMeMain from '../../components/about-me';
import { team_data } from '../../data';

const team = team_data[11]

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Reinforced Concrete Works'} />
      <AboutMeMain pageTitle={'Reinforced Concrete Works'} team={team} />
    </Wrapper>
  );
};

export default index;