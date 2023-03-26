import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';

import { SocialLinks } from '../../components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  background: ${COLORS.greyColor3};
  color: ${COLORS.greyColor1};
  font-size: 1.6rem;

  .footer-icons {
    flex: 1;
    font-size: 2.2rem;
    justify-content: flex-end;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <p className="footer-text">Copyright © {year}. All rights are reserved</p>

      <SocialLinks className="footer-icons" />
    </FooterContainer>
  );
};

export default Footer;
