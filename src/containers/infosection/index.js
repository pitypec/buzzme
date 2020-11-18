import React from 'react';
import {
  TextWrapper,
  Heading,
  BtnWrap,
  TopLine,
  Img,
  ImgWrap,
  InfoContainer,
  Subtitle,
  Column1,
  Column2,
  InfoRow,
  InfoWrapper
} from './InfoSectionElement';

import { Button } from '../ButttonElement';

const InfoSection = ({
  id,
  topLine,
  headline,
  subtitle,
  alt,
  lightBg,
  lightText,
  imgStart,
  darkText,
  buttonLabel,
  img,
  primary,
  dark
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    to='home'
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
