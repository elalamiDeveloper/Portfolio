import styled from 'styled-components';

import { hiURL } from '../../assets/emojis';
import { personalImgURL } from '../../assets/images';
import COLORS from '../../utils/constants/colors';

import { TechList } from '../../components/main';
import { SocialLinks } from '../../components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.greyColor2};
  height: calc(100vh - 7.2rem);

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .hero-text {
      display: flex;
      flex-direction: column;

      .hero-text__title {
        font-size: 6rem;
        font-weight: 700;
        margin-bottom: 2.5rem;
      }

      .hero-text__p {
        display: flex;
        gap: 0.5rem;
        color: #767676;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.4;
        align-items: center;

        img {
          width: 50px;
          margin-top: -2rem;
        }
      }

      .hero__links {
        margin: 2rem 0;
        font-size: 2.6rem;
      }
    }

    .img-container {
      width: 30rem;
      height: 30rem;
      overflow: hidden;
      animation: morph 8s ease-in-out infinite;
      border: 0.5rem solid ${COLORS.greyColor3};

      img {
        transform: scale(1.12);
      }
    }
  }

  .teck-container {
    display: flex;
    gap: 5rem;
    justify-content: flex-start;

    .teck-container__title {
      padding-right: 2.5rem;
      font-size: 1.8rem;
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -1rem;
        right: 0;
        height: calc(100% + 2rem);
        width: 0.5rem;
        background: ${COLORS.greyColor3};
      }
    }
  }

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container padding-section">
        <div className="hero-text">
          <h1 className="hero-text__title">Full-Stack Developper</h1>
          <p className="hero-text__p">
            Hi, I'm Idriss El Alami.
            <img src={hiURL} alt="hi-url" />
          </p>
          <p className="hero-text__p">
            A passionate Full-stack Developer based in France, Lyon. 📍
          </p>

          <SocialLinks className="hero__links" />
        </div>

        <div className="img-container">
          <img src={personalImgURL} alt="personal photo" />
        </div>
      </div>
      <div className="teck-container container">
        <h2 className="teck-container__title">Tech Stack</h2>
        <TechList />
      </div>
    </HeroContainer>
  );
};

export default Hero;
