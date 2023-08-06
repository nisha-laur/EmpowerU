import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/portfolio.jpg";
import celebrationIconImageSrc from "images/learning.jpg";
import shopIconImageSrc from "images/projects.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Unleash Your Creativity with <HighlightedText>EmpowerU</HighlightedText></>}
        description=" Empower yourself with cutting-edge technology skills. Our comprehensive range of technology courses offers hands-on learning experiences to help you thrive in the digital world. From web development to app creation, immerse yourself in the latest tech trends and take the first step towards an exciting and rewarding career in technology."
        imageSrc="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1691226263~exp=1691226863~hmac=5742561332f8ea8cdcd6c5e28d6379415e27e2e55b4ce27594c0f5a7322cd812"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Enroll Now"
        watchVideoButtonText="Meet The Tutors"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2017</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Choose from a diverse selection of technology courses designed to meet industry demands and equip you with the skills employers seek.
            <br />
            <br />
            Whether you're a beginner or an experienced professional, there's a course to suit your level of expertise. Enroll now and unlock your potential in the ever-evolving world of technology.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=740&t=st=1691226452~exp=1691227052~hmac=f8fda5375c143d860c244d0ddc2c44c371291362756c4d77f1967fd121ca85a7"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>courses</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Real-World Projects",
            description: " opportunity to work on practical, real-world projects that apply learned skills to relevant scenarios",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Portfolio Generator",
            description: "the automatic portfolio generation feature that helps learners create professional portfolios",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Collaborative Learning",
            description: "collaborative learning platforms where learners can connect, form study groups, and collaborate on projects",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Enrollments",
            value: "94000+",
          },
          {
            key: "Registered Students",
            value: "11000+"
          },
          {
            key: "Tutors",
            value: "1500+"
          }
        ]}
        primaryButtonText="Enroll Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://img.freepik.com/free-vector/flat-people-asking-questions_23-2148929673.jpg?w=740&t=st=1691227769~exp=1691228369~hmac=64f52fe935e18f9bd0f90869cae38b96b841c47769bb32c9ad1dd26145c531ce"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Our Students <HighlightedText>Love Us.</HighlightedText></>}
      />
      <DownloadApp
        text={<>People around you are selling their products using the <HighlightedTextInverse>EmpowerU App.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
