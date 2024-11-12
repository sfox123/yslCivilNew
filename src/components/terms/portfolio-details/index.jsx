import React, { useEffect } from 'react';
import { Footer, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Cta from '../../common/cta/cta';
import CaseImageArea from './case-image-area';
import CaseImageAreaTwo from './case-image-area-2';
import IntroduceTwo from './introduce-2';
import IntroduceArea from './introduce-area';
import ProjectInfoArea from './project-info-area';
import ProjectInfoAreaTwo from './project-info-area-two';

const PortfolioDetails = ({case_item}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <div style={{background:"white"}}>
      <HeaderSix />
      <Breadcrumb title={case_item?.title?case_item?.title:'Case Details'} />
      {/* <CaseImageArea case_item={case_item}/> */}
      <ProjectInfoArea item={case_item} />
      <IntroduceArea/>
      {/* <ProjectInfoAreaTwo item={case_item} /> */}
      {/* <CaseImageAreaTwo/> */}
      <IntroduceTwo/>
      <Cta/>
      <Footer />
      </div>
    </Wrapper>
  );
};

export default PortfolioDetails;