import styled from 'styled-components';

import { NavBar } from '../../components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2.5rem 5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .logo   {
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <span className="logo">El Alami.dev</span>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
