import { PiechartIcon } from "assets/icons";
import { Body1, Title5 } from "components/texts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ActionButton from "components/buttons/action";

interface IContainerProps {
  width: string;
}
const Container = styled.div<IContainerProps>`
  ${tw`p-3`};
  width: ${(p) => p.width};

  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Header = styled.div`
  ${tw`flex items-center justify-between pb-5`};
  border-bottom: 1px solid #9099d3;
`;

const HeaderRight = styled.section`
  ${tw`inline-flex`}
`;

type IInfoCardProps = {
  title: string;
  icon: JSX.Element;
  action?: string;
  width?: string;
  children?: JSX.Element | JSX.Element[];
};
function InfoCard(props: IInfoCardProps) {
  const { title, icon, action, children, width = "100%" } = props;

  return (
    <Container width={width}>
      <Header>
        <HeaderRight>
          {icon}
          <Title5 marginLeft={42}>{title}</Title5>
        </HeaderRight>
        {action && <ActionButton text={action} />}
      </Header>

      {children}
    </Container>
  );
}

export default InfoCard;
