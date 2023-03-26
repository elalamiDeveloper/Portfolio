import { Link } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';

import { BsLinkedin, BsGithub } from '../../utils/constants/icons';
import { LINKEDIN_URL, GITHUB_URL } from '../../utils/constants/urls';

const SocialLinksContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 1.5rem;

  .social-links__item {
    &:hover {
      color: ${COLORS.primaryColor};
      transform: scale(1.2);
    }
  }
`;

const SocialLinks = ({ className }) => {
  return (
    <SocialLinksContainer className={className}>
      <Link to={LINKEDIN_URL} className="social-links__item">
        <BsLinkedin />
      </Link>

      <Link to={GITHUB_URL} className="social-links__item">
        <BsGithub />
      </Link>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
