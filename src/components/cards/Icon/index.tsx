import React from "react";
import styled from "styled-components";

import { Title3, Title5 } from "../../../components/texts";
import PuzzlePieceIcon from "../../../assets/icons/PuzzlePieceIcon";
import tw from "twin.macro";
import { colors } from "theme";

interface IContainerProps {
  background: string;
  marginBottom: number;
}
const Container = styled.div<IContainerProps>`
  ${tw`py-2
       px-7
       flex items-center
       justify-between 
       w-full`}
  background:${(p) => p.background};
  border-radius: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: ${(p) => p.marginBottom}px;
`;

type IIconCardProps = {
  icon: JSX.Element;
  title: string;
  body?: string;
  background?: string;
  iconRight?: boolean;
  marginBottom?: number;
};
function IconCard(props: IIconCardProps) {
  const {
    iconRight = false,
    icon,
    title,
    body,
    background = colors.secondary,
    marginBottom = 0,
  } = props;

  return (
    <Container background={background} marginBottom={marginBottom}>
      {!iconRight && icon}
      <div>
        <Title3 color="#fff">{title}</Title3>
        <Title5 color="#fff">{body}</Title5>
      </div>
      {iconRight && icon}
    </Container>
  );
}

export default IconCard;
