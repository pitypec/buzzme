import React, { useState } from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrap,
  HeroContent,
  HeroH1,
  HeroP,
  HeroSectionWrapper,
  VideoBg
} from './HeroSectionElements';
import video from '../../videos/video.mp4';
import { Button } from '../ButttonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroSectionWrapper>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Premium followers</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe
          quae officia.
        </HeroP>
        <HeroBtnWrap>
          <Button
            primary={true}
            dark={true}
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrap>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
