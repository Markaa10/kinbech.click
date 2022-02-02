import React from "react";
import Flex from "components/flex";
import styled from "styled-components";
import tw from "twin.macro";
import { Body1, Body4, Title5 } from "components/texts";
import { colors } from "theme";
import OutlinedInput from "components/input/outlined";
import { jeepImage } from "assets/images";

const Container = styled(Flex)`
  margin: 0 4.17%;
  ${tw`pt-12 px-8 pb-4 my-12  rounded-2xl flex-col items-center`};
  background: #fff;
`;
function MobileverificationContainer() {
  return (
    <Container>
      <Title5 color={colors.text}>Why To Verify My Mobile Phone?</Title5>
      <Body1
        color={colors.text}
        marginTop={2.25}
        textAlign="center"
        marginLeft={3.43}
        marginRight={3.43}
      >
        Mobile verification is required to utilize all features of Kinbech.click
        (including ad posting). Furthermore, a Verified Phone logo is displayed
        in your ad. Other user will know that the you are authentic ad poster
        and will feel confident to call you.
      </Body1>

      <Flex width="100%" justifyContent="space-between" marginTop={7.3125}>
        <Flex direction="column" width="50%">
          <OutlinedInput
            type="number"
            label="Mobile Verification"
            placeholder="9841468940"
            width="100%"
          />

          <OutlinedInput
            type="number"
            label="OTP Code"
            placeholder=" "
            width="100%"
          />

          <Body4
            color="#FC3232"
            lineHeight={21}
            fontWeight="700"
            style={{ cursor: "pointer" }}
          >
            Please Verify Your Mobile Number{" "}
          </Body4>
        </Flex>

        <img src={jeepImage} alt="jeep" />
      </Flex>
    </Container>
  );
}

export default MobileverificationContainer;
