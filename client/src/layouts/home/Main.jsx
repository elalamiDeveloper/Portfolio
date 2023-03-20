import styled from 'styled-components';

import { Hero, AboutMe, Projects, ContactMe } from '../../layouts/main';

const MainContainer = styled.main``;

const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </MainContainer>
  );
};

export default Main;
