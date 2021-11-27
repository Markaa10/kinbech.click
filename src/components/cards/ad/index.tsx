import { ArrowDownIcon } from "assets/icons";
import { Title5, Title6 } from "components/texts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`py-2 px-5 flex flex-col items-center`};
  background: #ffffff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

type IAdCardProps = { icon: any; title: string };

function AdCard(props: IAdCardProps) {
  const { icon, title } = props;

  return (
    <Container>
      <img src={icon} alt="icon" />
      <Title6 marginTop={20} marginBottom={20}>
        {title}
      </Title6>
      <ArrowDownIcon />
    </Container>
  );
}

export default AdCard;
