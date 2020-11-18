import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  FooterColumn1,
  FooterColumn2,
  FooterContainer,
  FooterNavH1,
  FooterNavMenu,
  FooterNavItem,
  FooterWrapper,
  FooterNavMenuWrap,
  FooterNavLinks,
  FooterSocialItem,
  FooterSocialH1,
  FooterSocialNavWrapper,
  FooterSocialMenu,
  FooterCopyright,
  FooterSocialLinks
} from './FooterElement';

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <FooterContainer>
        <FooterWrapper>
          <FooterColumn1>
            <FooterNavMenuWrap>
              <FooterNavH1>about us</FooterNavH1>
              <FooterNavMenu>
                <FooterNavItem>
                  <FooterNavLinks>how it works</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>testimonials</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>carrers</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>investors</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>terms of service</FooterNavLinks>
                </FooterNavItem>
              </FooterNavMenu>
            </FooterNavMenuWrap>
            <FooterNavMenuWrap>
              <FooterNavH1>contact us</FooterNavH1>
              <FooterNavMenu>
                <FooterNavItem>
                  <FooterNavLinks>contact</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>support</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>destinations</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>sponsorship</FooterNavLinks>
                </FooterNavItem>
              </FooterNavMenu>
            </FooterNavMenuWrap>
            <FooterNavMenuWrap>
              <FooterNavH1>videos</FooterNavH1>
              <FooterNavMenu>
                <FooterNavItem>
                  <FooterNavLinks>submit video</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>ambassador</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>agency</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>influencer</FooterNavLinks>
                </FooterNavItem>
              </FooterNavMenu>
            </FooterNavMenuWrap>
            <FooterNavMenuWrap>
              <FooterNavH1>social media</FooterNavH1>
              <FooterNavMenu>
                <FooterNavItem>
                  <FooterNavLinks>instagram</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>youtube</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>facebook</FooterNavLinks>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLinks>twitter</FooterNavLinks>
                </FooterNavItem>
              </FooterNavMenu>
            </FooterNavMenuWrap>
          </FooterColumn1>
          <FooterColumn2>
            <FooterSocialH1>Buzzme</FooterSocialH1>
            <FooterCopyright>&copy; 2020</FooterCopyright>
            <FooterSocialNavWrapper>
              <FooterSocialMenu>
                <FooterSocialItem>
                  <FooterSocialLinks>
                    <FaFacebook size={25} />
                  </FooterSocialLinks>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLinks>
                    <FaTwitterSquare size={25} />
                  </FooterSocialLinks>
                </FooterSocialItem>
                <FooterSocialItem>
                  <FooterSocialLinks>
                    <FaYoutube size={25} />
                  </FooterSocialLinks>
                </FooterSocialItem>
              </FooterSocialMenu>
            </FooterSocialNavWrapper>
          </FooterColumn2>
        </FooterWrapper>
      </FooterContainer>
    </IconContext.Provider>
  );
};

export default Footer;
