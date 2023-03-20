import { Link } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';
import { BsLinkedin, BsGithub } from '../../utils/constants/icons';
import { LINKEDIN_URL, GITHUB_URL } from '../../utils/constants/urls';

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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    font-size: 2rem;

    .footer-icons__item {
      &:hover {
        color: ${COLORS.primaryColor};
        transform: scale(1.2);
      }
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <p className="footer-text">Copyright © {year}. All rights are reserved</p>
      <div className="footer-icons">
        <Link to={LINKEDIN_URL} className="footer-icons__item">
          <BsLinkedin />
        </Link>

        <Link to={GITHUB_URL} className="footer-icons__item">
          <BsGithub />
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
