import { ChangeIllustration } from "assets/illustrations";
import Button from "components/buttons/button";
import Flex from "components/flex";
import Checkbox from "components/input/checkbox";
import OutlinedInput from "components/input/outlined";
import SelectInput from "components/input/select";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled(Flex)`
  ${tw`py-10 px-20 justify-between items-center`};
  width: 80%;
  margin: 2.93rem auto;
  background: #ffffff;
  border-radius: 20px;
`;

function ChangeInformationContainer() {
  return (
    <Container gap={1.875}>
      <Flex direction="column" alignItems="center">
        <OutlinedInput
          label="Full Name"
          placeholder="Sagar Ghimire"
          width="100%"
        />
        <Flex gap={2.5625} width="100%" justifyContent="space-between">
          <SelectInput label="Country"  />
          <OutlinedInput width="100%" label="Phone" placeholder="01-552860" />
        </Flex>
        <OutlinedInput label="Mobile" width="100%" placeholder="9841468940" />
        <Flex gap={2.5625} width="100%" justifyContent="space-between">
          <OutlinedInput
            width="100%"
            label="Street"
            placeholder="Harisiddhi-8"
          />
          <OutlinedInput width="100%" label="City" placeholder="Lalitpur" />
        </Flex>
        <Checkbox label="I do not want to subscribe to site newsletter." />
        <Checkbox
          label="Hide my phone numbe in my ads (only contact from email)"
          marginTop={0.98}
          marginBottom={4.1875}
        />
        <Button text="SAVE" />
      </Flex>

      <img src={ChangeIllustration} alt="change" />
    </Container>
  );
}

export default ChangeInformationContainer;
