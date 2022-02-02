import React from "react";
import styled from "styled-components";
import Flex from "../../../components/flex";
import Checkbox from "../../../components/input/checkbox";
import OutlinedInput from "../../../components/input/outlined";
import { ChangePasswordIllustration } from "../../../assets/illustrations";
import Button from "../../../components/buttons/button";
import tw from "twin.macro";
import { EyeIcon } from "assets/icons";

const Container = styled(Flex)`
  ${tw`py-10 px-20 justify-between items-end`};
  width: 80%;
  margin: 2.93rem auto;
  background: #ffffff;
  border-radius: 20px;
`;
function ChangePasswordContainer() {
  return (
    <Container>
      <Flex direction="column" gap={2.125} width="100%" alignItems="center">
        <OutlinedInput
          label="Current Password"
          placeholder="*********"
          width="100%"
          icon={<EyeIcon />}
          type="password"
        />
        <OutlinedInput
          width="100%"
          label="New Passowrd"
          placeholder="*********"
          icon={<EyeIcon />}
          type="password"
        />
        <OutlinedInput
          width="100%"
          label="Retype New Password"
          placeholder="*********"
          marginBottom={3.625}
          icon={<EyeIcon />}
          type="password"
        />

        <Button text="CHANGE PASSWORD" marginBottom={200} />
      </Flex>

      <img src={ChangePasswordIllustration} alt="change" />
    </Container>
  );
}

export default ChangePasswordContainer;
