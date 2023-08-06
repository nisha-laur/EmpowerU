import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
     Popular: [
      {
        imageSrc:
          "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1691228057~exp=1691228657~hmac=0870ba5b704ca47a98aa30feebad3bc6a93d77e6e5d7e5e8591f258df0791370",
        title: "Full Stack Web Development",
        content: "Learn the art of building interactive and dynamic websites from scratch. Master front-end and back-end development, along with essential tools and frameworks.",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=740&t=st=1691230783~exp=1691231383~hmac=baf523cf8fb935b553a72bbb0a6c4859ca2cc4741ca64f627474305fca44e662",
        title: "Mobile App Development",
        content: "Dive into the world of mobile app creation. Develop Android and iOS apps using native and cross-platform technologies.",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=740&t=st=1691229315~exp=1691229915~hmac=6604b5147c0d1df435bad95a133b9aa54becaebb36a9baa77807d4f7f442b588",
        title: "UX/UI Design",
        content: "Discover the principles of user experience and interface design. Create visually appealing and user-friendly digital experiences.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/videogames-background-design_1212-625.jpg?w=740&t=st=1691230873~exp=1691231473~hmac=a7bded61d94eb35453bc8d3050af0070d366dee62b2f1502471cf0334ddf0482",
        title: "Game Development",
        content: " Bring your gaming ideas to life. Learn game design, development, and mechanics using popular game engines.",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?w=740&t=st=1691230965~exp=1691231565~hmac=2d208a7d8dae18a0787b6012b910dbdf9028bf4afc32e752d5bd6571214cc67e",
        title: "Data Science & Analytics",
        content: "Uncover insights from data. Master data analysis, visualization, and machine learning algorithms.",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/natural-language-processing-illustration_23-2149221118.jpg?w=740&t=st=1691231055~exp=1691231655~hmac=406ccaae586026dc5f4e3ba4c9f723c28f6e28e0cb012fb8fc11e36e9b608543",
        title: "Artificial Intelligence & Machine Learning",
        content: "Explore the world of AI and ML. Build smart systems and predictive models using Python and TensorFlow.",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/internet-things-typographic-header-idea-smart-wireless-electronics-modern-global-technology-connection-devices-house-appliances-isolated-flat-vector-illustration_613284-908.jpg?w=900&t=st=1691231132~exp=1691231732~hmac=66981bb05d0aefd84a33880ec19d11ebda4f0576a188b94c3fa439490fe67e79",
        title: "Internet of Things (IoT)",
        content: " Connect the physical and digital world. Create IoT applications and learn how to work with IoT devices.",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-vector/cyber-crime-isometric-illustration_1284-25768.jpg?w=740&t=st=1691231206~exp=1691231806~hmac=f1493bd03e5866e2233a74832eee3c1e70a03f29f71c05510fe90aa47f2d47d0",
        title: "Cybersecurity & Ethical Hacking",
        content: "Defend against cyber threats and practice ethical hacking techniques. Learn to secure systems and networks.",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "#"
      }
    ],
    Development : development(),
    DataScience : datascience(),
    Cybersecurity : cybersecurity()
   
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Enroll Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
// This function is for development category
const development = () => {
  const cards = [
    {
      imageSrc:
          "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1691228057~exp=1691228657~hmac=0870ba5b704ca47a98aa30feebad3bc6a93d77e6e5d7e5e8591f258df0791370",
        title: "Full Stack Web Development",
        content: "Learn the art of building interactive and dynamic websites from scratch. Master front-end and back-end development, along with essential tools and frameworks.",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
    },
    {
      imageSrc:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?w=740&t=st=1691230783~exp=1691231383~hmac=baf523cf8fb935b553a72bbb0a6c4859ca2cc4741ca64f627474305fca44e662",
    title: "Mobile App Development",
    content: "Dive into the world of mobile app creation. Develop Android and iOS apps using native and cross-platform technologies.",
    price: "$2.99",
    rating: "4.8",
    reviews: "32",
    url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=740&t=st=1691229315~exp=1691229915~hmac=6604b5147c0d1df435bad95a133b9aa54becaebb36a9baa77807d4f7f442b588",
        title: "UX/UI Design",
        content: "Discover the principles of user experience and interface design. Create visually appealing and user-friendly digital experiences.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/videogames-background-design_1212-625.jpg?w=740&t=st=1691230873~exp=1691231473~hmac=a7bded61d94eb35453bc8d3050af0070d366dee62b2f1502471cf0334ddf0482",
        title: "Game Development",
        content: " Bring your gaming ideas to life. Learn game design, development, and mechanics using popular game engines.",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};

const datascience = () => {
  const cards = [
    {
      imageSrc:
          "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?w=740&t=st=1691230965~exp=1691231565~hmac=2d208a7d8dae18a0787b6012b910dbdf9028bf4afc32e752d5bd6571214cc67e",
        title: "Data Science & Analytics",
        content: "Uncover insights from data. Master data analysis, visualization, and machine learning algorithms.",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
    },
    {
      imageSrc:
      "https://img.freepik.com/free-vector/natural-language-processing-illustration_23-2149221118.jpg?w=740&t=st=1691231055~exp=1691231655~hmac=406ccaae586026dc5f4e3ba4c9f723c28f6e28e0cb012fb8fc11e36e9b608543",
    title: "Artificial Intelligence & Machine Learning",
    content: "Explore the world of AI and ML. Build smart systems and predictive models using Python and TensorFlow.",
    price: "$2.99",
    rating: "4.8",
    reviews: "32",
    url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/internet-things-typographic-header-idea-smart-wireless-electronics-modern-global-technology-connection-devices-house-appliances-isolated-flat-vector-illustration_613284-908.jpg?w=900&t=st=1691231132~exp=1691231732~hmac=66981bb05d0aefd84a33880ec19d11ebda4f0576a188b94c3fa439490fe67e79",
        title: "Internet of Things (IoT)",
        content: "Connect the physical and digital world. Create IoT applications and learn how to work with IoT devices.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/big-data-service-isometric-composition-with-compute-storage-architecture-collecting-managing-real-time-analytics_1284-60660.jpg?w=740&t=st=1691231325~exp=1691231925~hmac=4096dc40dea238c862dda7616e07d16ffef75da4024053aaad7a372dec197c94",
        title: "Big Data & Hadoop",
        content: "Dive into the world of big data. Learn to manage and analyze large datasets using Hadoop and Spark.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};

const cybersecurity = () => {
  const cards = [
    {
      imageSrc:
          "https://img.freepik.com/free-vector/cyber-crime-isometric-illustration_1284-25768.jpg?w=740&t=st=1691231206~exp=1691231806~hmac=f1493bd03e5866e2233a74832eee3c1e70a03f29f71c05510fe90aa47f2d47d0",
        title: "Cybersecurity & Ethical Hacking",
        content: " Defend against cyber threats and practice ethical hacking techniques. Learn to secure systems and networks",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
    },
    {
      imageSrc:
      "https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-small-figures-people-with-computer-screens_1284-30497.jpg?w=740&t=st=1691231376~exp=1691231976~hmac=308f2721db405c428442acdb6809ddbed2ab1172173e7e19cef2d2c13588eb9e",
    title: "Cloud Computing & DevOps",
    content: "Embrace cloud technologies and learn to deploy applications in a cloud environment. Understand DevOps principles for efficient development and deployment.",
    price: "$2.99",
    rating: "4.8",
    reviews: "32",
    url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/web-3-0-technology-isometric-with-blockchain-process-vector-illustration_1284-75508.jpg?w=740&t=st=1691231472~exp=1691232072~hmac=e2d3d33d71aed599cc657e0fb61761ad76d628476e57bc25d3953c1db686b1b4",
        title: "Blockchain Technology",
        content: "Explore the revolutionary world of blockchain. Learn to develop decentralized applications and smart contracts.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    },
    {
      imageSrc:
          "https://img.freepik.com/free-vector/cloud-computing-concept_24908-55304.jpg?w=740&t=st=1691231531~exp=1691232131~hmac=843bbf75e8d508dd7904876ed55932140c62455f8bf89cbcc9ba89270064fcc6",
        title: "Network Security & Administration",
        content: "Master network security protocols and administration. Learn to safeguard networks from potential threats and vulnerabilities.",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
/* This function is only there for demo purposes. It populates placeholder cards */

