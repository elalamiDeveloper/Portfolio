import { Link } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../../utils/constants/colors';

const NavBarContainer = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .nav-bar__List {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    .nav-bar__list__item {
      font-size: 1.8rem;
      font-weight: 500;

      &:hover {
        color: ${COLORS.primaryColor};
      }
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <ul className="nav-bar__List">
        <li className="nav-bar__list__item">
          <Link to="/#home">Home</Link>
        </li>

        <li className="nav-bar__list__item">
          <Link to="/#about">About</Link>
        </li>

        <li className="nav-bar__list__item">
          <Link to="/#project">Project</Link>
        </li>

        <li className="nav-bar__list__item">
          <Link to="/#experience">Experience</Link>
        </li>

        <li className="nav-bar__list__item">
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
