import styled from 'styled-components';

import TECKS_LIST from '../../utils/constants/tecksList';

import TechListItem from './TechListItem';

const TechListContainer = styled.ul`
  flex: 1;
  display: flex;
  gap: 2.5rem;
`;

const TechList = () => {
  const teckListContent = TECKS_LIST.map((teckItem, i) => (
    <TechListItem key={i} {...teckItem} />
  ));

  return <TechListContainer>{teckListContent}</TechListContainer>;
};

export default TechList;
