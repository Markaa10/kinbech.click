import { EnvelopeIcon, PhoneIcon, PinIcon } from "assets/icons";
import Flex from "components/flex";
import { Body1, Body3, Title5 } from "components/texts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
  ${tw`pt-7 pb-2`}
`;

function Footer() {
  const links = [
    { id: 1, link: "Saftey Tips" },
    { id: 2, link: "Terms & Conditions" },
    { id: 3, link: "Privacy Policy" },
  ];
  return (
    <Container>
      <Flex justifyContent="space-between" style={{ margin: "0 71px" }}>
        <Title5>KINBECH.CLICK</Title5>
        <Flex gap={1} alignItems="center">
          <PhoneIcon />
          <Body1>202-555-0129</Body1>
        </Flex>
        <Flex gap={1} alignItems="center">
          <EnvelopeIcon />
          <Body1>Kinbech.click@gmail.com</Body1>
        </Flex>
        <Flex gap={1} alignItems="center">
          <PinIcon />
          <Body1>San-Pablo, Calafornia, USA</Body1>
        </Flex>
      </Flex>

      <Flex width="90%" style={{ margin: "30px 71px 0 71px" }}>
        <Body3>
          © 2020 Kinbech.click All rights Reserved | Developed by Rahul Raj
          Dahal, Pradeep Dahal and Designed by Sagar Ghimire
        </Body3>

        <Flex width="30%">
          {links.map((item) => (
            <Body3 key={item.id}>{item.link}</Body3>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
