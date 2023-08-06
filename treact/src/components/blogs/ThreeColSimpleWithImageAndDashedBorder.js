import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Verified Learners",
  heading = <>Meet Our  <span tw="text-primary-500">Verified Learners</span></>,
  description = "Discover a Diverse Pool of Skilled Professionals Ready to Elevate Your Projects.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1691273437~exp=1691274037~hmac=76c9248336b54c4d9890b36bb6d265c5c6bbe414b23665a651f4c38cad54ec4f",
      author: "Emily Johnson",
      category: "MERN Stack",
      title: "Full Stack Web Developer",
      description: " A versatile developer with a passion for building robust and user-friendly web applications. Successfully delivered multiple projects, focusing on efficient code and seamless user experiences.",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://img.freepik.com/premium-psd/woman-cheerful-studio-portrait-concept_53876-22422.jpg?w=740",
      author: "Alex Chen",
      category: " Flutter, Firebase, Dart",
      title: "Mobile App Developer",
      description: " An innovative mobile app developer, adept at crafting cross-platform applications that combine functionality with stunning designs. Proven track record in delivering engaging user experiences.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1691273597~exp=1691274197~hmac=ca328d63d7c01f07506f028b35f4ce478ad37de62948d152a112aad9710222d7",
      author: "Samantha Lee",
      category: " Python, Pandas, SQL",
      title: "Data Analyst",
      description: "A data wizard with a strong analytical mindset, capable of uncovering valuable insights from complex datasets. Skillful in translating data into actionable strategies.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?w=740&t=st=1691275775~exp=1691276375~hmac=d0e746ce1c76d2e235fa1effb4ec65445702d6244f539d6f552789c9e50d5f81",
      author: "Michael Smith",
      category: " UI/UX Design, Figma",
      title: "Graphic Designer",
      description: " A creative designer with a passion for crafting visually appealing and intuitive user interfaces. Proficient in wireframing, prototyping, and ensuring exceptional user experiences.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/close-up-shot-friendly-looking-elegant-young-african-american-female-with-straight-dark-straight-hair-having-happy-joyful-look-posing_344912-1016.jpg?w=740&t=st=1691273719~exp=1691274319~hmac=794c801383d630d6e01bd13296a2abdeba1b6a694b5514653727ebf3b11decdc",
      author: "Sophia Martinez",
      category: " ML/AI,TensorFlow, NLP",
      title: "Data Analyst",
      description: "An AI enthusiast with expertise in developing intelligent systems and natural language processing. Strong problem-solving abilities and a drive for innovation.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img.freepik.com/premium-photo/brunette-young-woman-with-healthy-beauty-skin-smiles-gently-shows-white-perfect-teeth_95891-3100.jpg",
      author: "Daniel Brown",
      category: " Cybersecurity & Ethical Hacking",
      title: "Cybersecurity Analyst",
      description: "A cybersecurity expert, adept at safeguarding systems from potential threats and vulnerabilities. Committed to protecting digital assets and maintaining data integrity.",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Hire Them!</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
