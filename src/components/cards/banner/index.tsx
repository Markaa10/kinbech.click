import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Title5, Body1 } from "components/texts";
import { ManandlaptopIllustration } from "assets/illustrations";

const Container = styled.div`
  ${tw`
  flex items-center
        bg-primary
        p-5
        w-1/2
        ml-11 h-52
    `}
  border-radius: 20px;
  position: relative;
`;

const Info = styled.article`
  ${tw`w-3/5`}
`;

const Illustration = styled.img`
  position: absolute;
  right: 0;
`;

const BannerCard = () => {
  return (
    <Container>
      <Info>
        <Title5 color="#fff">Hi Sagar, Welcome Back!</Title5>
        <Body1 color="#fff" marginTop={19}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam adipiscing elit, sed do eiusmod.
        </Body1>
      </Info>
      <Illustration src={ManandlaptopIllustration} alt="illustration" />
    </Container>
  );
};

export default BannerCard;
