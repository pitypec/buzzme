import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: #01011e;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterColumn1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(auto, auto);
  grid-gap: 10px;
  align-items: center;
  color: whitesmoke;
  margin-bottom: 20px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
`;

export const FooterNavH1 = styled.h1`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const FooterNavMenuWrap = styled.div`
  margin: 20px 30px;
`;

export const FooterNavMenu = styled.ul`
  list-style-type: none;
`;

export const FooterNavItem = styled.li`
  padding: 5px 0px;
`;

export const FooterNavLinks = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1rem;
`;

export const FooterColumn2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(2, auto);
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const FooterSocialH1 = styled.div`
  color: whitesmoke;
  text-align: center;
`;
export const FooterCopyright = styled.p`
  color: whitesmoke;
`;

export const FooterSocialNavWrapper = styled.div`
  justify-content: center;
`;

export const FooterSocialMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
export const FooterSocialItem = styled.li`
  padding: 5px 10px;
`;

export const FooterSocialLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
