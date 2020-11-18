import styled from 'styled-components';
import { Link } from 'react-scroll';

import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroSectionWrapper = styled.div`
  background: #01011e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #4b00ff;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  font-size: 48px;
  text-transform: capitalize;
  text-align: center;
  color: #4b00ff;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  font-size: 32px;
  margin-top: 24px;
  max-width: 600px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const HeroBtn = styled(Link)`
//   padding: 14px 48px;
//   text-decoration: none;
//   outline: none;
//   text-transform: capitalize;
//   color: #fff;
//   background: #4b00ff;
//   border-radius: 50px;

//   &:hover {
//     background: #432190;
//     transition: all 0.3s ease-in-out;
//   }
// `;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
