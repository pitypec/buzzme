import React from 'react';

import icon1 from '../../images/svg-3.svg';
import icon2 from '../../images/svg-4.svg';
import icon3 from '../../images/svg-5.svg';

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Chat Exclusively</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            aperiam recusandae natus doloremque non ab labore ulla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>social interaction</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            aperiam recusandae natus doloremque non ab labore ulla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Chat Exclusively</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            aperiam recusandae natus doloremque non ab labore ulla
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
