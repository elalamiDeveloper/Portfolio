import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';
import { aboutMeImgURL } from '../../assets/images';

import { PrimaryTitle, PrimarySubtitle } from '../../components';

const AboutMeContainer = styled.section`
  background: ${COLORS.greyColor1};

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    .about-me_img {
      flex: 50;

      border-radius: 4rem;
      overflow: hidden;
    }

    .about-me__content {
      flex: 50;

      .about-me__text {
        font-size: 1.6rem;
        p {
          line-height: 1.4;
          color: ${COLORS.greyColor4};
        }
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer className="padding-section">
      <div className="container">
        <div className="about-me_img">
          <img src={aboutMeImgURL} alt="pc with programmer code" />
        </div>

        <div className="about-me__content">
          <PrimaryTitle>about me</PrimaryTitle>
          <PrimarySubtitle>
            A dedicated Full-stack Developer based in Lyon, France 📍
          </PrimarySubtitle>

          <div className="about-me__text">
            <p>
              I am a full-stack developer with expertise in JavaScript, React,
              React Native, Node.js, and some Python.
            </p>
            <p>
              With experience in Linux and other tech stacks, I am constantly
              expanding my knowledge and skills to keep up with the latest
              trends in the industry.
            </p>
            <p>
              I enjoy building complex and interactive applications that provide
              practical solutions to real-world problems. My passion for coding
              and problem-solving drives me to continuously learn and explore
              new technologies. In addition to my professional experience, I
              have also worked on various personal projects, which demonstrate
              my versatility and creativity as a developer.
            </p>
            <p>
              I am always eager to take on new challenges and collaborate with
              others to create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
