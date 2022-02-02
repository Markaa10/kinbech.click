import { PiechartIcon } from "assets/icons";
import { Body1, Title5 } from "components/texts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ActionButton from "components/buttons/action";
import { colors } from "theme";
import Flex from "components/flex";
import Button from "components/buttons/button";

const Container = styled.div`
  ${tw`py-5 px-4 w-full`};

  background: #ffffff;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Header = styled(Flex)`
  ${tw`items-center pb-5 justify-between`};

  border-bottom: 1px solid #9099d3;
`;

const HeaderRight = styled(Flex)`
  ${tw`items-center gap-11 `};
`;

type IInfoCardProps = {
  title: string;
  icon: JSX.Element;
  action?: string;
  children?: JSX.Element | JSX.Element[];
  rest?: any;
};
function InfoCard({ title, icon, action, children, ...rest }: IInfoCardProps) {
  return (
    <Container {...rest}>
      <Header>
        <HeaderRight>
          {icon}
          <Body1 lineHeight={28.88} color={colors.primary}>
            {title}
          </Body1>
        </HeaderRight>

        <>{action && <Button text={action} />}</>
      </Header>

      {children}
    </Container>
  );
}

export default InfoCard;
