import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';

const PrimaryTitleContainer = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.primaryColor};
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const PrimaryTitle = ({ children }) => {
  return <PrimaryTitleContainer>{children}</PrimaryTitleContainer>;
};

export default PrimaryTitle;
