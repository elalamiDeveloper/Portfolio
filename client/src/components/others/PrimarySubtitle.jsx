import styled from 'styled-components';

const PrimarySubtitleContainer = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const PrimarySubtitle = ({ children }) => {
  return <PrimarySubtitleContainer>{children}</PrimarySubtitleContainer>;
};

export default PrimarySubtitle;
