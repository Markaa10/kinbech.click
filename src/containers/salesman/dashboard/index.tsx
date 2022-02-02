import React from "react";
import BannerCard from "components/cards/banner";
import IconCard from "components/cards/Icon";
import InfoCard from "components/cards/info";
import styled from "styled-components";
import tw from "twin.macro";
import {
  EnvelopeIcon,
  LockIcon,
  PiechartIcon,
  PuzzlePieceIcon,
} from "assets/icons";
import { Body1, Body4, Title5 } from "components/texts";
import { colors } from "theme";
import Checkbox from "components/input/checkbox";
import Flex from "components/flex";

const Container = styled.div`
  ${tw`w-auto mx-11`}
`;

const TopContainer = styled.section`
  ${tw`flex justify-between my-11`}
`;

const BottomContainer = styled(Flex)`
  ${tw`justify-between mb-12`};
  gap: 2.5rem;
`;

const RightCards = styled.section`
  ${tw`mr-11`}
`;

const InfoContainer = styled(Flex)`
  ${tw`items-center justify-between mt-10 w-full`};
  border-bottom: 1px solid #9099d3;
`;

const MessageContainer = styled.div`
  ${tw`mt-5`};
  border-bottom: 1px solid #9099d3;
  padding-bottom: 6px;
`;

function SalesmanDashboardContainer() {
  const info = [
    { id: 1, title: "Buyer’s Speak New Messages", status: 0 },
    { id: 2, title: "Number of Ads", status: 0 },
    { id: 3, title: "People who have contacted you", status: 0 },
    { id: 4, title: "Number of Ads sold", status: 0 },
    { id: 5, title: "Number of Ad views", status: 0 },
  ];

  const messages = [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Container>
      <TopContainer>
        <BannerCard />

        <RightCards>
          <IconCard
            marginBottom={31}
            icon={<PuzzlePieceIcon />}
            title="Ad Visits"
            body="200+"
          />
          <IconCard
            background="#E78057"
            iconRight
            icon={<LockIcon />}
            title="Privacy Settings"
          />
        </RightCards>
      </TopContainer>
      <BottomContainer>
        <InfoCard icon={<PiechartIcon />} title="Account Status">
          {info.map((item: any) => (
            <InfoContainer key={item.id}>
              <Body4 lineHeight={21} color="#373737">
                {item.title}
              </Body4>
              <Title5 color={colors.primary}>{item.status}</Title5>
            </InfoContainer>
          ))}
        </InfoCard>
        <InfoCard icon={<EnvelopeIcon />} title="Messages" action="View All">
          {messages.map((item) => (
            <MessageContainer key={item.id}>
              <Checkbox label={item.message} />
            </MessageContainer>
          ))}
        </InfoCard>
      </BottomContainer>
    </Container>
  );
}

export default SalesmanDashboardContainer;
