import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Flex from "../../flex";
import { jeepImage } from "../../../assets/images";
import { Body1, Body4, Body5, Title5 } from "components/texts";
import { colors } from "theme";
import { UserImage } from "components/other";
import { user } from "assets/images";
import { ArrowCurvedDownrightIcon, LaptopAddIcon, NavIcon } from "meistericons";

const Container = styled(Flex)`
  ${tw`pt-3 px-5 pb-6 flex-col gap-6`}
`;

const Image = styled.img`
  width: 109px;
  height: 98px;

  object-fit: cover;
`;

function CommentCard() {
  return (
    <Container>
      {/* Post */}
      <Flex alignItems="flex-end" width="100%" justifyContent="space-between">
        <Flex gap={1.8125}>
          <Image src={jeepImage} alt="jeep" />
          <Flex direction="column" gap={0.75}>
            <Title5 lineHeight={28} fontWeight="400" color={colors.text}>
              Huwawei V12 pro
            </Title5>
            <Body4 lineHeight={21} fontWeight="400" color="#4CC77D">
              Active
            </Body4>
            <Title5 lineHeight={28} fontWeight="700" color={colors.text}>
              Rs. 12,000
            </Title5>
          </Flex>
        </Flex>

        <Flex gap={2.3125}>
          <Body4>Posted on: 2021/02/21</Body4>
          <Body4>Expiry on: 2021/04/1</Body4>
        </Flex>
      </Flex>

      {/* Comment */}

      <Flex
        direction="column"
        width="100%"
        style={{
          borderBottom: "1px solid #5B5B5B",
          paddingBottom: "1.1875rem",
        }}
      >
        <Flex gap={2.75}>
          <UserImage src={user} alt="user" />

          <Flex direction="column">
            <Flex alignItems="center" gap={1}>
              <Body1 lineHeight={28} color={colors.text} fontWeight="700">
                Username -
              </Body1>
              <Body4 lineHeight={21} color={colors.text} fontWeight="700">
                1 minute ago
              </Body4>
            </Flex>
            <Body4
              marginTop={1.75}
              color={colors.text}
              lineHeight={22}
              fontWeight="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Body4>
          </Flex>
        </Flex>
      </Flex>

      {/* Reply */}

      <Flex direction="column" width="100%" style={{ marginLeft: "6.2%" }}>
        <Flex gap={2.06} alignItems="center">
          <LaptopAddIcon />
          <Body4 color={colors.text}>Replied</Body4>
        </Flex>

        <Flex gap={1.875} alignItems="center" style={{ marginLeft: "5%" }}>
          <ArrowCurvedDownrightIcon />

          <UserImage src={user} alt="user" style={{ width: 45 }} />

          <Body1 fontWeight="700" color={colors.text} lineHeight={29}>
            You -
          </Body1>
          <Body4 fontWeight="700" color={colors.text} lineHeight={21}>
            1 second ago
          </Body4>
        </Flex>
        <Body4
          fontWeight="700"
          color={colors.text}
          lineHeight={21}
          marginTop={0.93}
          style={{ marginLeft: "13.4%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Body4>
      </Flex>
    </Container>
  );
}

export default CommentCard;
