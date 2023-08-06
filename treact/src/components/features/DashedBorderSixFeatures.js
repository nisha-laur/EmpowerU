import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Personalized Talent Search",
      description: "Our personalized talent search service is tailored to meet your specific hiring needs. Tell us the skills and expertise you're looking for in candidates, and our team will connect you with our pool of verified learners who match your criteria. Save time and effort by tapping into a curated selection of skilled professionals ready to contribute to your projects and team."
    },
    { imageSrc: SupportIconImage, title: "Skills Showcase", description: " Discover a showcase of verified learners' profiles, complete with their skills, projects, and accomplishments. Our Skills Showcase allows you to explore the diverse talents of our graduates in various technical domains. Evaluate their capabilities, review their work, and make informed hiring decisions based on real-world achievements." },
    { imageSrc: CustomizeIconImage, title: "Credibility Through Verification" , description: " At EmpowerU, we believe in credibility and trust. Our rigorous verification process ensures that the skills and expertise showcased by our learners are authentic and reliable. We review projects, conduct assessments, and evaluate mentor recommendations to provide you with a pool of verified professionals you can rely on."  },
    { imageSrc: ReliableIconImage, title: "Access to Projects and Portfolios" , description: "Get a firsthand look at verified learners' projects and portfolios to assess their abilities and creativity. Our platform grants you access to their real-world projects, giving you valuable insights into their problem-solving skills and how they apply their knowledge to practical scenarios. "  },
    { imageSrc: FastIconImage, title: "Seamless Communication and Connection" , description: "Communicate directly with verified learners through our platform. We facilitate seamless communication to help you connect with potential candidates effortlessly. Reach out, discuss opportunities, and find the perfect fit for your team. "  },
    { imageSrc: SimpleIconImage, title: "Post Job Opportunities", description: "Have a job opportunity you want to share? Post it on our platform to attract verified learners seeking employment. Our platform acts as a bridge between employers and job seekers, facilitating a streamlined application process. "  }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
