import styled from 'styled-components';

const TechListItemContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 1rem;
`;

const TechListItem = ({ name, label, url }) => {
  return (
    <TechListItemContainer>
      <img src={url} alt={label} />
    </TechListItemContainer>
  );
};

export default TechListItem;
